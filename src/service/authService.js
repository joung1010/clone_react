import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,signOut  } from "firebase/auth";

class AuthService {
    constructor(firebaseApp) {
        this.auth = getAuth(firebaseApp);
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }

    getProvier(target) {
        switch (target) {
            case "Google":
                return this.googleProvider;
                break;
            case "Github":
                return this.githubProvider;
                break;
        }
    }

    login(provier) {
       return signInWithPopup(this.auth,provier);
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