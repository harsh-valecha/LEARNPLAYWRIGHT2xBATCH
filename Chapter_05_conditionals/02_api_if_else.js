let statusCode = 200;

if (statusCode >= 200 && statusCode < 300) {
    console.log("Success: Request completed successfully");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log("Redirect: Resource has moved");
} else if (statusCode >= 400 && statusCode < 500) {
    if (statusCode === 401) {
        console.log("Unauthorized: Please log in first");
    } else if (statusCode === 403) {
        console.log("Forbidden: You don't have access");
    } else if (statusCode === 404) {
        console.log("Not Found: Resource doesn't exist");
    } else {
        console.log("Client Error: Bad request");
    }
} else if (statusCode >= 500) {
    if (statusCode === 503) {
        console.log("Service Unavailable: Server is down for maintenance");
    } else {
        console.log("Server Error: Something went wrong on the server");
    }
} else {
    console.log("Unknown status code");
}

