import React from "react";
import "./PageHeading.css";

const PageHeading = (props) => {
  return (
    <div className="page-heading">
      <h1>{props.title}</h1>
     <hr className="line" />
    </div>
  );
}

export default PageHeading;