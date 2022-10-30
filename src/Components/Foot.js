import React from "react";
import { Link } from "react-router-dom";

const Foot = () => (
  <div className="box">
    <div className="container">
      <div className="row dwdn">
        <div className="col">
          <h1 className="ari">Ari Food</h1>
          <p className="ari1">Copyright © 2022. Ari Rachman</p>
        </div>
        <div className="col">
          <table className="tables">
            <thead>
              <tr>
                <th>
                  <h1 className="title is-4 ari1 ari12">Ari Food</h1>
                </th>
                <th>
                  <h1 className="title is-4 ari1 ari12">Kontak</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tr">
                  <Link to={"/About"} className="ari1">
                    Favorit
                  </Link>
                </td>
                <td className="tr ari1">Youtube</td>
              </tr>
              <tr>
                <td className="tr">
                  <Link to={"/About"} className="ari1">
                    Article
                  </Link>
                </td>
                <td className="tr ari1">Tiktok</td>
              </tr>
              <tr>
                <td className="tr">
                  <Link to={"/About"} className="ari1">
                    About
                  </Link>
                </td>
                <td className="tr ari1">Instagram</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Foot;
