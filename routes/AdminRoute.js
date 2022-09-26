//external imports
const AdminRoute = require("express").Router();

//internal imports
const ClassController = require("../controllers/ClassController");
const EventController = require("../controllers/EventController");
const ExamController = require("../controllers/ExamController");
const MagazineController = require("../controllers/MagazineController");
const NoticeController = require("../controllers/NoticeController");
const SectionController = require("../controllers/SectionController");
const StudentController = require("../controllers/StudentController");
const SubjectController = require("../controllers/SubjectController");
const TeacherController = require("../controllers/TeacherController");

//declare routes

//teacher
AdminRoute.route("/teacher/").get(TeacherController.get_all);
AdminRoute.route("/teacher/view").get(TeacherController.get_single);
AdminRoute.route("/teacher/create").post(TeacherController.create);
AdminRoute.route("/teacher/update").put(TeacherController.update);
AdminRoute.route("/teacher/delete").delete(TeacherController.delete);

//student
AdminRoute.route("/student/").get(StudentController.get_all);
AdminRoute.route("/student/view").get(StudentController.get_single);
AdminRoute.route("/student/create").post(StudentController.create);
AdminRoute.route("/student/update").put(StudentController.update);
AdminRoute.route("/student/delete").delete(StudentController.delete);

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
AdminRoute.route("/magazine/").get(MagazineController.get_all);
AdminRoute.route("/magazine/view").get(MagazineController.get_single);
AdminRoute.route("/magazine/create").post(MagazineController.create);
AdminRoute.route("/magazine/update").put(MagazineController.update);
AdminRoute.route("/magazine/delete").delete(MagazineController.delete);

//notice
AdminRoute.route("/notice/").get(NoticeController.get_all);
AdminRoute.route("/notice/view").get(NoticeController.get_single);
AdminRoute.route("/notice/create").post(NoticeController.create);
AdminRoute.route("/notice/update").put(NoticeController.update);
AdminRoute.route("/notice/delete").delete(NoticeController.delete);

//event
AdminRoute.route("/event/").get(EventController.get_all);
AdminRoute.route("/event/view").get(EventController.get_single);
AdminRoute.route("/event/create").post(EventController.create);
AdminRoute.route("/event/update").put(EventController.update);
AdminRoute.route("/event/delete").delete(EventController.delete);

//export the module
module.exports = AdminRoute;
