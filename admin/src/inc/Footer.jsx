import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-green-100">
      <div className="container mx-auto">
        <div class="flex justify-between pt-10">
          <div class="wd6">
            <div class="logotitle">
              <Link to="/">
                <div className="flex items-center">
                  <div class="p-5 pl-0">
                    <img
                      className="h-20 w-20"
                      src="http://localhost/ZM-International-School-PHP/zmadminschool/img/logo.jpg"
                      alt=""
                    />
                  </div>
                  <div class="logotitle">
                    <b>Z.M.INTERNATIONAL SCHOOL</b>
                    <h4>zminternationalschool.com</h4>
                  </div>
                </div>
              </Link>
              <b>School Address :</b>
              <p>
                SHAHID MINAR ROAD, NATUN BAZAR,
                <br />
                BIRAMPUR, DINAJPUR.
              </p>
              <b>Contact info :</b>
              <p>
                Email : zzmism2020@gmail.com
                <br />
                Mob : +8801712498815
              </p>
            </div>
          </div>
          <div class="p-5">
            <b>Menu :</b>

            <Link to="index.php" class="footermenu">
              <div>HOME</div>
            </Link>
            <Link to="teachers.php" class="footermenu">
              <div>TEACHERS</div>
            </Link>
            <Link to="students.php" class="footermenu">
              <div>STUDENTS</div>
            </Link>
            <Link to="magazine.php" class="footermenu">
              <div>SCHOOL MAGAZINE</div>
            </Link>
            <Link to="gallery.php" class="footermenu">
              <div>SCHOOL GALLERY</div>
            </Link>
            <Link to="admit.php" class="footermenu">
              <div>ADMISSION</div>
            </Link>
            <Link to="notice.php" class="footermenu">
              <div>NOTICE BORD</div>
            </Link>
          </div>
          <div class="p-5">
            <b>Importent links :</b>
            <p href="index.php" class="footermenu">
              HOME
            </p>
            <p href="teachers.php" class="footermenu">
              TEACHERS
            </p>
            <p href="students.php" class="footermenu">
              STUDENTS
            </p>
            <p href="magazine.php" class="footermenu">
              SCHOOL MAGAZINE
            </p>
            <p href="gallery.php" class="footermenu">
              SCHOOL GALLERY
            </p>
            <p href="admit.php" class="footermenu">
              ADMISSION
            </p>
            <p href="notice.php" class="footermenu">
              <Link to="/admin">Admin Panel</Link>{" "}
            </p>
          </div>
        </div>

        <div className="p-5 text-center text-black-100">
          All © copyright reserved || This site is developed by Md Hg Tushar
        </div>
      </div>
    </section>
  );
};

export default Footer;
