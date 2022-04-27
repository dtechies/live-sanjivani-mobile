import React, {Component} from 'react';
import {
  View,
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  ViewPropTypes as RNViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';
const ViewPropTypes = RNViewPropTypes || View.propTypes;
export const DURATION = {
  LENGTH_SHORT: 300,
  FOREVER: 0,
};
import * as styles from './styles';

const {height} = Dimensions.get('window');

export class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    };
  }

  show(text, duration, callback, onPress) {
    this.duration =
      typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;
    this.callback = callback;
    if (typeof onPress === 'function') this.onPress = onPress;
    this.setState({
      isShow: true,
      text: text,
    });

    this.animation = Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
      useNativeDriver: this.props.useNativeAnimation,
    });
    this.animation.start(() => {
      this.isShow = true;
      if (duration !== DURATION.FOREVER) this.close();
    });
  }

  close(duration) {
    let delay = typeof duration === 'undefined' ? this.duration : duration;

    if (delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 150;

    if (!this.isShow && !this.state.isShow) return;
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.animation = Animated.timing(this.state.opacityValue, {
        toValue: 0.0,
        duration: this.props.fadeOutDuration,
        useNativeDriver: this.props.useNativeAnimation,
      });
      this.animation.start(() => {
        this.setState({
          isShow: false,
        });
        this.isShow = false;
        if (typeof this.callback === 'function') {
          this.callback();
        }
      });
    }, delay);
  }

  componentWillUnmount() {
    this.animation && this.animation.stop();
    this.timer && clearTimeout(this.timer);
  }

  render() {
    let pos;
    switch (this.props.position) {
      case 'top':
        pos = this.props.positionValue;
        break;
      case 'center':
        pos = height / 2;
        break;
      case 'bottom':
        pos = height - this.props.positionValue;
        break;
    }

    const view = this.state.isShow ? (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[styles.container(), {top: pos}]} pointerEvents="auto">
          <Animated.View
            style={[
              styles.content(),
              {opacity: this.state.opacityValue},
              this.props.style,
            ]}>
            {React.isValidElement(this.state.text) ? (
              this.state.text
            ) : (
              <Text style={this.props.textStyle}>{this.state.text}</Text>
            )}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    ) : null;
    return view;
  }
}

Toast.propTypes = {
  style: ViewPropTypes.style,
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  textStyle: Text.propTypes.style,
  positionValue: PropTypes.number,
  fadeInDuration: PropTypes.number,
  fadeOutDuration: PropTypes.number,
  opacity: PropTypes.number,
  useNativeAnimation: PropTypes.bool,
};

Toast.defaultProps = {
  position: 'bottom',
  textStyle: styles.text(),
  positionValue: 50,
  fadeInDuration: 100,
  fadeOutDuration: 100,
  opacity: 1,
  useNativeAnimation: false,
};
