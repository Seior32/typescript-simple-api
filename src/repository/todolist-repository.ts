import {CreateTodolistRequest} from "../model/create-todolist-request";
import {Database} from "../utils/db";
import {Todolist} from "../entity/todolist";
import {UpdateTodolistRequest} from "../model/update-todolist-request";

export class TodolistRepository {
    async create(createTodolistRequest: CreateTodolistRequest): Promise<void> {
        await Database.connection.promise().query(`INSERT INTO todolist (title) VALUES ('${createTodolistRequest.title}')`)
    }

    async get(id: number): Promise<Todolist> {
        let todolist = new Todolist(0, 'undefined')

        await Database.connection.promise().query(`SELECT * FROM todolist where id='${id}'`).then(value => {
            todolist = (value[0] as Todolist[])[0]
        })
        return todolist
    }

    async getAll(): Promise<Todolist[]> {
        let todolist: Todolist[] = []

        await Database.connection.promise().query('SELECT * FROM todolist').then(value => {
            const row = value[0] as Todolist[]

            row.forEach(data => {
                todolist.push(new Todolist(data.id, data.title))
            })
        })
        return todolist
    }

    async delete(id: number) {
        await Database.connection.promise().query(`DELETE FROM todolist.todolist WHERE id=${id}`)
    }

    async update(id: number, updateTodolistRequest: UpdateTodolistRequest) {
        await Database.connection.promise().query(`UPDATE todolist SET title='${updateTodolistRequest.title}' WHERE id=${id} `)
    }
}