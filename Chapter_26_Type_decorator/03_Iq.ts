class Father {
    home(): void {
        console.log("20K");
    }
}

class Pramod extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
pramod.home();