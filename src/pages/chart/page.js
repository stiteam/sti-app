/**
 * 统计页面
 *
 * created by zhangdi 02/13/2017
 */
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './style'
import Header from '../../components/header'
import Tab from '../../components/tab'
import Loading from '../../components/loading'

export default class Chart extends Component {

  render() {

    return (

      <View style={styles.container}>
        <Header title='统计分析' route={this.props.route}/>
        <View style={styles.content}>
          <Text>Chart</Text>
        </View>
        <Tab navigator={this.props.navigator} route={this.props.route}/>
      </View>
    )
  }

}

