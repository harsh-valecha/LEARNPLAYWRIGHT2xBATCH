function getStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) return "success";
    if (statusCode >= 400 && statusCode <= 500) return "client error";

}


// normal functions are hoisted 