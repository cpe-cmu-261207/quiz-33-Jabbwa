import React from "react";
import { comments } from "../libs/comments";

export default function Reply(props) {
  return (
    <div className="d-flex gap-2 my-2 ps-5">
      <img
        src={props.img}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <div
        className="rounded rounded-3 p-2"
        style={{ backgroundColor: "#3A3B3C" }}
      >
        <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          {props.name}
        </span>
        <br />
        <span style={{ color: "#E4E6EB" }}>{props.replyText}</span>
      </div>
    </div>
  );
}
