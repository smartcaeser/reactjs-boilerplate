import React from 'react'

class NewsItem extends React.Component{
	render(){
		return <li className="item">- {this.props.title}</li>;
	}
}
export default NewsItem;