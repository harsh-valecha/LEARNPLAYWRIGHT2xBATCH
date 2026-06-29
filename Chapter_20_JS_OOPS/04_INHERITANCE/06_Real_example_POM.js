class BasePage {
    verify() {
        console.log("Verifying the base page");
    }
}
class LoginPage extends BasePage {
    verify() {
        console.log("verify username field exists");
        console.log("verify password field exists");
        console.log("verify login button exists");
    }
}

class Dashboard extends BasePage {
    verify() {
        console.log("verify: welcome message shown");
        console.log("verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("verify: cart page is displayed");
        console.log("verify: total price is correct");
    }
}

let pages = [new LoginPage(), new Dashboard(), new CartPage()];
pages.forEach(function (page) {
    page.verify();
    console.log("-------");
})