import React from 'react'
import './OneHome.css'
import { BsCalendar } from "react-icons/bs";
import { BsChatFill } from "react-icons/bs";


interface OneHomeBlogProps {
    blogImgProps: string;
    blogNameProps: string;
    blogNumberProps: string;
    blogCommentprops: string;
}

const OneHomeBlog: React.FC<OneHomeBlogProps> = ({ blogImgProps, blogNameProps, blogNumberProps, blogCommentprops }) => {
    return (
        <div className='oneHomeBlog'>
            <img src={blogImgProps} alt="" className='home-img my-3' />
            <div className="overlay"></div>
            <h5 className='text-center py-1'>{blogNameProps}</h5>
            <div className="blog-texts d-flex justify-content-center">
                <span className="blog-number"><BsCalendar className='blog-icon' />{blogNumberProps}</span>
                <span className="blog-comment"><BsChatFill className='blog-icon' />{blogCommentprops}</span>
            </div>
        </div>
    )
}

export default OneHomeBlog