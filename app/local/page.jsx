"use client";
import React from "react";
import Banners from "../components/Banners";
import Subfooter from "../components/Subfooter";
import { Button } from "@/components/ui/button";

const Local = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:sahilbambarkar007@gmail.com";
    };

    return (
        <div>
            <Banners
                img="/local-banner.jpg"
                title="Local Transfers"
                text="Add to the memories on your big day with Karwaan"
            />
            <div className="max-w-[1150px] mx-4 lg:mx-auto my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h1 className="text-third-color text-4xl font-bold mb-10">
                            Local Car Services
                        </h1>
                        <p className="leading-6 text-lg text-slate-400">
                            At Karwaan, we comprehend the meaning of a vehicle administration
                            for your big day. <br />
                            <br />
                            Our wedding cars are meticulously prepared for a flawless look, and we'll plan your route to ensure reliability. Please let us know if you would want any extras, such as improvements, to make your experience more enjoyable.
                            <br />
                            <br />
                            Customize your experience with us and make every ride truly
                            exceptional.
                        </p>
                        <div className="flex px-2 p-5 text-black  text-xl  ">
                            <Button  onClick={handleEmailClick}>
                                Email enquiry
                            </Button>
                        </div>
                    </div>
                    <img src="/local.jpeg" className="w-full h-full object-cover" alt="Local Car Services" />
                </div>
                <h2 className="text-center text-md md:text-4xl text-slate-500 my-16">
                    Whether you seek lavish indulgence or spacious versatility, our
                    versatile fleet ensures the ideal ride for every event.
                </h2>
            </div>
            <Subfooter />
        </div>
    );
};

export default Local;