import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png"
import cpp from "../assets/cpp.png"
import cprogramming from "../assets/cprogramming.png"
import express from "../assets/express.png"
import nodejs from "../assets/node.png"
import illustrator from "../assets/illustrator.png"
import photoshop from "../assets/photoshop.png"
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png"
import sql from "../assets/sql.png"
import python from "../assets/python.png"
import powerbi from "../assets/powerbi.png"
import excel from "../assets/excel.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-300",
    },
    
    {
      id: 8,
      src: express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: python,
      title: "Python & Libraries",
      style: "shadow-blue-900",
    },
    {
      id: 12,
      src: powerbi,
      title: "Power BI",
      style: "shadow-yellow-600",
    },
    {
      id: 13,
      src: sql,
      title: "SQL",
      style: "shadow-sky-600",
    },
    {
      id: 14,
      src: excel,
      title: "Excel",
      style: "shadow-green-700",
    },
    
    {
      id: 15,
      src: cprogramming,
      title: "C",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: cpp,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 17,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-blue-700",
    },
    {
      id: 18,
      src: illustrator,
      title: "Illustrator",
      style: "shadow-orange-900",
    },
    
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-6 text-center py-2  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-1 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;