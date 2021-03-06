import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import HttpUtil from '../net/HttpUtil';
// import * as API from '../net/API'
import NavigationUtil from '../navigator/NavigationUtil'


/**
 * 欢迎页
 */
type Props = {};
export default class  WelcomePage extends Component<Props>  {

  constructor(props) {
    super(props)
  }
    componentDidMount() {
        // this._testNetwork();
        NavigationUtil.resetToMainPage({
          navigation: this.props.navigation
        });
    }

    render() {
      
        return (
          <View style={styles.container}>
            <TouchableOpacity 
              activeOpacity={0.5}
              onPress={() => {
                      NavigationUtil.resetToMainPage({
                        navigation: this.props.navigation
                      });
              }}>
              <Text style={styles.welcome}>Welcome!</Text>
            </TouchableOpacity>
            
          </View>
        );
      }

      // _testNetwork() {
      //   let params = new FormData()
      //   params.append("name", "");

      //   HttpUtil.get(API.BASE_URL, params, null).then((result) => {
      //       Console.log(result);
      //   }).catch((err) => {
      //       Console.log(err);
      //   });
      // }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });
  