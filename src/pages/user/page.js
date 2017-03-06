/**
 * 用户页面
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
import Login from './login'

export default class User extends Component {

  render() {

    return (

      <View style={styles.container}>
        <Header 
          title='用户信息' 
          route={this.props.route} 
          background='#fff' 
          color='#000'
          border={{width: 1, color: '#ccc'}}
        />
        <View style={styles.content}>
          <Text>user</Text>
        </View>
        <Tab navigator={this.props.navigator} route={this.props.route}/>
      </View>
    )
  }

  componentWillMount () {

    const { user, navigator }= this.props

    if(!user.isLogin) {

      navigator.push({

        name: 'login',
        component: Login
      })
    }
  }

}

