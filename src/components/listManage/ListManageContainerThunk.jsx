import React from "react";
import { connect } from "react-redux";
import ListManage from "./ListManage";
import { manageThunk, removeThunk } from "../../store/thunkEX/actions";

class ListManageContainerThunk extends React.Component {
  render() {
    return (
      <ListManage
        users={this.props.users}
        manageStandart={this.props.manageThunk}
        removeStandart={this.props.removeThunk}
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
  manageThunk,
  removeThunk
};

export default connect(
  mapStateToProps,
  mapDispatchToPorops
)(ListManageContainerThunk);
