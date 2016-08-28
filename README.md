# react-native-num-textinput
A wrapper component for TextInput that accepts only numerical values

## Usage
Donwload or clone the project, or just the component file at [lib/NumericalTextInput.js](https://github.com/amirfl/react-native-num-textinput/blob/master/lib/NumericalTextInput.js).

### Inside your parent component:

* import the component

```import NumTextInput from 'react-native-num-textinput'```

* Use it like a regular TextInput. Inside your render() method:


```<NumTextInput style={styles.textInputStyle} 
            onChangeText={(text)=> this.setState({myText:text})}
            value={this.state.myText.toString()}
            />```
