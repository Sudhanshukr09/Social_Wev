import React from "react";
import box from "../Assets/box img.webp";
import party from "../Assets/party img.jpg";
import person_1 from '../Assets/person-1.jpeg'
import person_2 from '../Assets/person-2.jpeg'
import person_3 from '../Assets/person-3.jpg'
import person_4 from '../Assets/person-4.jpg'
import person_5 from '../Assets/person-5.jpg'
import person_6 from '../Assets/person-6.jpg'

const RightSec = () => {
  return (
    <div className="w-[30%] h-[89.9vh] py-3 px-4 overflow-y-scroll select-none scrollbar-thin  scrollbar-track-slate-200">
      <div className="flex">
        <img src={box} alt="Loading..." className="h-14" />
        <p className="leading-4 text-sm">
          <span className="font-bold">Pawan</span> and{" "}
          <span className="font-bold">3 other friends</span> have a birthday
          today.
        </p>
      </div>
      <div>
        <img
          className="rounded-2xl w-[20rem] ml-2"
          src={party}
          alt="Loading..."
        />
      </div>
        <h1 className="text-[15px] my-3 mt-8 font-bold">Online Friends</h1>
        <div className="text-sm flex flex-col gap-3 font-semibold">
          <p className="flex items-center relative gap-2"><img className="rounded-full h-10 " src= {person_1} alt="" /> <div className="inline-block w-4 h-4 bg-green-500 absolute top-0 border-2 border-white rounded-full left-8"></div> Abhishek Raj</p>
          <p className="flex items-center relative gap-2"><img className="rounded-full h-10 " src= {person_2} alt="" /> <div className="inline-block w-4 h-4 bg-green-500 absolute left-8 top-0 border-2 border-white rounded-full"></div> Pawan Daksh</p>
          <p className="flex items-center relative gap-2"><img className="rounded-full h-10 " src= {person_3} alt="" /> <div className="inline-block w-4 h-4 bg-green-500 absolute left-8 top-0 border-2 border-white rounded-full"></div> Arvind Kumar</p>
          <p className="flex items-center relative gap-2"><img className="rounded-full h-10 " src= {person_4} alt="" /> <div className="inline-block w-4 h-4 bg-green-500 absolute left-8 top-0 border-2 border-white rounded-full"></div> Sourav Jha</p>
          <p className="flex items-center relative gap-2"><img className="rounded-full h-10 " src= {person_5} alt="" /> <div className="inline-block w-4 h-4 bg-green-500 absolute left-8 top-0 border-2 border-white z-5rounded-full0 rounded"></div> Shubham Rai</p>
          <p className="flex items-center relative gap-2"><img className="rounded-full h-10 " src= {person_6} alt="" /> <div className="inline-block w-4 h-4 bg-green-500 absolute left-8 top-0 border-2 border-white rounded-full"></div> Dora the Explorer</p>
        </div>
    </div>
  );
};

export default RightSec;
