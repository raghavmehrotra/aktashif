import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'

const Book = React.createClass({
	
	getInitialState() {
		return {
		  currentPage: 1
		};
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
		var allText
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
		/*while(allText) {
			if (allText.length < pageSize) {
				pages.push(allText);
				break;
			} else {
				for(var i = pageSize; i > 0; i--) {
					if(allText[i] == " ") {
						pages.push(allText.substr(0, i));
						allText = allText.substr(i);
						break;
					}
				}
			}
		}*/
		
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
			console.log(pages[pages.length-1])
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
		let items=[]
		const bookmarks = data.getUser().books[0].bookmarks
		for (let i = 0; i <= bookmarks.length; i++) {
			items.push(<option key={i} value={bookmarks[i]}>Page {bookmarks[i]}</option>)
		}
		console.log(items)
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
		const bookmarks = data.getUser().books[0].bookmarks
		var imageName = "bookmark.png"
		if(bookmarks.indexOf(this.state.currentPage) != -1) {
			imageName = "filled.png"
		}
		const pathName = "src/images/" + imageName
		return(
			<button oncClick={this.bookmark}> <img src={pathName}/> </button>
		)
	},
	
	bookmark() {
		/*if(bookmarks.indexOf(this.state.currentPage) != -1) {
			//adds bookmark to array
		} else {
			//removes bookmark from array
		}
		{this.renderBookmarkButton()}*/
	}

})

export default Book;