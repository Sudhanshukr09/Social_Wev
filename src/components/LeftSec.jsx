import React from "react";
import {
  MdOutlineRssFeed,
  MdEvent,
  MdSlowMotionVideo,
  MdGroups,
} from "react-icons/md";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaBookmark, FaQuestionCircle, FaGraduationCap } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import person_1 from '../Assets/person-1.jpeg'
import person_2 from '../Assets/person-2.jpeg'
import person_3 from '../Assets/person-3.jpg'
import person_4 from '../Assets/person-4.jpg'
import person_5 from '../Assets/person-5.jpg'
import person_6 from '../Assets/person-6.jpg'

const LeftSec = () => {
  return (
    <div>

      <div className="h-[89.9vh] select-none w-[20vw] overflow-y-scroll scrollbar-thin  scrollbar-track-slate-200">
        <div className="flex flex-col gap-3 pl-1 pt-5 pr-[80px] border-gray-300 border-b-[1.5px] mx-4 pb-4">
          <p className="flex gap-3 items-center">
            <MdOutlineRssFeed className="size-5" />
            Feed
          </p>
          <p className="flex gap-3 items-center">
            <BsChatSquareDotsFill className="size-5" />
            Chats
          </p>
          <p className="flex gap-3 items-center">
            <MdSlowMotionVideo className="size-5" />
            Videos
          </p>
          <p className="flex gap-3 items-center">
            <MdGroups className="size-5" />
            Groups
          </p>
          <p className="flex gap-3 items-center">
            <FaBookmark className="size-5" />
            Bookmarks
          </p>
          <p className="flex gap-3 items-center">
            <FaQuestionCircle className="size-5" />
            Questions
          </p>
          <p className="flex gap-3 items-center">
            <IoBagOutline className="size-5" />
            Jobs
          </p>
          <p className="flex gap-3 items-center">
            <MdEvent />
            Events

          </p>
          <p className="flex gap-3 items-center">
            <FaGraduationCap className="size-5" />
            Courses
          </p>
          <button className="px-6 w-fit py-1 bg-gray-200 rounded-md font-medium text-[13px]">
            Show More
          </button>
        </div>
        <div className="text-sm flex flex-col mt-8 mb-2 gap-3 font-semibold">
          <p className="flex items-center relative gap-2">
            <img className="rounded-full h-10 " src={person_1} alt="" />
            Abhishek Raj
          </p>
          <p className="flex items-center relative gap-2">
            <img className="rounded-full h-10 " src={person_2} alt="" />
          Pawan Daksh
          </p>
          <p className="flex items-center relative gap-2">
            <img className="rounded-full h-10 " src={person_3} alt="" />
            Arvind Kumar
          </p>
          <p className="flex items-center relative gap-2">
            <img className="rounded-full h-10 " src={person_4} alt="" />
            Sourav Jha
          </p>
          <p className="flex items-center relative gap-2">
            <img className="rounded-full h-10 " src={person_5} alt="" />
                        Shubham Rai
          </p>
          <p className="flex items-center relative gap-2">
            <img className="rounded-full h-10 " src={person_6} alt="" />
            Dora the Explorer
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSec;
