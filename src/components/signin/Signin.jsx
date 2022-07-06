import React,{useEffect} from 'react'
// import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider,getAuth, signInWithPopup, } from "firebase/auth";
import { getDatabase, ref, set,update } from "firebase/database";
import {FaGoogle} from 'react-icons/fa'
function Signin() {
  useEffect(() => {
    var auth = getAuth();
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
        // const userdata = {
        //   DisplayName: user.displayName,
        //   UserEmail: user.email,
        //   PNumber: user.phoneNumber,
        //   Profile:user.photoURL,
        //   UID:user.uid,
        //   CreatedAt:user.reloadUserInfo.createdAt,
        //   LastLogin:user.reloadUserInfo.lastLoginAt,
        //   UserName:user.reloadUserInfo.screenName,
        //   Timestamp:new Date().getTime()
        // };
        // console.log(userdata);
        const db = getDatabase();
        const updates = {};
        updates['users/' + user.uid+'/LastLogin'] = user.reloadUserInfo.lastLoginAt;
        updates['users/' + user.uid+'/TimeStamp'] = new Date().getTime();
        setTimeout(() => {
          update(ref(db), updates)
            .then(() => {
              window.location.href = "/login";
            })
        },2000);
        // localStorage.setItem('userdata',JSON.stringify(userdata));
      }
    });
  }, []);
  const Googlelogin = () => {
    const auth = getAuth(); 
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(credential);
      // The signed-in user info.
      const user = result.user;
      const userdata = {
        DisplayName: user.displayName,
        UserEmail: user.email,
        PNumber: user.phoneNumber,
        Profile:user.photoURL,
        UID:user.uid,
        CreatedAt:user.reloadUserInfo.createdAt,
        LastLogin:user.reloadUserInfo.lastLoginAt,
        UserName:user.reloadUserInfo.screenName,
        Timestamp:new Date().getTime()
      };
      console.log(userdata);
      const db = getDatabase();
      set(ref(db, 'users/' + user.uid),userdata)
        .then(() => {
          // Data saved successfully!
          alert("User Added Successfully");
          window.location.href = "/home";
        })
        .catch((error) => {
          // The write failed...
        });
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    <>
        <div
        className='p-5 text-center bg-image bgimageSignin'
        >
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>meeting-documentation</h1>
              
              <a className='btn btn-outline-light btn-lg ahover ahovercolor' onClick={Googlelogin} role='button'>
                <FaGoogle /> SignIn With Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin