export class AuthService{
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        )

        return promise;
    }

    login() {
        this.loggedIn = true;
        console.log("login In service :: ", this.loggedIn);
    }

    logout() {
        this.loggedIn = false;
        console.log("login Out service :: ", this.loggedIn);
    }
}