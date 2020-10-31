import React, { useState, useEffect } from 'react';
import List from './list/list';
import axios from 'axios';


function Ashar() {

    const [data, setData] = useState([]);
    const [size, setSize] = useState(0);
    const [offset, setOffset] = useState(1);
    const [type, setType] = useState(1)
    const [noOfItem, setNoOFItem] = useState(6);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getAshar(0);
        getCategory()
    }, [])

    useEffect(() => {
    }, [isUpdate])

    const getType = (id) => {
        // let newList = []
        // axios.post('http://localhost:9000/type/get_by_id', {
        //     id: id
        // })
        //     .then((res) => {
        //         let data = res.data;
        //         console.log(data);
        //         data.forEach((item) => {
        //             newList.push({ id: item.id, title: item.title })
        //         })
        //         setTypeList(data)
        //         setIsUpdate(!isUpdate)
        //          console.log(typeList)
        //     }).catch((err) => {
        //         console.log('FAILURE!!' + err);
        //     });
    }


    const getAshar = (offset) => {
        let newList = [];
        axios.post('http://localhost:9000/audio/get_all_ashar', {
            category_id: 1,
            offset: offset,
            limit: noOfItem
        }).then((res) => {
            let data1 = res.data.data;
            let length = res.data.length
            // console.log(data);
            // console.log(length);
            data1.forEach((item) => {
                data.push({ ...item })
            })
            setData(data)
            setSize(length)
            setIsUpdate(!isUpdate)
        }).catch((err) => {
            console.log('FAILURE!!' + err);
        });
    }

    const callChunks = (chunks) => {
        console.log("set chunks")
        getAshar(offset * noOfItem)
        setOffset(offset + 1)
        // console.log(data)
    }

    const callData = (person, type, category) => {
        console.log("set data")
        // getAshar(offset*noOfItem)
        // setOffset(offset+1)
        console.log(person + " " + type + " " + category)

    }

    return (
        <div>
            <List data={data} type={type} noOfItem={noOfItem} size={size} callChunks={callChunks} callData={callData} />
        </div>
    );
}
export default Ashar;
