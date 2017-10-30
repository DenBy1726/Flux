import React from "react";

class AppView extends React.Component{

    constructor(props){
        console.log("AppView: constructor");
        super(props);
        //newItem это буфер для хранения добавляемой строки
        this.state = {newItem: ""};

        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onInputChange(e){
        console.log("AppView: onInputChange");
        this.setState({newItem:e.target.value});
    }
    onClick(e){
        console.log("AppView: onClick");
        if(this.state.newItem){
            //колбек, определяющий реакцию на добавление данного в колекцию
            this.props.onAddItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }
    onRemove(item){
        console.log("AppView: onRemove");
        if(item){
            //колбек, определяющий реакцию на удаление данного из коллекции
            this.props.onRemoveItem(item);
        }
    }
    render(){
        console.log("AppView: render");
        let remove = this.props.onRemoveItem;
        return <div>
            <input type="text" value={this.state.newItem} onChange={this.onInputChange} />
            <button onClick={this.onClick}>Добавить</button>
            <h2>Список смартфонов</h2>
            <div>
                {
                    this.props.phones.map(function(item){

                        return <Phone key={item} text={item} onRemove={remove} />
                    })
                }
            </div>
        </div>;
    }
}

class Phone extends React.Component{

    constructor(props){
        console.log("Phone: constructor");
        super(props);
        this.state = {text: props.text};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        console.log("Phone: onClick");
        this.props.onRemove(this.state.text);
    }
    render(){
        console.log("Phone: render");
        return <div>
            <p>
                <b>{this.state.text}</b><br />
                <button onClick={this.onClick}>Удалить</button>
            </p>
        </div>;
    }
}
export default AppView;