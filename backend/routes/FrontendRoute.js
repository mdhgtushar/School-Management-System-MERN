//external imports
const FrontendRoute = require("express").Router();

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
FrontendRoute.route("/teacher/").get(TeacherController.get_all);
FrontendRoute.route("/teacher/view").get(TeacherController.get_single);
FrontendRoute.route("/teacher/create").post(TeacherController.create);
FrontendRoute.route("/teacher/update").put(TeacherController.update);
FrontendRoute.route("/teacher/delete").delete(TeacherController.delete);

//student
FrontendRoute.route("/student/").get(StudentController.get_all);
FrontendRoute.route("/student/view").get(StudentController.get_single);
FrontendRoute.route("/student/create").post(StudentController.create);
FrontendRoute.route("/student/update").put(StudentController.update);
FrontendRoute.route("/student/delete").delete(StudentController.delete);

//result
FrontendRoute.route("/result/");
FrontendRoute.route("/result/view");
FrontendRoute.route("/result/create");
FrontendRoute.route("/result/update");
FrontendRoute.route("/result/delete");

//class
FrontendRoute.route("/class").get(ClassController.get_all);
FrontendRoute.route("/class/view").get(ClassController.get_single);
FrontendRoute.route("/class/create").post(ClassController.create);
FrontendRoute.route("/class/update").put(ClassController.update);
FrontendRoute.route("/class/delete").delete(ClassController.delete);

//exam
FrontendRoute.route("/exam/").get(ExamController.get_all);
FrontendRoute.route("/exam/view").get(ExamController.get_single);
FrontendRoute.route("/exam/create").post(ExamController.create);
FrontendRoute.route("/exam/update").put(ExamController.update);
FrontendRoute.route("/exam/delete").delete(ExamController.delete);

//section
FrontendRoute.route("/section/").get(SectionController.get_all);
FrontendRoute.route("/section/view").get(SectionController.get_single);
FrontendRoute.route("/section/create").post(SectionController.create);
FrontendRoute.route("/section/update").put(SectionController.update);
FrontendRoute.route("/section/delete").delete(SectionController.delete);

//subject
FrontendRoute.route("/subject/").get(SubjectController.get_all);
FrontendRoute.route("/subject/view").get(SubjectController.get_single);
FrontendRoute.route("/subject/create").post(SubjectController.create);
FrontendRoute.route("/subject/update").put(SubjectController.update);
FrontendRoute.route("/subject/delete").delete(SubjectController.delete);

//magazine
FrontendRoute.route("/magazine/").get(MagazineController.get_all);
FrontendRoute.route("/magazine/view").get(MagazineController.get_single);
FrontendRoute.route("/magazine/create").post(MagazineController.create);
FrontendRoute.route("/magazine/update").put(MagazineController.update);
FrontendRoute.route("/magazine/delete").delete(MagazineController.delete);

//notice
FrontendRoute.route("/notice/").get(NoticeController.get_all);
FrontendRoute.route("/notice/view").get(NoticeController.get_single);
FrontendRoute.route("/notice/create").post(NoticeController.create);
FrontendRoute.route("/notice/update").put(NoticeController.update);
FrontendRoute.route("/notice/delete").delete(NoticeController.delete);
FrontendRoute.route("/notice/toggle-status").put(NoticeController.toggle_status);

//event
FrontendRoute.route("/event/").get(EventController.get_all);
FrontendRoute.route("/event/view").get(EventController.get_single);
FrontendRoute.route("/event/create").post(EventController.create);
FrontendRoute.route("/event/update").put(EventController.update);
FrontendRoute.route("/event/delete").delete(EventController.delete);

//export the module
module.exports = FrontendRoute;
