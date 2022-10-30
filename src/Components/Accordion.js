import React from "react";

const Accordion = (props) => (
  <div className="accordion accordion-flush" id="accordionFlushExample">
    <h3 className="text-center textArr">{props.namaTag}</h3>
    {props.dataArticel1.map((e, i) => (
      <div className="accordion-item" key={i}>
        <h2 className="accordion-header" id={"flush-heading" + props.accor[i]}>
          <button
            onClick={props.handlerListOnClick1}
            name={e.key}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#flush-collapse" + props.accor[i]}
            aria-expanded="false"
            aria-controls={"flush-collapse" + props.accor[i]}
          >
            {e.key}
          </button>
        </h2>
        <div id={"flush-collapse" + props.accor[i]} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + props.accor[i]} data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <h2>{props.title}</h2>
            <img style={{ width: "50%" }} src={props.thumb} alt="" />
            <p>
              <b>
                {props.author} {props.date_published}
              </b>
            </p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Accordion;
