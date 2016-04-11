import React, {
  Component,
  StyleSheet,
  Text
} from 'react-native';
import AppPage from '../../../component/AppPage';
import ViewSize from '../../../util/ScreenSize';
import NavigatorHelper from '../../../util/NavigatorHelper';

let styles = StyleSheet.create({
  title: {
    color: 'orangered',
    fontSize: 40,
    fontWeight: 'bold',
    left: 10
  }
});

export default class GoView extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.props.navigator.push({ name: 'go2' });
    }, 2000);
  }

  render() {
    return (
      <AppPage
        hasBackButton={false}
        hasSettingButton={false}
        backgroundImage={require('../../../asset/day1/lesson5/go.jpg')}>
        <Text style={styles.title}>DAY 1</Text>
      </AppPage>
    );
  }
}
