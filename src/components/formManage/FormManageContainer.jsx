import React from "react";
import { connect } from "react-redux";
import FormManage from "./FormManage";
import { addStandart } from "../../store/standartEX/actions";

class FormManageContainer extends React.Component {
  render() {
    return <FormManage addStandart={this.props.addStandart} />;
  }
}

const mapDispatchToProps = {
  addStandart
};

export default connect(
  null,
  mapDispatchToProps
)(FormManageContainer);
