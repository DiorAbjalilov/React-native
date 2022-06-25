import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, TITLE_COLOR} from '../constants/color';
export const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${BACKGROUND_COLOR}`,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: `${TITLE_COLOR}`,
  },
  items: {
    marginTop: 30,
  },
});
