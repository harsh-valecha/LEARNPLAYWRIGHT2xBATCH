function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}
validateStatusCode(200);
// function as expression 
const validateStatusCodeExp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}
validateStatusCodeExp(300);
// function as arrow
const validateStatusCodeArrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

validateStatusCodeArrow(255);
