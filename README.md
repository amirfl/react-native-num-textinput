# react-native-num-textinput
A wrapper component for TextInput that accepts only numerical values

## Usage
### Inside your parent component:

* Import the component:

```import NumTextInput from 'react-native-num-textinput'```

* Use it like a regular TextInput.

### Example
Inside your render() method:


```js
<NumTextInput style={styles.textInputStyle}
            onChangeText={(text)=> this.setState({myText:text})}
            value={this.state.myText.toString()}
            />
```

## License
[MIT](https://opensource.org/licenses/MIT) license.
