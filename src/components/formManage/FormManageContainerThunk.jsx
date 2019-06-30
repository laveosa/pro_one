import React from "react";
import { connect } from "react-redux";
import FormManage from "./FormManage";
import { addThunk } from "../../store/thunkEX/actions";

class FormManageContainerThunk extends React.Component {
  render() {
    return <FormManage addStandart={this.props.addThunk} />;
  }
}

const mapDispatchToProps = {
  addThunk
};

export default connect(
  null,
  mapDispatchToProps
)(FormManageContainerThunk);
