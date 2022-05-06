import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBRtistb_SlPf0tZKiZab8-dxoVe7qDprY',
  authDomain: 'fir-auth-4cc19.firebaseapp.com',
  projectId: 'fir-auth-4cc19',
  storageBucket: 'fir-auth-4cc19.appspot.com',
  messagingSenderId: '486869820603',
  appId: '1:486869820603:web:63d73659970b760186759e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
