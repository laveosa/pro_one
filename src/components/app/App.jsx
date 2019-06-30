import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import standartReducer from "../../store/standartEX/reducer";
import standartMW from "../../store/standartEX/middleware";
import thunkReducer from "../../store/thunkEX/reducer";
import thunk from "redux-thunk";

import ContentBlock from "../../elements/contentBlock/ContentBlock";
import FormManageContainer from "../formManage/FormManageContainer";
import FormManageContainerThunk from "../formManage/FormManageContainerThunk";
import ListManageController from "../listManage/ListManageContainer";
import ListManageContainerThunk from "../listManage/ListManageContainerThunk";

const storeForStandartMW = createStore(
  standartReducer,
  applyMiddleware(standartMW)
);

const storeForThunkMW = createStore(thunkReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div id="AppComponent" className="app-container container">
        <div className="jumbotron text-center">
          <h1>middleware test fields</h1>
        </div>
        <div className="content-container d-flex flex-column">
          <div id="FirstBlock" className="">
            <Provider store={storeForStandartMW}>
              <ContentBlock title="Standart middleware example">
                <div className="content-control">
                  <FormManageContainer />
                  <ListManageController />
                </div>
              </ContentBlock>
            </Provider>
          </div>
          <div id="SecondBlock" className="">
            <Provider store={storeForThunkMW}>
              <ContentBlock title="redux thunk example">
                <div className="content-control">
                  <FormManageContainerThunk />
                  <ListManageContainerThunk />
                </div>
              </ContentBlock>
            </Provider>
          </div>
          <div id="TherdBlock" className="">
            <ContentBlock title="redux saga example">
              <span>content</span>
              <span>content</span>
            </ContentBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
