import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

export default React.createClass({

  renderBookImage: function(coverImage, title, author) {
    const source = "src/images/book-images/" + coverImage + ".jpg"
    return (
      <div key={coverImage} className="book-image-container">
          <img className="book-image" src={source} />
        <center>
            <h2 className="hub-homescreen-image-caption">{title}</h2>
            <h3>{author}</h3>
        </center>     
      </div>
    )
  },

  renderBookGrid: function() {
    const books = data.getBooks()
    return books.map((book) => {
        console.log(book.cover)
      return this.renderBookImage(book.cover, book.name, book.author)
    })
  },

  render: function() {
    return (
      <center>
        <div className="hub-grid">
          {this.renderBookGrid()}
        </div>
      </center>
    )
  }
})