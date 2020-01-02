import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoItem, TodoRequest } from './models';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) { }

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  getTodo(@Param() params) {
    return this.todosService.getTodos().filter(t => t.id === params.id);
  }

  @Post()
  createTodo(@Body() todo: TodoRequest) {
    return this.todosService.createTodo(todo);
  }

  @Put()
  updateTodo(@Body() todo: TodoItem) {
    this.todosService.updateTodo(todo);
  }

  @Delete()
  deleteTodo(@Body() todo: TodoItem) {
    this.todosService.deleteTodo(todo.id);
  }
}
