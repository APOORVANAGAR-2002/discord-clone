import { useContext, useEffect } from "react";
import { UserContext } from "./App";
import { firebase } from "./utils/firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/compat/auth';

function Login() {
    let { user, setUser } = useContext(UserContext)

    useEffect(function () {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, []);

    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/',
        // We will display Google as auth provider.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    };

    return (
        <div>
            {user ? <button onClick={function () {
                firebase.auth().signOut();
            }}>Logout</button> : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />}
        </div>
    )
}

export default Login;