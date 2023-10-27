import React, { Component } from 'react'

export default class Todo extends Component {

    removeBtnHandler (id){
        this.props.onRemove(id);
    }
    editBtnHandler(id){
        this.props.onEdite(id);
    }

    render() {
        // let {id, todoCompleted, todoTitle} = this.props
        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.todoTitle}</li>

                <button className="check-btn" onClick={this.editBtnHandler.bind(this,this.props.id)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.removeBtnHandler.bind(this,this.props.id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}