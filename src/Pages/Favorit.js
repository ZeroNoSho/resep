import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Modal from "../Components/Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fav: [],
      detailsResep: [],
      aut: [],
      ingredient: [],
      step: [],
    };
  }

  CloseHandler = () => {
    this.setState({ detailsResep: [] });
    this.setState({ aut: [] });
    this.setState({ ingredient: [] });
    this.setState({ step: [] });
  };

  handlerModalOnClick = (event) => {
    event.preventDefault();
    let namaKey = event.target.dataset.resep;

    axios
      .get(`https://masak-apa-tomorisakura.vercel.app/api/recipe/${namaKey}`)
      .then((response) => {
        this.setState({ detailsResep: response.data.results });
        this.setState({ aut: response.data.results.author });
        this.setState({ ingredient: response.data.results.ingredient });
        this.setState({ step: response.data.results.step });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("Makanan")) === null) {
    } else {
      this.setState({ Fav: JSON.parse(localStorage.getItem("Makanan")) });
    }
  }

  deletButtonHandler = (event) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        let i = event.target.dataset.key;
        let makan1 = JSON.parse(localStorage.getItem("Makanan"));
        makan1.splice(i, 1);
        localStorage.setItem("Makanan", JSON.stringify(makan1));
        this.setState({ Fav: makan1 });
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center h1Fav">My Favorite Menu</h1>
          {this.state.Fav.map((e, i) => (
            <div key={i} className="col-md-4">
              <div className="card cardFav">
                <img src={e.thumb} className="card-img-top" alt="" />
                <div className="card-body">
                  <button onClick={this.handlerModalOnClick} data-resep={e.key} type="button" className="btn btn-home1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <h5 onClick={this.handlerModalOnClick} data-resep={e.key} className="h5cool">
                      {e.title}
                    </h5>
                  </button>
                  <p>Kesulitan: {e.difficulty}</p>
                  <button data-key={i} onClick={this.deletButtonHandler} id="btn1" className="btn-Fav btn btn-primary position-absolute bottom-0 start-50 translate-middle-x " type="button">
                    Delet
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Modal CloseHandler={this.CloseHandler} step={this.state.step} detailsResep={this.state.detailsResep} aut={this.state.aut} ingredient={this.state.ingredient} />
        </div>
      </div>
    );
  }
}
export default Favorite;
