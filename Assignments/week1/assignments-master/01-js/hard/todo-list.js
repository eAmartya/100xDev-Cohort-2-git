/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todoArray = []
  }
  add(todo){
    this.todoArray.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todoArray.length){
      this.todoArray.splice(indexOfTodo,1) //removing from todos using splice (at index of todo and only remove 1)
    }else {
      console.error("Invalid, Error in Remove: Cant Remove");
    }
  }
  update(index, updatedTodo){
    if(index >= 0 && index < this.todoArray.length){
      this.todoArray[index] = updatedTodo;
    }else{
      console.error("Invalid, Error in Update: Cant Update");
    }
  }
  getAll(){
    return this.todoArray;
  }
  get(indexOfTodo){
    if(indexOfTodo >=0 && indexOfTodo < this.todoArray.length){
      return  this.todoArray[indexOfTodo];
    }else{
      console.error("Invalid, Error in Get: Cant Get the todo");
      return null;
    }
  }
  clear(){
    this.todoArray = [];
  }
}

module.exports = Todo;