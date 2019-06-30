import React from "react";
import { connect } from "react-redux";
import ListManage from "./ListManage";
import { manageStandart, removeStandart } from "../../store/standartEX/actions";

class ListManageContainer extends React.Component {
  render() {
    return (
      <ListManage
        users={this.props.users}
        manageStandart={this.props.manageStandart}
        removeStandart={this.props.removeStandart}
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
  manageStandart,
  removeStandart
};

export default connect(
  mapStateToProps,
  mapDispatchToPorops
)(ListManageContainer);
