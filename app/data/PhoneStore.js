import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import Actions from "./Actions.js";
import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";


class PhonesStore extends ReduceStore{
    constructor()
    {
        console.log("PhonesStore: constructor");
        //связываем базовый класс хранилища с диспетчером
        //теперь хранилище данных и диспетчер, через который идут вызовы связаны
        super(PhonesDispatcher);
    }
    //тут устанавливается данное по умолчанию
    getInitialState() {
        console.log("PhonesStore: getInitialState");
        return Immutable.List.of("iPhone 7", "Google Pixel");
    }

    //state - текущее состояние
    //action - действие
    //state + action = new state
    //в action вложены данные из Actions.
    //по факту в этом методе реализация всех действий, описанных в Actions
    reduce(state, action) {
        console.log("PhonesStore: reduce");
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                return this.AddItem(state,action.text);
            case ActionTypes.REMOVE_ITEM:
                return this.RemoveItem(state,action.text);
            default:
                return state;
        }
    }

    AddItem(state,text){
        console.log("PhonesStore: AddItem");
        if (text) {
            return state.push(text);
        }
        return state;
    }

    RemoveItem(state,text){
        console.log("PhonesStore: RemoveItem");
        let index = state.indexOf(text);
        if (index > -1) {
            return state.delete(index);
        }
        return state;
    }
}
export default new PhonesStore();