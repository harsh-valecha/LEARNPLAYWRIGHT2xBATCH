class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("opening the page");
    }

    close() {
        console.log("closing the page");
    }

}

class Login extends BasePage {

}

let p1 = new Login("LoginPage");
p1.open();
p1.close();
