import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)

    }

    addTodo(event){
        event.preventDefault()
        if(this.state.todoTitle){
            let todo = {
                id: this.state.todos.length +1 ,
                todoTitle : this.state.todoTitle ,
                todoCompleted: false
            }
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, todo],
                    todoTitle : ""
                }
            })
            
        }
    }
    removeTodo(id){
       let newTodosList= this.state.todos.filter(todo => todo.id !==id)
       this.setState({
            todos : newTodosList
       })
    }
    editTodo(id)   {
        let allTodos = [...this.state.todos]
        allTodos.forEach(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
        })
        this.setState({
            todos : allTodos
        })
    }
    todoTitleHandler(event){
        this.setState({
        todoTitle: event.target.value
        })
    }
    statusHandler(event){
        console.log(event.target.value);
        this.setState({status: event.target.value})
    }
    
    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.addTodo}>
                    <input type="text" className="todo-input" maxLength="40" value={this.state.todoTitle} onChange={event => this.todoTitleHandler(event)}/>
                    <button className="todo-button" type="submit" >
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">

                            {
                                this.state.status=== "completed" && this.state.todos.filter(todo =>  todo.completed).map(todo =>(
                                    <Todo {...todo} onRemove={this.removeTodo} onEdite={this.editTodo}/>
                                ))
                            }

                            {
                                this.state.status=== "uncompleted" && this.state.todos.filter(todo =>  !todo.completed).map(todo =>(
                                    <Todo {...todo} onRemove={this.removeTodo} onEdite={this.editTodo}/>
                                ))
                            }

                            {
                                this.state.status=== "all" && this.state.todos.map((todo) =>(
                                    <Todo key={todo.id} {...todo} onRemove={this.removeTodo} onEdite={this.editTodo}/>
                                ))
                            }
                        
                     
                    </ul>
                </div>
            </>
        )
    }
}
