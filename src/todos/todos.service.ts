import { Injectable } from '@nestjs/common';
import * as cuid from 'cuid';

@Injectable()
export class TodosService {
  data = [
    { id: '1', description: 'Change kitty litter', completed: false },
    { id: '2', description: 'Go grocery shopping', completed: false },
    { id: '3', description: 'Replace stove light bulb', completed: false },
  ];

  getTodos() {
    return this.data;
  }

  createTodo(todo) {
    const newTodo = {
      id: cuid(),
      description: todo.description,
      completed: todo.completed
    };
    this.data.push(newTodo);
    return newTodo;
  }

  updateTodo(todo) {
    this.data = this.data.map(t => t.id === todo.id ? { ...todo } : t);
  }

  deleteTodo(id) {
    this.data = this.data.filter(t => t.id !== id);
  }

}
