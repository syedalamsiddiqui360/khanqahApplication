import React, { useState, useEffect, useReducer } from 'react';
import List from './list/list';
import axios from 'axios';

const myReducer = (state, action) => {
    switch (action.type) {
        case "chunks":
            return { off: state.off + 6 };
        case "isNewUrl":
            return { isNewUrl: true, off: 0 };
        default:
            throw new Error();
    }
};

function Ashar() {

    const [state, dispatch] = useReducer(myReducer, {
        off: 0,
        isNewUrl: false,
    });

    const [data, setData] = useState([]);
    const [size, setSize] = useState(0);
    const [offset, setOffset] = useState(1);
    const [categoryId, setCategoryId] = useState(0);
    const [typeId, setTypeId] = useState(2);
    const [personId, setPersonId] = useState(0);
    const [url, setUrl] = useState("get_all_by_type");
    const [noOfItem, setNoOFItem] = useState(6);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateLower, setUpdateLower] = useState(false);
    const [listType, setListType] = useState("audio");

    useEffect(() => {
        getAshar();
    }, [url, categoryId, personId, state])

    useEffect(() => {
        console.log("use effect2")
    }, [isUpdate])

    const getAshar = () => {
        let newList = [];
        axios.post('http://localhost:9000/audio/' + url, {
            categoryId: categoryId,
            typeId: typeId,
            personId: personId,
            offset: state.off,
            limit: noOfItem
        }).then((res) => {
            let data1 = res.data.data;
            let length = res.data.length
            // console.log(data1);
            // console.log(data);
            // console.log(length);
            if (!state.isNewUrl) {
                data1.forEach((item) => {
                    data.push({ ...item })
                })
                setData(data)
            } else {
                data1.forEach((item) => {
                    newList.push({ ...item })
                })
                setData(newList)
                setUpdateLower(!updateLower)
            }
            setSize(length)
            setIsUpdate(!isUpdate)
        }).catch((err) => {
            console.log('FAILURE!!' + err);
        });
    }

    const callChunks = (chunks) => {
        dispatch({ type: 'chunks' })
        setOffset(offset + 1)
    }

    const callData = (person, type, category) => {
        setOffset(0)
        setData([])
        setCategoryId(category)
        setPersonId(person)
        setIsUpdate(!isUpdate)

        category != -1 && person != -1 ? callApi("get_all_by_type_person_category") :
            category != -1 ? callApi("get_all_by_category") :
                person != -1 ? callApi("get_all_by_type_person") :
                    callApi("get_all_by_type", 0, 0);
    }

    const callApi = (url) => {
        setUrl(url)
        dispatch({ type: 'isNewUrl' })
    }

    return (
        <div>
            <List listType={listType} data={data} updateLower={updateLower} type={typeId} noOfItem={noOfItem} size={size} callChunks={callChunks} callData={callData} />
        </div>
    );
}
export default Ashar;
