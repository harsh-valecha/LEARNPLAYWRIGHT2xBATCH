let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn"
}

interface elementI {
    tagName: string,
    textContent: string,
    id: string
}

let button = element as elementI;
console.log(button.tagName);
console.log(button.id);