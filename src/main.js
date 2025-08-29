import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')

// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: 'AIzaSyD7....YOUR_API_KEY_HERE....',
//   authDomain: 'your-project-id.firebaseapp.com',
//   projectId: 'your-project-id',
//   storageBucket: 'your-project-id.appspot.com',
//   messagingSenderId: '1234567890',
//   appId: '1:1234567890:web:abcdef123456',
// }

// initializeApp(firebaseConfig)
// export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARs_f5O1TuuvO_EQaJow2MrhnAcjf4VMk',
  authDomain: 'flowbite-login.firebaseapp.com',
  projectId: 'flowbite-login',
  storageBucket: 'flowbite-login.firebasestorage.app',
  messagingSenderId: '571047551529',
  appId: '1:571047551529:web:0e8928ce2fe5b7eefdb238',
  measurementId: 'G-6FLVGXBTF2',
}

// Initialize Firebase
initializeApp(firebaseConfig)
