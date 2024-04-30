import React from 'react'
import list from "../../public/list.json"
import Card from './Card'
import {Link} from "react-router-dom"

function Product() {
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl  md:text-4xl">
                        Welcome to the World of Cooking Appliances{" "}
                        <span className="text-pink-500"> !! ChowdhuryCookaries !!</span>
                    </h1>
                    <p className="mt-10">
                        Welcome to ChowdhuryCookaries!
                        We're thrilled to have you join our culinary community.
                        Explore our premium cooking appliances designed to elevate your kitchen experience.
                        From cutting-edge technology to timeless classics, we've got everything you need to unleash your inner chef.
                        Happy cooking!
                    </p>

                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>



                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {list.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div></>
    )
}

export default Product
