import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookList extends React.Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      changeShelf: PropTypes.func.isRequired
    }
    render() {
        const { books, changeShelf } = this.props
        const typeOfShelf = [
          { type: 'currentlyReading', title: 'Currently Reading'},
          { type: 'wantToRead', title: 'Want To Read'},
          { type: 'read', title: 'Read'}
        ]
        return (
            <div className="list-books-content">
              {typeOfShelf.map((shelf, index) => {
                  const bookshelf = books.filter(book => book.shelf === shelf.type)
                  return (
                    <div className="bookshelf" key={index}>
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                      <BookShelf 
                        books={bookshelf}
                        changeShelf={changeShelf}/>
                    </div>    
                    </div>
                  )
              })}
            </div>
        )
    }

}

export default BookList