import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
    static proptypes = {
      book: PropTypes.object.isRequired,
      changeShelf: PropTypes.func.isRequired,
      books: PropTypes.array.isRequired
    }

    updateShelf = (e) => {
      this.props.changeShelf(this.props.book, e.target.value)
    }

    render() {
        const { book, books } = this.props
        const title = book.title ? book.title : 'no title' 
        let currentShelf = 'none'
        for (let data of books) {
          if (data.id === book.id) {
            currentShelf = data.shelf
            break
          }
        }
        return (
            <div className="book">
            <div className="book-top">  
              <div className="book-cover"                 
                style={{ width: 128, height: 193,
                         backgroundImage: `url(${book.imageLinks.thumbnail})` }}>                  
              </div>
              <div className="book-shelf-changer">
                <select onChange={this.updateShelf} defaultValue={currentShelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          <div className="book-title">{title}</div>
          { book.authors.map((author, index) => (
            <div className="book-authors" key={index}>{author}</div>
          ))}   
          </div>
        )
    }
}

export default Book