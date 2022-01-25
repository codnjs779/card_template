import { firebaseAuth, githubProvider, googleAuthProvider } from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout() {
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }
    getProvider(providerName) {
        switch (providerName) {
            case "Google":
                return googleAuthProvider;
            case "Github":
                return githubProvider;
            default:
                throw new Error("new error", providerName);
        }
    }
}

export default AuthService;
