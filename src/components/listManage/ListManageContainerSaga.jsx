import React from "react";
import { connect } from "react-redux";
import ListManage from "./ListManage";
import { manageSagaAsync, removeSagaAsync } from "../../store/sagaEX/actions";

class ListManageContainerThunk extends React.Component {
  render() {
    return (
      <ListManage
        users={this.props.users}
        manageStandart={this.props.manageSagaAsync}
        removeStandart={this.props.removeSagaAsync}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.element
  };
};

const mapDispatchToPorops = {
  manageSagaAsync,
  removeSagaAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToPorops
)(ListManageContainerThunk);
