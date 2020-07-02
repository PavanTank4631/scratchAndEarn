import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//File Import
import styles from './style'
//IMAGE
import CASH from '../../../../assets/images/cash.png'
import MONEY from '../../../../assets/images/money.png'
class Setting extends Component {
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
      <ScrollView contentContainerStyle={styles.container}>
        {this.renderHeader()}
      </ScrollView>
    )
  }
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Setting</Text>
          <View style={styles.titleContainer}>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={['#00FF00', '#FFFF00', '#FF7F00', '#FF0000']}
              style={[styles.coinDisplay, { marginRight: 5 }]}>
              <TouchableOpacity style={styles.coinInner}>
                <Image
                  style={styles.coin}
                  source={CASH}
                />
                <Text style={styles.coinText}>0.5</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={['#00FF00', '#FFFF00', '#FF7F00', '#FF0000']}
              style={styles.coinDisplay}>
              <TouchableOpacity style={styles.coinInner}>
                <Image
                  style={styles.coin}
                  source={MONEY}
                />
                <Text style={styles.coinText}>2000</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={[
            '#FF0000',
            '#FF7F00',
            '#FFFF00',
            '#00FF00',
            '#0000FF',
            '#2E2B5F',
            '#8B00FF',
          ]}
          style={styles.gradient}
        />
      </View>
    )
  }
}

export default Setting;
