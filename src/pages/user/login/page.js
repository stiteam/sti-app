/**
 * 用户页面
 *
 * created by zhangdi 02/13/2017
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { B2T } from '../../scence'
import styles from './style'
import Header from '../../../components/header'
import Tab from '../../../components/tab'
import Home from '../../../pages/home'

export default class Login extends Component {

  render() {

    return (

      <View style={styles.container}>
        <Header title='用户登录' 
          route={this.props.route} 
          background='#fff' 
          color='#000'
          border={{width: 1, color: '#ccc'}}
          >
          <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.backButton}>
             <Icon name="chevron-left" style={styles.back} />
          </TouchableOpacity>
          {/*<TouchableOpacity onPress={this.goHome.bind(this)} style={styles.homeButton}>
             <Icon name="home" style={styles.home} />
          </TouchableOpacity>*/}
        </Header>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.avatar}></View>
            <Text style={styles.avatarText}>您还未登录，赶紧登录吧~</Text>
          </View>
          <TextInput style={styles.username} autoFocus={false} placeholder='用户名' placeholderTextColor='#ccc' clearButtonMode='while-editing'/>
          <TextInput style={styles.password} placeholder='密码' placeholderTextColor='#ccc' secureTextEntry={true}/>
          <TouchableOpacity onPress={this.submit.bind(this)} style={styles.submit}>
             <Text style={styles.submitText}>登录</Text>
          </TouchableOpacity> 
          
        </View>
      </View>
    )
  }

  static scence() {

    return B2T()
  }

  goBack() {

    const {navigator} = this.props

    if(navigator) {

      navigator.pop()
    }
  }

  goHome() {

    const {navigator} = this.props

    if(navigator) {

      navigator.resetTo({

        name: 'home',
        component: Home
      })
    }
  }

  submit() {

    this.props.login();
    // const {navigator} = this.props

    // if(navigator) {

    //   navigator.pop()
    // }
  }

}

