import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  icon: {
    flex: 0
  },
  textContainer: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: 'black'
  }
});

export default class SelectableTextBlock extends Component {
  static propTypes = {
    onCheck: React.PropTypes.func,
    onUncheck: React.PropTypes.func,
  };

  static defaultProps = {
    onCheck: null,
    onUncheck: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  render() {
    let iconStyle = [styles.icon];
    if (this.state.isChecked) {
      iconStyle.push({ opacity: 1 });
    }
    else {
      iconStyle.push({ opacity: 0 });
    }

    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../asset/image/tick.png')}
            resizeMode="stretch"
            style={iconStyle} />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.textContainer}
          onPress={(this.onPress.bind(this))}>
          <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPress() {
    let val = !this.state.isChecked;
    this.setState({
      isChecked: val
    });

    if (val) {
      if (this.props.onCheck) {
        this.props.onCheck();
      }
    }
    else {
      if (this.props.onUncheck) {
        this.props.onUncheck();
      }
    }
  }
}
