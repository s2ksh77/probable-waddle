import React from "react";
import { COMPLETE, UNCOMPLETE, DEL } from "../actions";
import { useDispatch } from "../newcontext";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>
        Delete
      </button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "UnComplete" : "Complete"}
      </button>
    </li>
  );
};
