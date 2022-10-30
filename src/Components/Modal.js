import React from "react";
import "../App.css";

const Modal = (props) => (
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
    <div className="modal-dialog modal-xl">
      <div className="modal-content ">
        <div className="modal-header">
          <h2>{props.detailsResep.title}</h2>
          <button onClick={props.CloseHandler} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <img className="modalImg" src={props.detailsResep.thumb} alt="mkn" />
          <br />
          <h4 style={{ marginTop: "10px" }}>Waktu dibutuhkan untuk memasak : {props.detailsResep.times}</h4>
          <h5>Tingkat kesulitan resep : {props.detailsResep.difficulty}</h5>
          <p style={{ marginTop: "70px" }}>
            <b>
              {props.aut.user} / {props.aut.datePublished}
            </b>
          </p>
          <p>{props.detailsResep.desc}</p>
          <h5 style={{ marginTop: "70px" }}>Barang yang di butuhkan</h5>
          <div className="row">
            {props.ingredient.map((e) => (
              <div className="col-md-4">
                <p>{e}</p>
              </div>
            ))}
          </div>
          <h5 style={{ marginTop: "70px" }}>Cara Memasak</h5>
          {props.step.map((ev) => (
            <p>{ev}</p>
          ))}
        </div>
        <div className="modal-footer">
          <button onClick={props.CloseHandler} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
