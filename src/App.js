import React, { Component } from "react";
import './App.css';
import './data.json';

import Form from "react-jsonschema-form";

// const schema = fetch('./data.json').then(data => {
//   console.log(data);
// });

var schema = {
  "title": "Form Sample",
  "type": "object",
  "properties": {
    "username": {
      "label": "Username",
      "optional": false,
      "showField": true,
      "uniforms": {
        "type": "text",
        "placeholder": ""
      },
      "type": "string"
    },
    "firstName": {
      "label": "First Name",
      "optional": false,
      "showField": true,
      "uniforms": {
        "type": "text",
        "placeholder": ""
      },
      "type": "string"
    },
    "lastName": {
      "label": "Last Name",
      "optional": false,
      "showField": true,
      "uniforms": {
        "type": "text",
        "placeholder": ""
      },
      "type": "string"
    },
    "password": {
      "label": "Password",
      "optional": false,
      "showField": true,
      "uniforms": {
        "type": "password",
        "placeholder": ""
      },
      "type": "string"
    },
    "email": {
      "label": "Email",
      "optional": false,
      "showField": true,
      "uniforms": {
        "type": "email",
        "placeholder": ""
      },
      "type": "string"
    }
  }
}



const log = (type) => console.log.bind(console, type);

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('./data.json').then(data => {
        let form = this.state.data.map((formData) => {
          return (
            <Form schema={formData}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
          )
        })
        this.setState({ data: form });
      })
  }

  render() {
    return (
      <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    );
  }
}
export default App;
