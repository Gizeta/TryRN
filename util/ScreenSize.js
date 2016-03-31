import {Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

/* correct size in landscape mode */
if (width < height) {
  height += width;
  width = height - width;
  height = height - width;
}

export default {
  width: width,
  height: height
}
