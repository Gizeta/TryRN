import { Alert } from 'react-native';

export default {
  alert: function(message) {
    Alert.alert(
      'Peale',
      message,
      [
        {text: 'OK'}
      ]
    );
  },

  confirm: function(message, callback) {
    Alert.alert(
      'Peale',
      message,
      [
        {text: 'Cancel'},
        {text: 'OK', onPress: callback}
      ]
    );
  }
}
