import React, {
  Component,
  Image,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white'
  },
  icon: {
    flex: 0
  },
  textInput: {
    flex: 1
  }
});

export default class TextInputWithIcon extends Component {
  static propTypes = {
    secureTextEntry: React.PropTypes.bool,
    icon: React.PropTypes.number,
    iconWidth: React.PropTypes.number,
    iconHeight: React.PropTypes.number,
    onChangeText: React.PropTypes.func
  };

  static defaultProps = {
    secureTextEntry: false,
    icon: null,
    iconWidth: null,
    iconHeight: null,
    onChangeText: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    };
    this.onTextInputFocus = this.onTextInputFocus.bind(this);
    this.onTextInputBlur = this.onTextInputBlur.bind(this);
  }

  render() {
    let containerStyle = [styles.container];
    let iconStyle = [styles.icon];
    let inputStyle = [styles.textInput];
    if (this.props.iconWidth) {
      iconStyle.push({ width: this.props.iconWidth });
    }
    if (this.props.iconHeight) {
      iconStyle.push({ height: this.props.iconHeight });
      inputStyle.push({ height: this.props.iconHeight });
    }

    if (this.state.isFocus) {
      containerStyle.push({ borderColor: 'gray' });
    }
    return (
      <View style={containerStyle}>
        <Image
          source={this.props.icon}
          resizeMode="stretch"
          style={iconStyle} />
        <TextInput
          style={inputStyle}
          onFocus={this.onTextInputFocus}
          onBlur={this.onTextInputBlur}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          underlineColorAndroid="transparent" />
      </View>
    );
  }

  onTextInputFocus() {
    this.setState({
      isFocus: true
    });
  }

  onTextInputBlur() {
    this.setState({
      isFocus: false
    });
  }
}
