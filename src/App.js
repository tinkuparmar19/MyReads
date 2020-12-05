import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll() 
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  changeShelf = (changebook, shelf) => {
    BooksAPI.update(changebook, shelf)
    .then(res => {
      changebook.shelf = shelf
      this.setState((currentState => ({
        books: currentState.books.filter(book => book.id !== changebook.id).concat(changebook)
      })))
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route 
        path='/search' render={() => (
          <Search changeShelf={this.changeShelf} books={books}/>
        )}
        />
        <Route 
          exact path='/' render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <BookList 
              books={books}
              changeShelf={this.changeShelf}  
            />
          <div className="open-search">
              <Link 
                to='/search'
              > Add a book
              </ Link>
          </div>
          </div>
        )}
         />
      </div>
    )
  }
}
export default BooksApp
