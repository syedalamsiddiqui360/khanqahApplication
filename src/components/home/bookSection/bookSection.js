import React, { useEffect, useState } from 'react';
import Item from './item';
import axios from 'axios';

function BookSection() {

    const data11 = [
        {
            name: "Urdu Books",
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            imgSrc: "assets/images/img_1.jpg",
            audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
            date: "Jan 20th, 2019",
            delay: 200
        },
        {
            name: "English Books",
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            imgSrc: "assets/images/img_2.jpg",
            audioUrl: "audio/140516_002.MP3",
            date: "Jan 20th, 2019",
            delay: 300

        },
        {
            name: "Al Abraar",
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            audioUrl: "audio/140603_001.MP3",
            imgSrc: "assets/images/img_3.jpg",
            date: "Jan 20th, 2019",
            delay: 400

        }
    ]
    const [data, setData] = useState([]);
    const [set1, setSet1] = useState([])
    const [set2, setSet2] = useState([])
    const [set3, setSet3] = useState([])

    useEffect(() => {
        callApi(4, 9);
        callApi(4, 8);
        callApi(5, 10);
    }, [])

    useEffect(() => {
        let temp = []
        temp.push(set1)
        temp.push(set2)
        temp.push(set3)

        setData(temp)
        console.log(temp)
    }, [set3, set1, set2])

    const callApi = (typeId, categoryId) => {
        let data = [];
        axios.post('http://localhost:9000/pdf/get_by_type', {
            typeId: typeId,
            limit: 4,
            categoryId: categoryId
        })
            .then((res) => {
                data = res.data;
                switch (typeId, categoryId) {
                    case 4, 9:
                        data.name = "Urdu Books"
                        data.path = "/book"
                        data.interval = 100
                        data.categoryId = 9
                        setSet1(data)
                        break;
                    case 4, 8:
                        data.name = "English Books"
                        data.path = "/book"
                        data.interval = 3000
                        data.categoryId = 8
                        setSet2(data)
                        break;
                    case 5, 10:
                        data.name = "Al Abraar Magzeen"
                        data.path = "/book"
                        data.interval = 1500
                        data.categoryId = 10
                        setSet3(data)
                        break;
                }
            }).catch((err) => {
                console.log('FAILURE!!' + err);
            });
    }


    return (
        <div>
            <div class="site-section">
                <div class="container">
                    <div class="row">
                        {
                            data.map((value, index) => {
                                return (
                                    <Item data={value}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BookSection;