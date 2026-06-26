interface ApiResponse {
    body: string;
    headers?: object; // optional
    responseTime?: number; // optional

}

let response1: ApiResponse = {
    body: "Helo"
}

let response2: ApiResponse = {
    body: "Hi",
    headers: {},
    responseTime: 400
}