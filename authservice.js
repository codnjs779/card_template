import firebaseApp from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = new firebaseApp.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;
