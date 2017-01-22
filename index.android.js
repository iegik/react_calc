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
  View,
} from 'react-native';

class react_calc extends Component {
  state = {
    result: '0',
    cache: '',
    lastOperator: ''
  };

  clear(){
    this.setState({
      result: '0',
      cache: '',
    })
  }
  calc(operation){
    let cache = this.state.cache + this.state.result;
    let state;
    if('+-*/'.indexOf(operation) > -1) {
      state = {
        result: '0',
        cache: cache + operation,
        lastOperator: operation
      }
    }
    if(operation === ',') {
      state = {
        result: this.state.result * '.',
      }
    }
    if(operation === '±') {
      state = {
        result: this.state.result * -1,
      }
    }
    if(operation === '=') {
      try {
        cache = eval(cache.replace(',', '.'));
      } catch (e){
        cache = 'ERROR'
      }
      state = {
        result: cache + '',
        cache: '',
        lastOperator: operation
      };
    }
    this.setState(state);
  }
  press(key){
    this.setState({result: (this.state.result === '0' ? '' : this.state.result) + key})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.dsp]}>
          <Text style={styles.cache}>{this.state.cache}</Text>
          {/*<TextInput style={styles.dsp}*/}
          {/*value={this.state.result}*/}
          {/*editable={true}*/}
          {/*onChangeText={(result) => this.setState({result})}*/}
          {/*/>*/}
        </View>
        <View style={[styles.row, styles.dsp]}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.clear()} ><Text style={styles.btnText}>{ 'C' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('±')} ><Text style={styles.btnText}>{ '±' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('/')} ><Text style={styles.btnText}>{ '/' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('*')} ><Text style={styles.btnText}>{ '*' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(7)} ><Text style={styles.btnText}>{ '7' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(8)} ><Text style={styles.btnText}>{ '8' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(9)} ><Text style={styles.btnText}>{ '9' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('-')} ><Text style={styles.btnText}>{ '-' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(4)} ><Text style={styles.btnText}>{ '4' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(5)} ><Text style={styles.btnText}>{ '5' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(6)} ><Text style={styles.btnText}>{ '6' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnCtrl]} onPress={()=>this.calc('+')} ><Text style={styles.btnText}>{ '+' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(1)} ><Text style={styles.btnText}>{ '1' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(2)} ><Text style={styles.btnText}>{ '2' }</Text></TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={()=>this.press(3)} ><Text style={styles.btnText}>{ '3' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnPrimary]} onPress={()=>this.calc('=')} ><Text style={[styles.btnText,styles.btnTextPrimary]}>{ '=' }</Text></TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={[styles.btn,styles.btnZero]} onPress={()=>this.press(0)} ><Text style={styles.btnText}>{ '0' }</Text></TouchableHighlight>
          <TouchableHighlight style={[styles.btn,styles.btnComma]} onPress={()=>this.press('.')} ><Text style={styles.btnText}>{ '.' }</Text></TouchableHighlight>
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

const $vh = 100 / height;
const $rem = 120 * $vh;
const $XXL = 1.75 * $rem;
const $XL = 1.5 * $rem;
const $L = 1.25 * $rem;
const $M = 1 * $rem;
const $serif = 'Verdana, sans-serif';

const styles = StyleSheet.create({
  container: {
    backgroundColor: $black,
    flex: 1,
  },
  row: {
    flex: 1,
    width: width,
    flexDirection: 'row',
  },
  btn: {
    flex:-1,
    width: width / 4,
    height: height / 7.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $lightGray,
    borderColor: $black,
    borderWidth: 1
  },
  btnText: {
    flex:1,
    color: $white,
    fontSize: $M,
    textAlignVertical: 'center',
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
  btnComma: {
    zIndex: -1,
    marginRight: (width / 4),
  },
  dsp: {
    flex:1,
    height: (height / 7.2),
  },
  result: {
    flex:1,
    color: $white,
    textAlign: 'right',
    paddingRight: 10,
    fontFamily: 'digital-7',
    fontSize: $XXL,
    textAlignVertical: 'center',
  },
  cache: {
    flex:1,
    color: $lightGray,
    textAlign: 'right',
    paddingRight: 10,
    fontFamily: 'digital-7',
    fontSize: $L,
    textAlignVertical: 'center',
  },
});

AppRegistry.registerComponent('react_calc', () => react_calc);

export default react_calc
