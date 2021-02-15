import React, { useState, useEffect, useReducer } from 'react';
import List from './list/list';
import axios from 'axios';
import { useLocation, useParams } from "react-router";

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

function Audio() {

    const [state, dispatch] = useReducer(myReducer, {
        off: 0,
        isNewUrl: false,
    });
    const location = useLocation();
    const [data, setData] = useState([]);
    const [size, setSize] = useState(0);
    const [offset, setOffset] = useState(1);
    const [categoryId, setCategoryId] = useState(0);
    const [typeId, setTypeId] = useState(0);
    const [personId, setPersonId] = useState(0);
    const [url, setUrl] = useState("get_all_by_type");
    const [noOfItem, setNoOFItem] = useState(6);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateLower, setUpdateLower] = useState(false);
    const [updateUper, setUpdateUper] = useState(false);
    const [listType, setListType] = useState("audio");
    const [searchText, setSearchText] = useState("");
    const param = useParams();

    useEffect(() => {
        console.log(location)
    }, [url, categoryId, personId, state])

    useEffect(() => {
        getAshar()
    }, [url, state])

    useEffect(() => {
        getAshar()
    }, [typeId])

    useEffect(() => {

        location.pathname === "/bayan" ? setTypeId(2) : location.pathname === "/ashar" ? setTypeId(1) : setTypeId(4)
        location.pathname === "/book" ? setListType("pdf") : setListType("audio")
        if (location.state != null) {
            callData(location.state.personId, 0, location.state.categoryId, "")
        }
    }, [location.state, location.pathname])

    useEffect(() => {
        setUpdateUper(!updateUper)
    }, [isUpdate])

    const getAshar = () => {
        let newList = [];
        axios.post('http://localhost:9000/' + listType + '/' + url, {
            categoryId: categoryId,
            typeId: typeId,
            personId: personId,
            offset: state.off,
            limit: noOfItem,
            search: searchText
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

    const callData = (person, type, category, search) => {
        setOffset(0)
        setData([])
        setCategoryId(category)
        setPersonId(person)
        setSearchText(search)
        // setTypeId(type)
        setIsUpdate(!isUpdate)

        search !== "" && search !== undefined ? callApi("get_all_by_Search") : category != 0 && person != 0 ? callApi("get_all_by_type_person_category") :
            category != 0 ? callApi("get_all_by_category") :
                person != 0 ? callApi("get_all_by_type_person") :
                    callApi("get_all_by_type");
    }

    const callApi = (url) => {
        setUrl(url)
        dispatch({ type: 'isNewUrl' })
    }

    return (
        <div>
            <List listType={listType} updateUper={updateUper} personId={personId} categoryId={categoryId} data={data} updateLower={updateLower} typeId={typeId} noOfItem={noOfItem} size={size} callChunks={callChunks} callData={callData} />
        </div>
    );
}
export default Audio;
