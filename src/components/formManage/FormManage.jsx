import React from "react";

class FormManage extends React.Component {
  componentDidMount() {
    // const amount = 8;
    // for (let i = 0; i < amount; i++) {
    //   this.generateHandler();
    //   this.createHandler();
    // }
  }
  generateHandler = () => {
    this.refs.name.value = "Nik";
    this.refs.age.value = "37";
    this.refs.email.value = "laveosa@yahoo.com";
  };
  createHandler = () => {
    const newUser = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      email: this.refs.email.value
    };

    this.props.addStandart(newUser);

    this.clearHandler();
  };
  clearHandler = () => {
    this.refs.name.value = null;
    this.refs.age.value = null;
    this.refs.email.value = null;
  };
  render() {
    return (
      <div className="form-cover">
        <div className="form-group">
          <label>name</label>
          <input
            className="form-control"
            type="text"
            placeholder="enter name..."
            ref="name"
          />
        </div>
        <div className="form-group">
          <label>age</label>
          <input
            className="form-control"
            type="number"
            placeholder="enter age..."
            ref="age"
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            className="form-control"
            type="email"
            placeholder="enter email..."
            ref="email"
          />
        </div>
        <div className="action-buttons">
          <button
            className="btn btn-outline-primary btn-sm p-2 w-25 text-uppercase"
            onClick={this.generateHandler}
          >
            generate
          </button>
          <button
            className="btn btn-outline-success btn-sm p-2 w-25 text-uppercase"
            onClick={this.createHandler}
          >
            create
          </button>
          <button
            className="btn btn-outline-secondary btn-sm p-2 w-25 text-uppercase"
            onClick={this.clearHandler}
          >
            clear
          </button>
        </div>
      </div>
    );
  }
}

export default FormManage;
