import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'

const Book = React.createClass({

	getInitialState() {
		return {
		  currentPage: 1,
			bookmarks: []
		};
	 },

	componentDidMount() {
		console.log("User id: ", this.props.userId)
		const firebasePath = "users/"+this.props.userId+"/books/"+this.props.params.bookName.toLowerCase()
		var firebaseRef= data.getFirebaseReference(firebasePath)
		var that = this
		firebaseRef.once("value", function(snapshot) {
			var bookmarksData = snapshot.val()
			that.setState({bookmarks: bookmarksData, currentPage: that.state.currentPage})
		})
	},

	componentDidUpdate() {
		window.scrollTo(0, 0)
	},

	renderPage: function(pages) {
		var page = pages[this.state.currentPage-1]
		return(
			<div dir="rtl" className="book-page">
				{page}
			</div>
		)
	},

	render: function() {
		console.log(this.state)
		var allText;
		//get text from file
		var rawFile = new XMLHttpRequest()
		rawFile.open("GET", "src/books/abc.txt", false);
		rawFile.onreadystatechange = function () {
			if(rawFile.readyState === 4) {
				if(rawFile.status === 200 || rawFile.status == 0) {
					allText = rawFile.responseText;
				}
			}
		}
		rawFile.send(null);

		//pagify text
		const pageSize = 900;
		var pages = []

		allText = allText.replace(/\n\s*\n/g, '\n');
		const nlines = 16;
		const charsPerLine = 100;
		var curIndex = 0;
		while(allText) {
			if(allText.length < 1600) break
			curIndex = 0
			//1. find index at which exactly 16 lines end.
			var linesCounted = 0
			while(linesCounted < nlines) {
				//count one line
				for(var i = 0; i < charsPerLine; i++) {
					curIndex++
					if(allText[curIndex] == '\n') break;
				}
				/*if(allText[curIndex] != '\n') {
					allText = allText.slice(0, curIndex) + "\n" + allText.slice(curIndex)
					curIndex++
				}*/
				linesCounted++
			}
			//rewind so you don't cut a word short
			while(allText[curIndex] != ' ') curIndex--
			//Now, we have 16 lines.
			pages.push(allText.substr(0,curIndex));
			allText = allText.substr(curIndex)
		}

		const totalPages = pages.length

		return (
			<div dir="rtl">
		  {this.renderBookmarkButton()}
			{this.renderPage(pages)}
			<center className="book-navigation">
				<button onClick={this.prevPage}> &lt; </button>
				     الصفحة {this.state.currentPage} من {totalPages}
				<button onClick={()=>this.nextPage(totalPages)}> &gt;</button>
				<br/>
				<input
					ref="range"
					type="range"
					min="1"
					max={totalPages}
					value={this.state.currentPage}
					onChange={this.changePage}
				 />
				<select
					type="select"
					onChange={this.changePage}
					label="Bookmarks">
        <option defaultValue>Bookmarks</option>
				{this.createSelectItems()}
				</select>
			</center>
			</div>
		)},

	changePage(evt){
		this.setState({
      currentPage: evt.target.value
    })
	},

	createSelectItems() {
		let items = []
		const bookmarks = this.state.bookmarks
		for (var key in bookmarks) {
			items.push(<option key={key} value={bookmarks[key]}>Page {bookmarks[key]}</option>)
		}
		return items
	},

	prevPage() {
		var currentPage = this.state.currentPage
		if(currentPage > 1) {
			currentPage--
			this.setState({currentPage: currentPage})
		}
	},

	nextPage(totalPages) {
		var currentPage = this.state.currentPage
		if(currentPage < totalPages) {
			currentPage++
			this.setState({currentPage: currentPage})
		}
	},

	renderBookmarkButton: function() {
		var imageName = "bookmark.png"
		for(var key in this.state.bookmarks) {
			if (this.state.bookmarks[key] == this.state.currentPage) imageName = "filled.png"
		}
		const pathName = "src/images/" + imageName
		return(
			<button onClick={this.getBookmarks}> <img src={pathName}/> </button>
		)
	},

	bookmarksChanged() {
		const firebasePath = "users/"+this.props.userId+"/books/"+this.props.params.bookName.toLowerCase()
		var firebaseRef= data.getFirebaseReference(firebasePath)
		var that = this
		firebaseRef.once("value", function(snapshot) {
			var bookmarksData = snapshot.val()
			that.setState({bookmarks: bookmarksData, currentPage: that.state.currentPage})
		})
	},

  getBookmarks() {
		const curPage = this.state.currentPage
		const firebasePath = "users/"+this.props.userId+"/books/"+this.props.params.bookName.toLowerCase()+'/'+curPage
		var firebaseRef= data.getFirebaseReference(firebasePath)
		var that = this
		firebaseRef.once("value", function(snapshot) {
			console.log("Inside callback, firebase reference: ", firebaseRef);
			console.log("Inside callback, current page: ", curPage);
			var bookmark = snapshot.val()
			if(bookmark == null) {
				firebaseRef.set(curPage)
			} else {
				firebaseRef.remove()
			}
			that.bookmarksChanged()
		})
	},

})

export default Book;
