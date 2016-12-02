import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'


const Profile = React.createClass({
  
  renderImage: function(item, prop) {
    const imageSource = "src/images/" + item.image
	console.log(item)
    return (
      <div key={item.id} className="profile-image-container">
            <img className="profile-image" src={imageSource} />
            <center>
                <h1 className="profile-image-caption">{item[prop]}</h1>
            </center>
      </div>
    )
  },
  
  //renders a grid of images of items from the given array 'arr' and caption with the given property.
  renderGrid: function(arr, prop) {
	console.log(arr)
    return arr.map((item) => {
      return this.renderImage(item, prop)
    })
  },

  render: function() {
	var books = []
	console.log(data.getUser().books.length)
	for(var i = 0; i < data.getUser().books.length; i++) {
	  const bookData = data.getBooks().find( (element) => {
		return element.id == data.getUser().books[i].id
	  })
	 // const bookmarks = data.getUser().books[i].bookmarks
	//  const progress = Math.max.apply(Math, bookmarks)/bookData.pages
	  bookData['progress'] = data.getUser().books[i].progress
	  books.push(bookData)
	}
    return (
        <div dir='rtl'>
        <Header />
		<center className="profile-welcome">اهلًا سارة!</center>
		<h3>كتبي</h3>
		<div>{this.renderGrid(books, 'progress')}</div>
		<h3>إنجازاتي</h3>
		<div>{this.renderGrid(data.getUser().trophies, 'name')}</div>
        </div>
    )}
})

export default Profile;