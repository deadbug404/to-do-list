class Todo{
    constructor(id){
        this._id = id;
    }

    save(description){
        let parsedJson = JSON.parse(localStorage.getItem(this._id));
        parsedJson.todo.push(description);
        localStorage.setItem(this._id,JSON.stringify(parsedJson));
    }
}

export default Todo