import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA1yGvWVB_rGCR85ZDZYpJVk1rRjbb1fzc',
  authDomain: 'my-subscriptions-fc2d5.firebaseapp.com',
  projectId: 'my-subscriptions-fc2d5',
  storageBucket: 'my-subscriptions-fc2d5.appspot.com',
  messagingSenderId: '644552898757',
  appId: '1:644552898757:web:9c92c120832eddfd5358ac'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
