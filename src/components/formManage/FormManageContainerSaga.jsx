import React from "react";
import { connect } from "react-redux";
import FormManage from "./FormManage";
import { addSagaAsync } from "../../store/sagaEX/actions";

class FormManageContainerThunk extends React.Component {
  render() {
    return <FormManage addStandart={this.props.addSagaAsync} />;
  }
}

const mapDispatchToProps = {
  addSagaAsync
};

export default connect(
  null,
  mapDispatchToProps
)(FormManageContainerThunk);
