import React from "react";

export default props => {
  return (
    <div className="content-block-container border rounded mb-4">
      <div className="header-cover p-3 d-flex align-items-center border-bottom rounded-top bg-info">
        <span className="h4 text-white text-capitalize m-0">{props.title}</span>
      </div>
      <div className="content-cover d-flex flex-column">{props.children}</div>
    </div>
  );
};
