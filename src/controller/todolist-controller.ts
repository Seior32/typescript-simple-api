import {TodolistService} from "../service/todolist-service";
import {CreateTodolistRequest} from "../model/create-todolist-request";
import {TodolistServiceImplement} from "../service/implements/todolist-service-implement";
import {Todolist} from "../entity/todolist";
import {UpdateTodolistRequest} from "../model/update-todolist-request";

export class TodolistController {
    todolistService: TodolistService = new TodolistServiceImplement()

    async createTodolist(createTodolistRequest: CreateTodolistRequest) {
        await this.todolistService.createTodolist(createTodolistRequest)
    }

    async getTodolist(id: number): Promise<Todolist> {
        let todolist: Todolist = new Todolist(0, '')
        await this.todolistService.getTodolist(id).then(value => {
            todolist = value
        })

        return todolist
    }

    async getAllTodolist(): Promise<Todolist[]> {
        let todolist: Todolist[] = []
        await this.todolistService.getAllTodolist().then(value => {
            value.forEach(data => {
                todolist.push(data)
            })
        })

        return todolist
    }

    async deleteTodolist(id: number) {
        await this.todolistService.deleteTodolist(id)
    }

    async updateTodolist(id: number, updateTodolistRequest: UpdateTodolistRequest) {
        await this.todolistService.update(id, updateTodolistRequest)
    }
}