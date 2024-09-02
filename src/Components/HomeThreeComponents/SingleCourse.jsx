/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { clock, file, star } from '../../constant/images'

const SingleCourse = ({ data }) => {
    return (
        <>
            { }
            <div className="cat-2 cat-3 grid-item xl:w-1/3 lg:w-1/2 w-full px-[15px] mb-[15px]">
                <a
                    className=" bg-white shadow-box2 rounded-[8px] transition duration-100 
                    hover:shadow-sm block   mb-5 "
                    href="#"
                >
                    <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                        <img
                            src={data.img}
                            alt=""
                            className=" w-full h-full object-cover rounded-t-[8px]"
                        />
                        <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded 
                        text-white absolute left-6 top-6">
                            {data.post}
                        </span>
                    </div>
                    <div className="course-content p-8">
                        <div className="text-secondary font-bold text-2xl mb-3">
                            {data.price}
                        </div>
                        <h4 className=" text-xl mb-3 font-bold">
                            {data.title}
                        </h4>
                        <div className="flex justify-between  space-x-3">
                            <span className=" flex items-center space-x-2">
                                <img src={file} alt="" />
                                <span>2 Lessons</span>
                            </span>
                            <span className=" flex items-center space-x-2">
                                <img src={clock} alt="" />
                                <span>4h 30m</span>
                            </span>
                            <span className=" flex items-center space-x-2">
                                <img src={star} alt="" />
                                <span>4.8</span>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default SingleCourse