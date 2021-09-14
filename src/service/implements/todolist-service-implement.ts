import {TodolistService} from "../todolist-service";
import {CreateTodolistRequest} from "../../model/create-todolist-request";
import {TodolistRepository} from "../../repository/todolist-repository";
import {Todolist} from "../../entity/todolist";
import {UpdateTodolistRequest} from "../../model/update-todolist-request";

export class TodolistServiceImplement implements TodolistService {
    todolistRepository: TodolistRepository = new TodolistRepository()

    createTodolist(createTodolistRequest: CreateTodolistRequest): void {
        this.todolistRepository.create(createTodolistRequest).then(() => {})
    }

    async getTodolist(id: number): Promise<Todolist> {
        let todolist = new Todolist(0, '')
        await this.todolistRepository.get(id).then(value => {
            todolist = value
        })
        return todolist
    }

    async getAllTodolist(): Promise<Todolist[]> {
        let todolist: Todolist[] = []
        await this.todolistRepository.getAll().then(value => {
            value.forEach(data => {
                todolist.push(data)
            })
        })
        return todolist
    }

    async deleteTodolist(id: number){
        await this.todolistRepository.delete(id)
    }

    async update(id: number, updateTodolistRequest: UpdateTodolistRequest) {
        await this.todolistRepository.update(id, updateTodolistRequest)
    }

}