import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-3">I have been part of few mentorship programs and have done some internships as well: </p>
        </div>

        <div >
          <h1 className="text-xl font-bold">Microsoft Engage Mentee</h1>
          <p className="text-s font-thin mt-1">
          1 month program in which we learned industry relevant skills through mentorship, coding challenges, workshops, and networking opportunities.
        </p>
        </div>
        

        <br />

        <div >
          <h1 className="text-xl font-bold">EventiaPro Events Pvt. Ltd., <span>Graphic Designer Head</span></h1>
          <p className="text-s font-thin mt-1">
          Lead the Graphics team and used to handle all types of content creation and social media. Used tools like Adobe Ai, Ps, Pr and Figma.
        </p>
        </div>
        <br />
        <div >
          <h1 className="text-xl font-bold">EventiaPro Events Pvt. Ltd., <span>Frontend Developer</span></h1>
          <p className="text-s font-thin mt-1">
          We were making official website of EventiaPro Events using tools and frameworks like React, MaterialUI, CSS, MongoDB, Express and Node.
        </p>
        </div>
        <br />
        <div >
          <h1 className="text-xl font-bold">Pronounce solar, <span>Graphic Designer and Video Editor</span></h1>
          <p className="text-s font-thin mt-1">
          My work was to create content such as video blogs, short videos of products and digital posters.
          Managed the work of 3 employees, increasing crew efficiency.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
