import React from 'react'
import NewsItem from './news-item';

class NewsList extends React.Component{
	render(){
		var list = this.props.data.map(function(item,i){
			return <NewsItem key={i} title={item.title}/>
		});
		return <ul>{list}</ul>;
	}
}
export default NewsList;