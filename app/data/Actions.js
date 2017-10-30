import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";

//интерфейс действий. вкладывает ид действия и аргумент
//при вызове данные будут переданы в хранилище
const Actions = {
    addItem(text) {
        console.log("PhonesDispacher: addItem");
        PhonesDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            text,
        });
    },
    removeItem(text) {
        console.log("PhonesDispacher: removeItem");
        PhonesDispatcher.dispatch({
            type: ActionTypes.REMOVE_ITEM,
            text,
        });
    }
};

export default Actions;