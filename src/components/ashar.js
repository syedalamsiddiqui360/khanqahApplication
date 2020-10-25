import React, { useState, useEffect } from 'react';
import List from './list/list';
import axios from 'axios';


function Ashar() {
    const data1 = [
        {
            name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
            price: '2,265,500',
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            tag1: "Lease",
            tag2: "",
            tag1CN: "offer-type bg-info",
            tag2CN: "",
            imgSrc: "assets/images/img_1.jpg",
            audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
            date: "13-8-2019",
        },
        {
            name: "140516_002.MP3",
            price: '2,265,500',
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            tag1: "sale",
            tag2: "Rent",
            tag1CN: "offer-type bg-danger",
            tag2CN: "offer-type bg-success",
            imgSrc: "assets/images/img_2.jpg",
            audioUrl: "audio/140516_002.MP3",

            date: "13-8-2019",
        },
        {
            name: "140603_001.MP3",
            price: '20-2-2020',
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            tag1: "sale",
            tag2: "Rent",
            tag1CN: "offer-type bg-danger",
            tag2CN: "offer-type bg-success",
            audioUrl: "audio/140603_001.MP3",
            imgSrc: "assets/images/img_3.jpg",
            date: "13-8-2019",
        },
        {
            name: "Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
            price: '2,265,500',
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            tag1: "Lease",
            tag2: "Rent",
            tag1CN: "offer-type bg-info",
            tag2CN: "offer-type bg-success",
            audioUrl: "audio/Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
            imgSrc: "assets/images/img_4.jpg",
            date: "13-8-2019",
        },
        {
            name: "Ashar, hay lamhaat gaflat-e-dil k.mp3",
            price: '2,265,500',
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            tag1: "sale",
            tag2: "Rent",
            audioUrl: "audio/Ashar, hay lamhaat gaflat-e-dil k.mp3",
            tag1CN: "offer-type bg-danger",
            tag2CN: "offer-type bg-success",
            imgSrc: "assets/images/img_5.jpg",
            date: "13-8-2019",
        },
        {
            name: "Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
            price: '2,265,500',
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            tag1: "Lease",
            tag2: "",
            tag1CN: "offer-type bg-info",
            audioUrl: "audio/Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
            tag2CN: "",
            imgSrc: "assets/images/img_6.jpg",
            date: "13-8-2019",
        }
    ]

    const [data, setData] = useState([]);
    const [size, setSize] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getAshar();
    }, [])

    useEffect(() => {
    }, [isUpdate])

    const getAshar = () => {
        let newList = [];
        axios.post('http://localhost:9000/audio/get_all_ashar', {
            category_id: 1,
            offset:0,
            limit:6
        }
        ).then((res) => {
            let data = res.data.data;
            let length = res.data.length
            console.log(data);
            console.log(length);
            data.forEach((item) => {
                newList.push({ ...item })
            })
            setData(newList)
            setSize(length)
            setIsUpdate(!isUpdate)
        }).catch((err) => {
            console.log('FAILURE!!' + err);
        });
    }

    const callChunks = (chunks) => {
        console.log("set chunks")
    }

    return (
        <div>
            <List data={data} size={size} callChunks={callChunks} />
        </div>
    );
}
export default Ashar;
