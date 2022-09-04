//external imports
const AdminRoute = require("express").Router();

//internal imports
const ClassController = require("../controllers/ClassController");
const ExamController = require("../controllers/ExamController");
const SectionController = require("../controllers/SectionController");
const SubjectController = require("../controllers/SubjectController");

//declare routes

//teacher
AdminRoute.route("/teacher/");
AdminRoute.route("/teacher/view");
AdminRoute.route("/teacher/create");
AdminRoute.route("/teacher/update");
AdminRoute.route("/teacher/delete");

//student
AdminRoute.route("/student/");
AdminRoute.route("/student/view");
AdminRoute.route("/student/create");
AdminRoute.route("/student/update");
AdminRoute.route("/student/delete");

//result
AdminRoute.route("/result/");
AdminRoute.route("/result/view");
AdminRoute.route("/result/create");
AdminRoute.route("/result/update");
AdminRoute.route("/result/delete");

//class
AdminRoute.route("/class").get(ClassController.get_all);
AdminRoute.route("/class/view").get(ClassController.get_single);
AdminRoute.route("/class/create").post(ClassController.create);
AdminRoute.route("/class/update").put(ClassController.update);
AdminRoute.route("/class/delete").delete(ClassController.delete);

//exam
AdminRoute.route("/exam/").get(ExamController.get_all);
AdminRoute.route("/exam/view").get(ExamController.get_single);
AdminRoute.route("/exam/create").post(ExamController.create);
AdminRoute.route("/exam/update").put(ExamController.update);
AdminRoute.route("/exam/delete").delete(ExamController.delete);

//section
AdminRoute.route("/section/").get(SectionController.get_all);
AdminRoute.route("/section/view").get(SectionController.get_single);
AdminRoute.route("/section/create").post(SectionController.create);
AdminRoute.route("/section/update").put(SectionController.update);
AdminRoute.route("/section/delete").delete(SectionController.delete);

//subject
AdminRoute.route("/subject/").get(SubjectController.get_all);
AdminRoute.route("/subject/view").get(SubjectController.get_single);
AdminRoute.route("/subject/create").post(SubjectController.create);
AdminRoute.route("/subject/update").put(SubjectController.update);
AdminRoute.route("/subject/delete").delete(SubjectController.delete);

//magazine
AdminRoute.route("/magazine/");
AdminRoute.route("/magazine/view");
AdminRoute.route("/magazine/create");
AdminRoute.route("/magazine/update");
AdminRoute.route("/magazine/delete");

//notice
AdminRoute.route("/notice/");
AdminRoute.route("/notice/view");
AdminRoute.route("/notice/create");
AdminRoute.route("/notice/update");
AdminRoute.route("/notice/delete");

//event
AdminRoute.route("/event/");
AdminRoute.route("/event/view");
AdminRoute.route("/event/create");
AdminRoute.route("/event/update");
AdminRoute.route("/event/delete");

//export the module
module.exports = AdminRoute;
