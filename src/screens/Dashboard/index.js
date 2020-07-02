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
import ScratchImg from '../../../assets/images/scratch.png';
import LogoImg from '../../../assets/images/guess_company.jpeg';
import MovieImg from '../../../assets/images/guess_movie.jpeg';
import QuizImg from '../../../assets/images/quiz.jpeg';
import MathQuizImg from '../../../assets/images/math_quiz.jpeg';
import PuzzleImg from '../../../assets/images/puzzle.jpeg';

class Item extends React.Component {
  state = {loading: true};

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), this.props.time);
  }

  render() {
    let item = this.props.data;
    let scaleValue = new Animated.Value(0);

    const cardScale = scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.9, 0.8],
    });
    let transformStyle = {
      ...styles.renderView,
      transform: [{scale: cardScale}],
    };

    if (this.state.loading) {
      return null;
    }
    return (
      <Animatable.View animation={LIGHT_SPEED_IN} style={transformStyle}>
        <TouchableOpacity style={styles.options} onPress={this.props.action}>
          <View style={styles.optionBlock}>
            <Image
              resizeMode="cover"
              borderRadius={20}
              source={item.img}
              style={styles.img}
            />
          </View>
          <Text style={styles.optionText}>{item.name}</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

export class index extends Component {
  state = {
    optionsData: [
      {name: 'Scratch And Win', img: ScratchImg},
      {name: 'Guess Company Logo', img: LogoImg},
      {name: 'Guess Movie Name', img: MovieImg},
      {name: 'Play Quiz', img: QuizImg},
      {name: 'Math Quiz', img: MathQuizImg},
      {name: 'Puzzle', img: PuzzleImg},
    ],
  };

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

  _onCategoryPressed = (item, index) => {
    this.props.navigation.navigate('OptionDetail', {data: item});
  };

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
    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>win india win</Text>
          <View style={styles.titleContainer}>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              colors={['#00FF00', '#FFFF00', '#FF7F00', '#FF0000']}
              style={[styles.coinDisplay, {marginRight: 5}]}>
              <TouchableOpacity style={styles.coinInner}>
                <Image
                  style={styles.coin}
                  source={require('../../../assets/images/cash.png')}
                />
                <Text style={styles.coinText}>0.5</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              colors={['#00FF00', '#FFFF00', '#FF7F00', '#FF0000']}
              style={styles.coinDisplay}>
              <TouchableOpacity style={styles.coinInner}>
                <Image
                  style={styles.coin}
                  source={require('../../../assets/images/money.png')}
                />
                <Text style={styles.coinText}>2000</Text>
              </TouchableOpacity>
            </LinearGradient>
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
        <FlatList
          numColumns={2}
          keyExtractor={(item, index) => `${item}`}
          data={this.state.optionsData}
          renderItem={this.renderItem}
        />
      </View>
    );
  };

  renderItem = ({item, index}) => {
    return (
      <Item
        time={index * 70}
        data={item}
        action={() => this._onCategoryPressed(item, index)}
      />
    );
  };
}

export default index;
