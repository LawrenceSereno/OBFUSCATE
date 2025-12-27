/* ============================================
   BestBuddies Pet Grooming - Firebase Configuration
   Updated to user-provided project config while preserving auth/database exports
   ============================================ */

// Import Firebase modules - Updated to latest version
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

// Updated Firebase configuration - Production Environment
const firebaseConfig = {
  apiKey: "AIzaSyCIgh8V6xs2kvLuKsfzzTNW5BFRLCooH6c",
  authDomain: "bestbuddies-43255.firebaseapp.com",
  databaseURL: "https://bestbuddies-43255-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bestbuddies-43255",
  storageBucket: "bestbuddies-43255.firebasestorage.app",
  messagingSenderId: "90437117556",
  appId: "1:90437117556:web:2fb6497456b6e40e695321",
  measurementId: "G-B38W22XRDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
let database;
try {
  database = getDatabase(app);
} catch (e) {
  console.warn('Realtime Database not configured for this project or getDatabase failed:', e);
  database = null;
}

// Make Firebase services globally available
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDatabase = database;
window.firebaseAnalytics = analytics;

console.log('Firebase initialized with updated config');
