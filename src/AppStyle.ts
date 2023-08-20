import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'grey',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'blue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  pwdLength: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
  },

  label: {
    color: 'white',
    fontSize: 18,
  },

  lengthInp: {
    flex: 0.2,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  checkInpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
