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

  passwordContainer: {
    justifyContent: 'center',
  },
  password: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    marginTop: 20,
  },

  actionButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },

  actionButtonTxt: {
    color: 'white',
    fontSize: 18,
  },

  createBtn: {
    backgroundColor: 'blue',
  },

  resetBtn: {
    backgroundColor: 'red',
  },
});
