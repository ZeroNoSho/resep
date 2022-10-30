import React, { Component } from "react";
import svg from "../bahan1.png";
import axios from "axios";
import ImgSvg from "../Components/imgSvg";
import "../App.css";
import Accordion from "../Components/Accordion";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArticel: [],
      dataArticel1: [],
      title: "",
      thumb: "",
      author: "",
      date_published: "",
      description: "",
      namaTag: "inspirasi-dapur",
      accor: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
    };
  }
  componentDidMount() {
    axios
      .get("https://masak-apa-tomorisakura.vercel.app/api/category/article")
      .then((response) => {
        this.setState({ dataArticel: response.data.results });
      })
      .catch((error) => {
        console.log("error", error);
      });
    axios
      .get(`https://masak-apa-tomorisakura.vercel.app/api/category/article/inspirasi-dapur`)
      .then((response) => {
        this.setState({ dataArticel1: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlerListOnClick = (event) => {
    event.preventDefault();
    let nama = event.target.name;
    this.setState({ namaTag: nama });
    axios
      .get(`https://masak-apa-tomorisakura.vercel.app/api/category/article/${nama}`)
      .then((response) => {
        this.setState({ dataArticel1: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handlerListOnClick1 = (event) => {
    event.preventDefault();
    let key = event.target.name;
    axios
      .get(`https://masak-apa-tomorisakura.vercel.app/api/article/${this.state.namaTag}/${key}`)
      .then((response) => {
        this.setState({ title: "" });
        this.setState({ thumb: "" });
        this.setState({ author: "" });
        this.setState({ date_published: "" });
        this.setState({ description: "" });
        if (this.state.title === "") {
          setTimeout(() => {
            this.setState({ title: response.data.results.title });
            this.setState({ thumb: response.data.results.thumb });
            this.setState({ author: response.data.results.author });
            this.setState({ date_published: response.data.results.date_published });
            this.setState({ description: response.data.results.description });
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container articleCont">
        <ImgSvg svg={svg} />
        <div className="new row g-0">
          <div className="col-6 col-md-3 aboutnew">
            <div className="list-group listArr">
              <button onClick={this.handlerListOnClick} name="inspirasi-dapur" type="button" className="list-group-item list-group-item-action active" data-bs-toggle="list" role="tab">
                Inspirasi Dapur
              </button>
              <button onClick={this.handlerListOnClick} name="makanan-gaya-hidup" type="button" className="list-group-item list-group-item-action" data-bs-toggle="list">
                Makanan & Gaya Hidup
              </button>
              <button onClick={this.handlerListOnClick} name="tips-masak" type="button" className="list-group-item list-group-item-action" data-bs-toggle="list">
                Tips Masak
              </button>
            </div>
          </div>
          <div className="cardHome col-sm-6 col-md-8">
            <div className="row">
              <Accordion
                description={this.state.description}
                dataArticel1={this.state.dataArticel1}
                namaTag={this.state.namaTag}
                accor={this.state.accor}
                thumb={this.state.thumb}
                author={this.state.author}
                date_published={this.state.date_published}
                handlerListOnClick1={this.handlerListOnClick1}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
