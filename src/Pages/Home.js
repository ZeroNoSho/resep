import React, { Component } from "react";
import svg from "../bahan1.png";
import axios from "axios";
import "../App.css";
import ListGroup from "../Components/listGroup";
import ImgSvg from "../Components/imgSvg";
import Modal from "../Components/Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Makanan: [],
      resep: [],
      detailsResep: [],
      aut: [],
      ingredient: [],
      step: [],
      menuPauk: ["Menu Ayam", "Menu Sayuran", "Menu Daging", "Menu Seafood"],
      menuPauk2: ["resep-ayam", "resep-sayuran", "resep-daging", "resep-seafood"],
      menuHarian: ["Menu Makan Siang", "Menu Makan Malam", "Menu Sarapan"],
      menuHarian2: ["makan-siang", "makan-malam", "Sarapan"],
      menuSep: ["Menu Hari Raya", "Menu Tradisional", "Menu Dessert"],
      menuSep2: ["masakan-hari-raya", "masakan-tradisional", "resep-dessert"],
    };
  }

  componentDidMount() {
    axios
      .get("https://masak-apa-tomorisakura.vercel.app/api/recipes-length/?limit=9")
      .then((response) => {
        this.setState({ resep: response.data.results });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  handlerinputOnChange = (event) => {
    let nama = event.target.name;
    let value = event.target.value;
    this.setState({ [nama]: value });
  };

  handlerListOnClick = (event) => {
    event.preventDefault();
    let nama = event.target.name;
    axios
      .get(`https://masak-apa-tomorisakura.vercel.app/api/category/recipes/${nama}`)
      .then((response) => {
        this.setState({ resep: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .get(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${this.state.Makanan}`)
      .then((response) => {
        this.setState({ resep: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onClickFavoriteHandler = (event) => {
    const MySwal = withReactContent(Swal);
    const fav = {
      key: event.target.dataset.key,
      title: event.target.dataset.title,
      difficulty: event.target.dataset.difficulty,
      thumb: event.target.dataset.thumb,
      dis: true,
    };

    let nama1 = JSON.parse(localStorage.getItem("Makanan1"));

    if (JSON.parse(localStorage.getItem("Makanan1")).length === 0) {
      nama1.push(fav);
      localStorage.setItem("Makanan1", JSON.stringify(nama1));
      const Toast = MySwal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Success Menambahkan Ke Favorite",
      });
    } else {
      const nama2 = nama1.find((c) => c.key === event.target.dataset.key);
      if (nama2 === undefined) {
        nama1.push(fav);
        localStorage.setItem("Makanan1", JSON.stringify(nama1));
        const Toast = MySwal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Success Menambahkan Ke Favorite",
        });
      }
    }
    event.target.setAttribute("disabled", "true");
  };

  render() {
    if (localStorage.getItem("Makanan1") === null) {
      localStorage.setItem("Makanan1", "[]");
    }
    let nama1 = JSON.parse(localStorage.getItem("Makanan1"));
    return (
      <div id="conHome" className="container articleCont">
        <ImgSvg svg={svg} />
        <div className="new row g-0">
          <h1 className="h1Home1">Category</h1>
          <div className="new2 col-6 col-md-3">
            <br></br>
            <form onSubmit={this.onSubmitHandler} className="d-flex formHome">
              <input name="Makanan" className="new3 form-control me-2" value={this.state.Makanan} onChange={this.handlerinputOnChange} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <h5 className="new5">Menu Lauk Pauk: </h5>
            <ListGroup menuPauk={this.state.menuPauk} keyPauk={this.state.menuPauk2} onClick={this.handlerListOnClick} onSubmit1={this.onClickHandler} />

            <br></br>
            <h5 className="new5">Menu Makanan Harian: </h5>
            <ListGroup menuPauk={this.state.menuHarian} keyPauk={this.state.menuHarian2} onClick={this.handlerListOnClick} onSubmit1={this.onClickHandler} />

            <br></br>
            <h5 className="new5">Menu Sepesial: </h5>
            <ListGroup menuPauk={this.state.menuSep} keyPauk={this.state.menuSep2} onClick={this.handlerListOnClick} onSubmi1={this.onClickHandler} />
          </div>

          <div className="cardHome col-sm-6 col-md-8">
            <div className="row new4">
              {this.state.resep.map((e, i) => (
                <div key={i} className="col-md-4">
                  <div className="cardHome card">
                    <img src={e.thumb} className="card-img-top" alt="" />
                    <div className="card-body card-body1">
                      <button onClick={this.handlerModalOnClick} data-resep={e.key} type="button" className="btn btn-home1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <h5 onClick={this.handlerModalOnClick} data-resep={e.key} className="h5cool">
                          {e.title}
                        </h5>
                      </button>

                      <p>Kesulitan: {e.difficulty}</p>
                      <button
                        onClick={this.onClickFavoriteHandler}
                        data-key={e.key}
                        data-difficulty={e.difficulty}
                        data-title={e.title}
                        data-thumb={e.thumb}
                        className="btn-home2  btn btn-primary position-absolute bottom-0 start-50 translate-middle-x"
                        type="button"
                        disabled={nama1.find((c) => c.key === e.key)}
                      >
                        Favorite
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <Modal CloseHandler={this.CloseHandler} step={this.state.step} detailsResep={this.state.detailsResep} aut={this.state.aut} ingredient={this.state.ingredient} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
