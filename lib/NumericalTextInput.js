/**
 * Created by
 * Amir Fleminger
 * July 20 2016
 *
 * Descrption: TextInput component that receives only numerical input
 */

'use strict';
import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

const defualts = {prescision: 3}
module.exports = React.createClass({
	/**
	 * @param String text
	 * @return String cleaned String with only [0-9.-] chars
	 */
	cleanNonNumericChars: function(text){
		if (!text || typeof text !== 'string') {
			return ""
		}
		// Remove non numeric and non .- chars
		text = text.replace(/[^\d.-]/g, '');

		// Remove extra periods ('.', only one, at most left allowed in the string)
		const splitText = text.split('.');
		text = splitText.shift() + (splitText.length ? '.' + splitText.join('') : '');

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
		text = text.replace(/^(-?)0+/,'$1')
		return text
	},

	render: function(){
		var props = {...this.props}
		props.value = this.cleanNonNumericChars(props.value)
		return (
			<TextInput {...props}/>
			)
	}

});
