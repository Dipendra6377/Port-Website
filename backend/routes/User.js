import express from "express";
import {
  addGithub,
  addProject,
  addTimeline,
  contact,
  deleteGithub,
  deleteProject,
  deleteTimeline,
  getUser,
  login,
  logout,
  myProfile,
  updateUser,
} from "../controller/User.js";
import { isAuthenticated } from "../middleware/auth.js";
export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/admin/update").put(isAuthenticated, updateUser);
userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);

userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRouter.route("/admin/github/add").post(isAuthenticated, addGithub);
userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
userRouter.route("/admin/github/:id").delete(isAuthenticated, deleteGithub);
userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

userRouter.route("/contact").post(contact);
