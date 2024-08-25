import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style/PageBanner.module.css";

const PageBanner = ({ pageName, pageTitle, num, title }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
      <div className="container text-center">
        <h2>{title}</h2>
        <nav>
          <ol className="flex items-center justify-center space-x-3">
            <li className="breadcrumb-item">
              <Link to={"/schoolai/home"}> Pages</Link>
            </li>
            <li className="breadcrumb-item">-</li>
            <li className="text-primary">
              {pageName} {pageTitle} {num}
            </li>
          </ol>
        </nav>
        {/* <div className="mt-10 space-x-4" style={{marginBottom: "-100px"}}>
          <Link to="/schoolai/new-course" className="btn btn-primary">
            New Course Generation
          </Link>
          <Link
            to="/schoolai/generatevideo"
            className={styles['btn-outline-red']} // Use the CSS module class
          >
            Generate Video Course
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PageBanner;
