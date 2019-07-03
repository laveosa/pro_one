import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import standartReducer from "../../store/standartEX/reducer";
import standartMW from "../../store/standartEX/middleware";
import thunkReducer from "../../store/thunkEX/reducer";
import thunk from "redux-thunk";
import sagaReducer from "../../store/sagaEX/reducer";
import { watchAddSaga } from "../../store/sagaEX/saga";
import createSagaMiddleware from "redux-saga";

import ContentBlock from "../../elements/contentBlock/ContentBlock";
import FormManageContainer from "../formManage/FormManageContainer";
import FormManageContainerThunk from "../formManage/FormManageContainerThunk";
import FormManageContainerSaga from "../formManage/FormManageContainerSaga";
import ListManageController from "../listManage/ListManageContainer";
import ListManageContainerThunk from "../listManage/ListManageContainerThunk";
import ListManageContainerSaga from "../listManage/ListManageContainerSaga";

const sagaMiddleware = createSagaMiddleware();

const storeForStandartMW = createStore(
  standartReducer,
  applyMiddleware(standartMW)
);

const storeForThunkMW = createStore(thunkReducer, applyMiddleware(thunk));

const storeForSagaMW = createStore(
  sagaReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchAddSaga);

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
            <Provider store={storeForSagaMW}>
              <ContentBlock title="redux saga example">
                <div className="content-control">
                  <FormManageContainerSaga />
                  <ListManageContainerSaga />
                </div>
              </ContentBlock>
            </Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
