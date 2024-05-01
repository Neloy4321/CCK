import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios"
import Card from './Card';
import Cook from '../../../back/model/cook.model';

function Most() {

    const [cook, setCook] = useState([]);
    useEffect(() => {
      const getCook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/cook");
          console.log(res.data);
          setCook(res.data.filter((data) => data.category === "MostSell"));
        } catch (error) {
          console.log(error);
        }
      };
      getCook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
        <div  className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div><h1 className="font-bold text-2xl pb-2">Most Selling Products</h1>
                <p className="text-xl">Chowdhury Cookaries has revolutionized kitchens worldwide with its top-selling cooking appliances.
                    Their multifunctional electric pressure cooker, renowned for its efficiency and versatility,leads the pack.
                    Additionally, their sleek air fryer has gained immense popularity for guilt-free frying.
                    Not to be overlooked is their innovative slow cooker, perfect for tenderizing meats and creating flavorful stews.</p>
            </div>
            <div> <Slider {...settings}>
                {cook.map((item) => (
                    <Card item={item} key={item.id}/>
                ))}
            </Slider></div>
            </div>
        </>
    );
}

export default Most;
