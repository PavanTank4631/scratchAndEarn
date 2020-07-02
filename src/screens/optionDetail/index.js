import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {LIGHT_SPEED_IN} from '../../helper/constants';

//images
import BackIcon from 'react-native-vector-icons/AntDesign';

class index extends Component {
  render() {
    return this.renderMainView();
  }

  /*
  .##........#######...######...####..######...######.
  .##.......##.....##.##....##...##..##....##.##....##
  .##.......##.....##.##.........##..##.......##......
  .##.......##.....##.##...####..##..##........######.
  .##.......##.....##.##....##...##..##.............##
  .##.......##.....##.##....##...##..##....##.##....##
  .########..#######...######...####..######...######.
  */

  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##...
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##...
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##...
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##...
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##...
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##...
  */

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  };

  renderHeader = () => {
    const {data} = this.props.route.params;

    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.props.navigation.goBack()}>
              <BackIcon name="left" color="#fff" size={25} />
              <Image style={styles.flag} source={data.img} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{data.name}</Text>
          </View>
        </View>
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
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
    );
  };

  renderBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <Text>hello</Text>
      </View>
    );
  };
}

export default index;
