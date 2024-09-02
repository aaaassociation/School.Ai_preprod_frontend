import React from "react";

const AboutBanner = ({text}) => {
  return (
    <div class="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
      <div class="container text-center">
        <h2>About Us</h2>
        <nav>
          <ol class="flex items-center justify-center space-x-3">
            <li class="breadcrumb-item">
              <a href="index.html">Pages </a>
            </li>
            <li class="breadcrumb-item">-</li>
            <li class="text-primary">{text}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default AboutBanner;
