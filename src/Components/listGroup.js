import React from "react";

const ListGroup = (props) => (
  <div className="list-group">
    {props.keyPauk.map((e, i) => (
      <button type="button" key={i} name={e} className="list-group-item list-group-item-action" onClick={props.onClick}>
        {props.menuPauk[i]}
      </button>
    ))}
  </div>
);

export default ListGroup;
