import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,signOut  } from "firebase/auth";

class AuthService {
    constructor(firebaseApp) {
        this.auth = getAuth(firebaseApp);
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
       return signInWithPopup(this.auth,provider);
    }

    logout() {
        return signOut(this.auth);
    }

    getGithubProvider() {
        return this.githubProvider;
    }
    getGoogleProvider() {
        return this.googleProvider;
    }

}
export default AuthService;