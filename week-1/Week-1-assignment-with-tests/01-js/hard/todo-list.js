/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(todo) {
    this.todo.push(todo); 
  }

  remove(indexOfTodo) {
    if(indexOfTodo < 0 || indexOfTodo > this.todo.length - 1) {
      // throw new Error("Index out of bounds");
      return -1;
    }
    this.todo.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if(index < 0 || index > this.todo.length - 1) {
      // throw new Error("Index out of bounds");
      return -1;
    }
    this.todo[index] = updatedTodo;
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if(indexOfTodo < 0 || indexOfTodo > this.todo.length - 1) {
      // throw new Error("Index out of bounds");
      return null;
    }
    return this.todo[indexOfTodo];
  }

  clear() {
    this.todo = [];
  }
}

const todo = new Todo();
todo.add('Task 1');
todo.add('Task 2');
todo.add('Task 3');
todo.add('Task 4');
todo.remove(1);
todo.getAll();
console.log(todo.todo);

module.exports = Todo;
