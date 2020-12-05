import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    render() {
        const { books, changeShelf } = this.props
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <Book book={book} key={book.id} changeShelf={changeShelf} books={books}/>
            ))}
            </ol>          
        )
    }
}

export default BookShelf