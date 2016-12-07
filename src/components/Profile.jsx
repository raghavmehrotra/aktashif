import React from 'react'
import * as data from '../accessAllData.jsx'


const Profile = React.createClass({

  renderImage: function(item, prop) {
    const imageSource = "src/images/" + item.image
    var classForIcon = "", classForCaption = ""
    var styleObj = {}

    if(prop=="progress") { //for book
      classForIcon = "profile-book-image"
      classForCaption = "profile-book-caption"
    } else { //for trophies
      styleObj = { // for some reason, CSS wasn't working on trophy images
        "maxHeight": "50%",
        "maxWidth": "50%",
        "height": "auto",
        "width": "auto"
      }
      classForIcon = "profile-trophy-image"
      classForCaption = "profile-trophy-caption"
    }

    return (
      <div key={item.id} className="">
        <img style={styleObj} className={classForIcon} src={imageSource} />
        <h1 className={classForCaption}>{item[prop]}</h1>
      </div>
    )
  },

  //renders a grid of images of items from the given array 'arr' and caption with the given property.
  renderGrid: function(arr, prop) {
    return arr.map((item) => {
      return this.renderImage(item, prop)
    })
  },

  render: function() {
  	console.log(this.props)
  	var books = []
  	for(var i = 0; i < data.getUser().books.length; i++) {
  	  const bookData = data.getBooks().find( (element) => {
  		  return element.id == data.getUser().books[i].id
  	  })
  	 // const bookmarks = data.getUser().books[i].bookmarks
  	//  const progress = Math.max.apply(Math, bookmarks)/bookData.pages
  	  bookData['progress'] = data.getUser().books[i].progress
  	  books.push(bookData)
	  }
    // <h3 className="profile-trophies-title">إنجازاتي</h3>
    // <div className="profile-trophies-container">{this.renderGrid(data.getUser().trophies, 'name')}</div>
    return (
        <div dir='rtl'>
					<h1 className="profile-books-title">كتبي</h1>
					<div className="profile-books-container">{this.renderGrid(books, 'progress')}</div>
        </div>
    )}
})

export default Profile;
