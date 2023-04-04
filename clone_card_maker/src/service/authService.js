import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";

class AuthService {
    constructor(firebaseAuth) {
        this.auth = firebaseAuth;
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }

    getProvider(target) {
        switch (target) {
            case "Google":
                return this.googleProvider;
            case "Github":
                return this.githubProvider;
            default:
                throw new Error(`not supported provider: ${target}`);
        }
    }

    login(providerName) {
        const provider = this.getProvider(providerName);
        return signInWithPopup(this.auth, provider);
    }

    logout() {
        return signOut(this.auth);
    }

    onAuthStateChanged(moveMakeCard) {
        onAuthStateChanged(this.auth, (user) => {
            moveMakeCard(user);
        });
    }

    getGithubProvider() {
        return this.githubProvider;
    }

    getGoogleProvider() {
        return this.googleProvider;
    }

}

export default AuthService;