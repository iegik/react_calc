/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  View
} from 'react-native';

class react_calc extends Component {
  state = {
    result: '0',
  };

  cache = '';
  clear(){
    this.cache = 0;
    this.setState({result: '0'})
  }
  calc(operation){
    if(operation === 'plus') {
      this.cache += this.state.result + '+';
      this.setState({result: '0'})
    }
    if(operation === 'equal') {
      this.setState({result: eval(this.cache += this.state.result) + ''});
    }
  }
  press(key){
    this.setState({result: this.state.result + key})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.dsp}
                   value={this.state.result}
                   editable={true}
                   onChangeText={(result) => this.setState({result})}
                   keyboardType='numeric'
        />
        <View style={styles.row}>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.clear()} ><Text style={styles.btnText}>{ 'C' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('minus')} ><Text style={styles.btnText}>{ '±' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('minus')} ><Text style={styles.btnText}>{ '/' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('minus')} ><Text style={styles.btnText}>{ '*' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(7)} ><Text style={styles.btnText}>{ '7' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(8)} ><Text style={styles.btnText}>{ '8' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(9)} ><Text style={styles.btnText}>{ '9' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('minus')} ><Text style={styles.btnText}>{ '-' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(4)} ><Text style={styles.btnText}>{ '4' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(5)} ><Text style={styles.btnText}>{ '5' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(6)} ><Text style={styles.btnText}>{ '6' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('plus')} ><Text style={styles.btnText}>{ '+' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(1)} ><Text style={styles.btnText}>{ '1' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(2)} ><Text style={styles.btnText}>{ '2' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(3)} ><Text style={styles.btnText}>{ '3' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnPrimary]} onPress={()=>this.calc('equal')} ><Text style={[styles.btnText,styles.btnTextPrimary]}>{ '=' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={[styles.btn,styles.btnZero]} onPress={()=>this.press(0)} ><Text style={styles.btnText}>{ '0' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(',')} ><Text style={styles.btnText}>{ ',' }</Text></TouchableHighlight>
        </View>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');

const $black = '#000000';
const $white = '#eeeeee';
const $lightGray = '#333333';
const $darkGray = '#111111';
const $yellow = '#eeee11';

const $XXL = 38;
const $XL = 32;
const $L = 24;
const $M = 18;
const $serif = 'Verdana, sans-serif';

const styles = StyleSheet.create({
  container: {
    backgroundColor: $black,
    flex: 1,
    alignItems: 'flex-start',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    width: width / 4,
    height: height / 7.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $lightGray,
    borderColor: $black,
    borderWidth: 1
  },
  btnText: {
    color: $white,
    fontSize: $L,
  },
  btnCtrl: {
    backgroundColor: $darkGray,
  },
  btnPrimary: {
    backgroundColor: $yellow,
    height: (height / 7.2) * 2,
  },
  btnTextPrimary: {
    color: $lightGray
  },
  btnZero: {
    width: (width / 4) * 2,
  },
  dsp: {
    width: width,
    height: (height / 7.2) * 2,
    color: $white,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: $XXL,
    textAlignVertical: 'bottom',
    // justifyContent: 'flex-end',
    // paddingTop: 30,
    // paddingRight: .5,
  },
});

AppRegistry.registerComponent('react_calc', () => react_calc);

export default react_calc
