import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class Search extends React.Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      changeShelf: PropTypes.func.isRequired
    }
    state = {
      query: '',
      Books: [],
      err: false
    }
    updataQuery = (query) => {
      this.setState({ query })
      if (query) {
        BooksAPI.search(query.trim(), 20)
        .then(books => {
          if(books.length > 0) {
            this.setState({ Books: books, err: false })
          } else {
            this.setState({ Books: [], err: true})
          }
        }) 
        } else {
          this.setState({ Books: [], err: false })
      }
    } 
    render() {
        const { Books, query, err } = this.state
        const { changeShelf, books } = this.props
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className='close-search'
              > close
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={query}
                       onChange={(e) => this.updataQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              { Books.length > 0 && (
                <div>
                <p>{Books.length} items</p>
                <ol className="books-grid">
                  {Books.map(book => (
                    <Book 
                      book={book}
                      key={book.id}
                      changeShelf={changeShelf}
                      books={books}
                    />
                  ))}
                </ol>
                </div>
              )}
              { err && (
                <p>try again</p>
              )}
            </div>
          </div>
        )
    }
}

export default Search