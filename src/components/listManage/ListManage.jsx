import React from "react";
import StandartListElement from "../../elements/standartListElement/StandartListElement";

class ListManage extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.users.map((user, idx) => (
          <StandartListElement
            key={idx}
            user={user}
            index={idx}
            manageStandart={this.props.manageStandart}
            removeStandart={this.props.removeStandart}
          />
        ))}
      </div>
    );
  }
}

export default ListManage;
