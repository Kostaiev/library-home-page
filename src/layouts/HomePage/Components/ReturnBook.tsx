import React from "react";

export const ReturnBook = (props: any) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={props.path} width="151" height="223" alt="book" />
        <h6 className="mt-2">{props.name}</h6>
        <p>{props.author}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
