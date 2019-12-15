import fb from 'firebase';

const config = {
  apiKey: 'AIzaSyDy2JffsS89XEGhZikI-Onoeu2LTizRveI',
  authDomain: 'chat-475bd.firebaseapp.com',
  databaseURL: 'https://chat-475bd.firebaseio.com',
  projectId: 'chat-475bd',
  storageBucket: 'chat-475bd.appspot.com',
  messagingSenderId: '234744313494',
  appId: '1:234744313494:web:ceae0d55c2e1923ae434b7',
  measurementId: 'G-CYR0QL2YQ3',
};
fb.initializeApp(config);
fb.analytics();
export const firebase = fb;
