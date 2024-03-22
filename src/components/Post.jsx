import React, { useState } from "react";
import Pfphoto from "../Assets/pf.jpeg";
import { HiDotsVertical } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { GiHearts } from "react-icons/gi";

const Post = ({post}) => {
  const [like, setlike] = useState(post.like)
  const [islike, setislike] = useState(false)

  const likeHandle = ()=>{
    setlike(islike? like-1: like+1)
    setislike(!islike)
  }

  return (
    <div className="rounded-lg mt-8 mb-8 flex flex-col gap-4 select-none shadow-[0_1px_7px_rgb(0,0,0,0.2)] p-4">
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-2 items-center">
          <img className="rounded-full h-7" src={Pfphoto} alt="" />
          <h2 className="font-medium text-sm">Dholu Kumar</h2>
          <p className="text-[10px]">{post.date}</p>
        </div>
        <div>
          <HiDotsVertical />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>{post?.desc}</p>
        <img
          className="h-[30rem] object-contain"
          src={post.photo}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between w-[90%] mx-auto text-[12px]">
        <div className="flex items-center gap-1 ">
          <AiFillLike onClick={likeHandle} className="size-5 active:scale-110 text-white bg-blue-600 rounded-full pb-1 py-[3px]" />
          <GiHearts onClick={likeHandle}  className="size-5 bg-red-600 text-white rounded-full pt-1 py-[3px]" />
          {like} people like it
        </div>
        <div>{post.comment} comments</div>
      </div>
    </div>
  );
};

export default Post;
