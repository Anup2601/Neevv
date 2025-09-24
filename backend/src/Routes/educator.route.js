import express from "express";
// import { addCourse, addChapter, addLecture, getEducatorCourses } from "../Controllers/educator.controller.js";
import { protectRoute } from "../Middlewares/auth.middleware.js";
import { updateRoleToEducator } from "../Controllers/educator.controller.js";

const router = express.Router();

router.use(protectRoute);

router.get('/update-role',updateRoleToEducator)
// router.post("/course", addCourse);
// router.post("/chapter", addChapter);
// router.post("/lecture", addLecture);
// router.get("/courses", getEducatorCourses);

export default router;
