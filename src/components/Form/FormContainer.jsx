import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../Common/Input.jsx";
import style from './index.scss'

class FormContainer extends Component {
    constructor(props) {
      super();
      console.log();
      this.state = {
        seo_title: "",
        id: props.match.params.id
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    render() {
      const { seo_title } = this.state;
      return (
        <form id="article-form">
          <Input
            text={"Form #" + this.state.id}
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          />
        </form>
      );
    }
}
export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;