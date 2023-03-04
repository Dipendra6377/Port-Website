import React from "react";
import { Button, Typography } from "@mui/material";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div className="projectContent">
          <Typography variant="h4" className="projectabout">
            About Project
          </Typography>
          <Typography className="projectdesc">{description}</Typography>
          <Typography variant="h6">Tech Stack :{technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};
const Project = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Project <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.teckStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
