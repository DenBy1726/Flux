import AppView from "../view/AppView.js";
import {Container} from "flux/utils";
import React from "react";
import PhoneStore from "../data/PhoneStore.js";
import Actions from "../data/Actions.js";

class AppContainer extends React.Component
{
    constructor(){
        console.log("AppContainer: constructor");
        super();
    }
    //возвращает хранилище данных
    static getStores() {
        console.log("AppContainer: getStore");
        return [PhoneStore];

    }

    //расчет нового состояния
    //содержит новый данные и данные колбеков для того, чтобы хранилище
    // потом могло реагировать
    static calculateState(prevState) {
        console.log("AppContainer: calculateState");
        return {
            phones: PhoneStore.getState(),
            onAddItem: Actions.addItem,
            onRemoveItem: Actions.removeItem
        };
    }
    render() {
        console.log("AppContainer: render");
        return <AppView phones={this.state.phones}
                        onRemoveItem={this.state.onRemoveItem}
                        onAddItem={this.state.onAddItem}  />;
    }
}
export default Container.create(AppContainer);