import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './news-list';
var options = {
	data : [
	{title : 'Title #1'},
	{title : 'Title #2'},
	{title : 'Title #3'},
	{title : 'Title #4'}
	]
};

var element = React.createElement(NewsList,options);
ReactDOM.render(element , document.getElementById('root'));