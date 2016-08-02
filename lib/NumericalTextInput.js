/**
 * Created by
 * Amir Fleminger
 * July 20 2016
 * Descrption: TextInput component that receives only numerical input
 */

'use strict';
import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

module.exports = React.createClass({
	/**
	* @param String text
	* @return String cleaned String with only [0-9.-] chars
	*/
	cleanNonNumericChars(text){
		if (!text || typeof text !== 'string') {
			return ""
		}
		// Remove non numeric and non .- chars
		text = text.replace(/[^\d.-]/g, '');
		// Remove extra periods ('.', only one, at most left allowed in the string)
		let splitText = text.split('.');
		text = splitText.shift() + (splitText.length ? '.' + splitText[0].slice(0, this.props.precision) : '');
		// Remove '-' signs if there is more than one, or if it is not most left char
		for (var i=1; i< text.length; i++)
		{
	   		var char = text.substr(i,1);
	   		if(char == '-')
	   		{
	     			text = text.substr(0,i) + text.substr(i+1);
	     			// decrement value to avoid skipping character
	     			i--;
	   		}    
		}
		// Remove leading zeros
		text = text.replace(/^(-)?0+(?=\d)/,'$1') //?=\d is a positive lookahead, which matches any digit 0-9
	
		return text
	},


	getInitialState(){
		let textValue=''
		if (this.props.value) {
			textValue=this.props.value
		} else if (this.props.defaultValue) {
			textValue=this.props.defaultValue
		}
		const numValue=(textValue === '') ? NaN : parseFloat(textValue)
		return {
			textValue,
			numValue
		}
	},

	getDefaultProps: function() {
    	return {
      		precision: 3
    	};
  	},

	getNumValue:function(){
		return this.state.numValue
	},

	componentWillReceiveProps:function(nextProps){
		if(this.props.value !== nextProps.value){
			const cleanStr = this.cleanNonNumericChars(nextProps.value) 
			this.setState({
				textValue: cleanStr,
				numValue: parseFloat(cleanStr)
			})
		}
	},

	render: function(){
		var props = {...this.props, value:this.state.textValue}
		return (
			<TextInput {...props}/>
			)
	}

});
