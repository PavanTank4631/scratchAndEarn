import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

//FILE IMPORT
import styles from './style'

//IMAGES
import HOME from '../../../assets/images/home.png'
import SPIN from '../../../assets/images/spin.jpg'
import MYACCOUNT from '../../../assets/images/profile.png'
import REFER from '../../../assets/images/refer.png'
import SETTING from '../../../assets/images/settings.png'

class BottomBar extends Component {
  state = {
    animation: false,
    bottomData: [
      { img: HOME, name: 'Home', selected: true },
      { img: SPIN, name: 'Spin', selected: false },
      { img: MYACCOUNT, name: 'Account', selected: false },
      { img: REFER, name: 'Refer', selected: false },
      { img: SETTING, name: 'Setting', selected: false },
    ]
  }
  render() {
    return (
      this.renderMainView()
    )
  }
  /*
  88b 88    db    Yb    dP 88  dP""b8    db    888888 88  dP"Yb  88b 88
  88Yb88   dPYb    Yb  dP  88 dP   `"   dPYb     88   88 dP   Yb 88Yb88
  88 Y88  dP__Yb    YbdP   88 Yb  "88  dP__Yb    88   88 Yb   dP 88 Y88
  88  Y8 dP""""Yb    YP    88  YboodP dP""""Yb   88   88  YbodP  88  Y8
  */
  renderNavigationView = (item, curruntindex) => {
    this.setState({ animation: true }, () => {
      const { bottomData } = this.state
      let temArr = bottomData

      temArr.forEach((element, index) => {
        if (index == curruntindex) {
          temArr[curruntindex].selected = true
        } else {
          temArr[index].selected = false
        }
      });
      this.setState({ bottomData: temArr })

      if (curruntindex === 0) {
        this.props.navigation.navigate('Home')
      } else if (curruntindex === 1) {
        this.props.navigation.navigate('Spin')
      } else if (curruntindex === 2) {
        this.props.navigation.navigate('MyAccount')
      } else if (curruntindex === 3) {
        this.props.navigation.navigate('Refer')
      } else if (curruntindex === 4) {
        this.props.navigation.navigate('Setting')
      }
    })
  }
  /*
  88      dP"Yb   dP""b8 88  dP""b8
  88     dP   Yb dP   `" 88 dP   `"
  88  .o Yb   dP Yb  "88 88 Yb
  88ood8  YbodP   YboodP 88  YboodP
  */
  /*
   dP""b8  dP"Yb  8b    d8 88""Yb  dP"Yb  88b 88 888888 88b 88 888888
  dP   `" dP   Yb 88b  d88 88__dP dP   Yb 88Yb88 88__   88Yb88   88
  Yb      Yb   dP 88YbdP88 88"""  Yb   dP 88 Y88 88""   88 Y88   88
   YboodP  YbodP  88 YY 88 88      YbodP  88  Y8 888888 88  Y8   88
  */
  renderMainView = () => {
    return (
      <View>
        {this.renderBottomBar()}
      </View>
    )
  }
  renderBottomBar = () => {
    return (
      <View style={[styles.container]}>
        <FlatList
          horizontal={true}
          keyExtractor={(item, index) => `${item}`}
          data={this.state.bottomData}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ padding: 5 }} onPress={() => this.renderNavigationView(item, index)}>
                <View style={[styles.btn, { backgroundColor: item.selected ? '#000' : 'darkgrey' }]}>
                  <Image source={item.img} style={[styles.imgContainer]} />
                  <Text style={[styles.name, { color: item.selected ? '#fff' : '#000' }]}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

export default BottomBar

