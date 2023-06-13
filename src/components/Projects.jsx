import React from "react";
import forecasting from "../assets/portfolio/forecasting.png";
import microsoft from "../assets/portfolio/microsoft.png";
import netflix from "../assets/portfolio/netflix.jpeg";
import signlanguage from "../assets/portfolio/signlanguage.png";
import spotify from "../assets/portfolio/spotify.png";
import myportfolio from "../assets/portfolio/my-portfolio.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: microsoft,
      demoLink: "https://himanshichainani-ms2ndpage-microsoft-engage-suosmx.streamlit.app/",
      codeLink: "https://github.com/HimanshiChainani/ms2ndpage",
    },
    {
      id: 2,
      src: signlanguage,
      demoLink: "",
      codeLink: "https://github.com/HimanshiChainani/Sign-Language-Detection-6thsem",
    },
    {
      id: 3,
      src: forecasting,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 4,
      src: spotify,
      demoLink: "https://spotifyclonebyhimanshi.netlify.app/",
      codeLink: "https://github.com/HimanshiChainani/React-Spotify-Clone",
    },
    {
      id: 5,
      src: netflix,
      demoLink: "",
      codeLink: "https://github.com/HimanshiChainani/NetflixClone-MERN",
    },
    {
      id: 6,
      src: myportfolio,
      demoLink: "https://myportfolio.netlify.app/",
      codeLink: "https://github.com/HimanshiChainani/my-portfolio",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-15 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                style={{ height: "175px", width: "100%" }}
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-1 mx-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-1 w-1/2 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
