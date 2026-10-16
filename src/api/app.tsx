/// <reference types="vite/client" />

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "tutoringapp-72e6b.firebaseapp.com",
  projectId: "tutoringapp-72e6b",
  storageBucket: "tutoringapp-72e6b.firebasestorage.app",
  messagingSenderId: "930767704305",
  appId: "1:930767704305:web:a9fb05c1d1dec9c56a5950"
};

export const app = initializeApp(firebaseConfig);