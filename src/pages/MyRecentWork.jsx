import React from "react";
import project2 from "../images/project-2.png";
import project1 from "../images/project-1.png";

const MyRecentWork = () => {
  const Myprojects = [
    {
      ProjectName: "Beat Maker",
      image: project2,
      ref: "https://beats-js.netlify.app/",
      alt: "beat maker",
    },
    {
      ProjectName: "Resume",
      image: project1,
      ref: "https://abhilashkusa.netlify.app/",
      alt: "Resume",
    },
  ];

  return (
    <div className="section">
      <div id="myrecentwork">
        <div className="container" id="">
          <div className="" id="Myrecent">
            <h1 className="text-capitalize text-lg-center text-center">
              <b className="p-5 font-weight-bolder " id="work-title">
                my work!
              </b>
            </h1>
            <div className="d-md-inline-flex d-sm-flex d-lg-inline-flex  p-2 align-items-end justify-content-center">
              {Myprojects.map((project) => (
                <div
                  className="card m-4"
                  style={{ width: "18rem" }}
                  key={Math.random()}
                >
                  <img
                    className="card-img-top"
                    src={project.image}
                    alt={project.alt}
                  />
                  <div className="card-body">
                    <h5 className="text-center">
                      <a
                        href={project.ref}
                        className="card-title text-center"
                        id="card-background"
                      >
                        {" "}
                        {project.ProjectName}
                      </a>
                    </h5>
                  </div>
                  <div></div>
                </div>
              ))}
              <div>
                <h5>
                  <a
                    href="https://abhilashkusa.netlify.app/"
                    className="text-center"
                    id="text-more"
                  >
                    {" "}
                    More...
                  </a>
                </h5>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyRecentWork;
