import { showContentModal } from "./modals";

class Todo{
    constructor(key){
        this._key = key;
        this._parsedJson = JSON.parse(localStorage.getItem(this._key));
    }

    save(task){
        this._parsedJson.todo.push(task);
        localStorage.setItem(this._key,JSON.stringify(this._parsedJson));
    }

    complete(task){
        this.delete(task);
        this._parsedJson.complete.push(task);
        localStorage.setItem(this._key,JSON.stringify(this._parsedJson));
    }

    delete(task){
        const index = this._parsedJson.todo.indexOf(task);
        this._parsedJson.todo.splice(index,1);
        localStorage.setItem(this._key,JSON.stringify(this._parsedJson));
    }
}

let show_content = function(key){
    let container = document.querySelector("#content");

    showContentModal(key,container);

};

export {show_content, Todo}