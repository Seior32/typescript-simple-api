import {CreateTodolistRequest} from "../model/create-todolist-request";
import {Todolist} from "../entity/todolist";
import {UpdateTodolistRequest} from "../model/update-todolist-request";

export interface TodolistService {
    createTodolist(createTodolistRequest: CreateTodolistRequest): void
    getTodolist(id: number): Promise<Todolist>
    getAllTodolist(): Promise<Todolist[]>
    deleteTodolist(id: number): void
    update(id: number, updateTodolistRequest: UpdateTodolistRequest): void
}