import React from "react";
import svg from "../bahan1.png";
import "../App.css";

const About = () => (
  <div className="container">
    <div className="row row-about">
      <div className="new6 card-body text-dark d-flex">
        <div className="p-about">
          <h2 className="newAbout">
            kami mengubah cara pandang<br className="br"/> orang tentang memasak
          </h2>
          <p className="card-text about-card">
            Ari Food adalah website resep makanan yang dibuat dengan premis bahwa memasak harus lah menyenangkan, mudah, dan simpel. Kami ingin membuat anda mendapat pengalaman memasak yang terbaik dengan website kami. Itu sebabnya website
            kami tidak bergantung pada biaya per resep, biaya layanan bulanan, biaya layanan, dan banyak lagi. Ini menciptakan website yang lebih ekonomis dengan opsi yang lebih baik dan lebih murah untuk orang indonesia biasa. Kami
            membantu mendorong inovasi dan akses di seluruh resep makanan.
          </p>
        </div>
        <img className="img-about" src={svg} alt="fotocdcd" />
      </div>
    </div>
  </div>
);

export default About;
