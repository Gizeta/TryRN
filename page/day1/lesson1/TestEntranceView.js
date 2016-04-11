import React, {
  Component,
  StyleSheet,
  Text
} from 'react-native';
import AppPage from '../../../component/AppPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  title: {
    color: 'orangered',
    fontSize: 40,
    fontWeight: 'bold',
    left: 10
  }
});

export default class TestEntranceView extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.props.navigator.push({ name: 'test_intro' });
    }, 2000);
  }

  render() {
    return (
      <AppPage
        hasBackButton={false}
        hasSettingButton={false}
        backgroundImage={require('../../../asset/day1/lesson1/next.jpg')}>
        <Text style={styles.title}>DAY 1</Text>
      </AppPage>
    );
  }
}
