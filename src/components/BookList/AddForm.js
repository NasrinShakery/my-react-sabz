import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
   constructor() {
      super();

      this.state = {
         books: [],

         title: "",
         author: "",
         year: "",
      };
   }

   titleChangeHandler(e) {
        this.setState({
            title: e.target.value
        })
   }
   authorChangeHandler(e) {
        this.setState({
            author: e.target.value
        })
    }
   
   yearChangeHandler(e) {
        this.setState({
            year: e.target.value
        })
   }

   submitHandler (e) {
        e.preventDefault();
        let {title, author, year} = this.state;
        
        if(title && author && year){

            let newBook = {
                id : this.state.books.length +1,
                title,
                author,
                year
            }

            this.setState({
                books :[...this.state.books, newBook]
            })

            this.setState({
                title : "",
                author : "",
                year : "",
            })
        }
   }

   render() {
      return (
         <>
            <form id="book-form" autoComplete="off" onSubmit={(e)=> this.submitHandler(e)}>
               <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                     type="text"
                     id="title"
                     className="form-control"
                     onChange={(e) => {
                        this.titleChangeHandler(e);
                     }}
                     value={this.state.title}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                     type="text"
                     id="author"
                     className="form-control"
                     onChange={(e) => {
                        this.authorChangeHandler(e);
                     }}
                     value={this.state.author}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="year">Year</label>
                  <input
                     type="text"
                     id="year"
                     className="form-control"
                     onChange={(e) => {
                        this.yearChangeHandler(e);
                     }}
                     value={this.state.year}
                  />
               </div>
               <input
                  type="submit"
                  value="Add Book"
                  className="btn btn-warning btn-block add-btn"
               />
            </form>
            <table className="table table-striped mt-5 text-center">
               <thead>
                  <tr>
                     <th>Title</th>
                     <th>Author</th>
                     <th>Year</th>
                  </tr>
               </thead>
               <tbody id="book-list">
                {
                    this.state.books.map((book) =>(
                        <Book {...book} key={book.id}/>
                    ))
                }
               </tbody>
            </table>
         </>
      );
   }
}
