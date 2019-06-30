import React from "react";

export default function(props) {
  //   console.log(props);

  return (
    <div className="standart-list-elemnt-container bg-white border rounded p-2 mb-3 d-flex justify-content-between align-items-center">
      <div className="text-cover">{props.user.name}</div>
      <div className="action-buttons">
        <button
          className="btn btn-sm btn-outline-primary text-uppercase"
          onClick={() => {
            props.manageStandart(props.index);
          }}
        >
          manage
        </button>
        <button
          className="btn btn-sm btn-outline-danger text-uppercase"
          onClick={() => {
            props.removeStandart(props.index);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}
