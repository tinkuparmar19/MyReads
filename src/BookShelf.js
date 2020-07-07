import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends React.Component {
    static proptypes = {
        books: PropTypes.array.isRequired
    }
    render() {
        const { books } = this.props
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <Book book={book} key={book.id}/>
            ))}
                
            </ol>          
        )
    }
}

export default BookShelf