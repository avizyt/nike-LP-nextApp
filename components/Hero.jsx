"use client";

import { arrowRight } from "@/assets/icons";
import { shoes, statistics } from "@/constants";
import { bigShoe1 } from "@/assets/images";
import Image from "next/image";
import { useState } from "react";
import { Button, ShoeCard } from "@/components";

const Hero = () => {
    const [bigshoeImg, setBigShowImg] = useState(bigShoe1);
    return (
        <section
            id='home'
            className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                <p>Our Summer Collection</p>
                <h1>
                    <span>The New Arrival</span>
                    <br />
                    <span>Nike</span>
                    Shoes
                </h1>
                <p>
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>
                <Button label='Show now' iconURL={arrowRight} />
                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className='text-4xl font-palanquin font-bold'>
                                {stat.value}
                            </p>
                            <p className='leading-7 font-montserrat text-slate-gray'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <Image
                    src={bigShoeImg}
                    alt='shoe collection'
                    width={610}
                    height={502}
                    className='object-contain relative z-10'
                />
                <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <ShoeCard
                                index={index}
                                imgURL={image}
                                changeBigShowImage={(shoe) =>
                                    setBigShowImg(shoe)
                                }
                                bigShoeImg={bigshoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
