import React from "react";
import { Button, Typography } from "@mui/material";
import "./GithubCard.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteGithub, getUser } from "../../actions/user";
const GithubCard = ({
  url = "https://github.com/Dipendra6377",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteGithub(id));
    dispatch(getUser());
  };
  return (
    <div className="githubCard">
      <a href={url} target="blank">
        <img src={image} alt="Video" />
        <Typography className="githubTitle">{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default GithubCard;
