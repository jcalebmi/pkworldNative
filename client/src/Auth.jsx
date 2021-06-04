import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from '@react-firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './components/Auth/Profile.jsx';
import google from './components/Auth/google/web/1x/btn_google_signin_light_normal_web.png'
import config from '../../firebaseConfig.js';
firebase.initializeApp(config);
const auth = firebase.auth();

const Auth = () => {
  const [user] = useAuthState(auth);
  const [err, setErr] = useState(null);

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div id='auth'>
        {user === null ?
          <div>
            <h3>You are not signed in</h3>
            <button
              className="signInButton"
              onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
              }}
            >
              <img className="google" src={google} />
            </button><br/>
            {/* <button
            onClick={() => {
              const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
              firebase.auth().signInWithPopup(facebookAuthProvider)
              .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                setErr({
                  err: errorMessage,
                  email: email
                })
              });
              }}
            >
              Sign in with Facebook
            </button> */}
            {err !== null
            ? <div style={{color:'red', backgroundColor: 'black'}}>
                <p>{err.err}</p>
                <p>{err.email}</p>
              </div>
            : null}
          </div>
          :
          <div>
            <Profile user={user}/>
            <button
            onClick={() => {
             firebase.auth().signOut();
             setErr(null);
             }}
             >
             Sign Out
             </button>
          </div>}
        <div>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              // return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
};
export default Auth;
