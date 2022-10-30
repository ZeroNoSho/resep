import React from "react";

const ImgSvg = (props) => (
  <div className="first">
    <div className="dec">
      <h1 className="h1Home">
        Mari Memasak <br className="br"/>Bersama Saya
      </h1>
      <p className="pHome">
        kamu tidak akan menyesal mencobanya <br className="br"/>
        resep di sini sangat lah bagus dan sangat detail<br className="br"/>
        karena resep disini di buat oleh prefesional<br className="br"/>
        oleh karena itu jangan ragu untuk mecoba nya
      </p>
    </div>
    <img className="imageCover" src={props.svg} alt="gambar" />
  </div>
);

export default ImgSvg;
