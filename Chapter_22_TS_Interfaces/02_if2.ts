interface ApiResponse {
    readonly statusCode: number;
    body: string;
    headers?: object; // optional
    responseTime?: number; // optional

}
// readonly means it cant be modified 
//? means optional

let response1: ApiResponse = {
    statusCode: 200,
    body: 'helo'
}

let response2: ApiResponse = {
    statusCode: 404,
    body: "Hi",
    headers: {},
    responseTime: 400
}

console.log(`${response1.statusCode} - ${response1.body} `);
console.log(`${response2.statusCode} - ${response2.body} - ${response2.responseTime}`);