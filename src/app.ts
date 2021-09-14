import express from 'express'
import bodyParser from "body-parser";
import dotenv from 'dotenv'

import {TodolistController} from "./controller/todolist-controller";
import {CreateTodolistRequest} from "./model/create-todolist-request";
import {UpdateTodolistRequest} from "./model/update-todolist-request";

dotenv.config()

const app = express()

app.use(bodyParser.json())

const todolistController = new TodolistController()

app.post('/api/create', (req, res) => {
    todolistController.createTodolist(new CreateTodolistRequest(req.body.title)).then(() => {
        res.json({
            code: 201,
            status: '201 CREATED',
            data: {
                message: 'Todolist created',
            }
        })
    })
})

app.get('/api/get/:id', (req, res) => {
    todolistController.getTodolist(Number(req.params.id)).then(value => {
        res.json({
            code: 200,
            status: '200 OK',
            data: value
        })
    })
})

app.get('/api/get', (req, res) => {
    todolistController.getAllTodolist().then(value => {
        res.json({
            code: 200,
            status: '200 OK',
            data: value
        })
    })
})

app.delete('/api/delete/:id', (req, res) => {
    todolistController.deleteTodolist(Number(req.params.id)).then(() => {
        res.send({
            code: 200,
            status: '200 OK',
            data: {
                message: 'Todolist Deleted'
            }
        })
    })
})

app.put('/api/update/:id', (req, res) => {
    todolistController.updateTodolist(Number(req.params.id), new UpdateTodolistRequest(req.body.title)).then(() => {
        res.send({
            code: 200,
            status: '200 OK',
            data: {
                message: 'Todolist Updated'
            }
        })
    })
})

app.listen(process.env.PORT, () => console.log('Running App'))