import { googleKey } from '../../apiKey';

export const environment = {
  production: true,
  firebase: {
    apiKey: googleKey,
    authDomain: 'ruraltracklottery.firebaseapp.com',
    databaseURL: 'https://ruraltracklottery.firebaseio.com',
    projectId: 'ruraltracklottery',
    storageBucket: 'ruraltracklottery.appspot.com',
    messagingSenderId: '852797357785'
  }
};
