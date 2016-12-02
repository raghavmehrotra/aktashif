import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

export default React.createClass({

renderBookImage: function(coverImage, title, author) {
    const linkName = '/' + this.props.hub + '/' + this.props.cluster + '/' + title.replace(/\s+/g, '')
    const imageSource = "src/images/" + coverImage
    return (
      <div key={coverImage} className="cluster-landing-book-image-container">
            <Link to={linkName}>
                <img className="cluster-landing-book-image" src={imageSource} />
			</Link>
            <center>
                <h2 className="cluster-landing-book-title">{title}</h2>
                <h3 className="cluster-landing-book-author">{author}</h3>
            </center>
      </div>
    )
  },

  renderBookGrid: function() {
    const books = data.getBooks()
    return books.map((book) => {
      return this.renderBookImage(book.image, book.name, book.author)
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