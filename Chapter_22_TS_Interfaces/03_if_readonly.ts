interface ApiResponse {
    readonly statusCode: number; // cant change this value
    body: string;
    headers?: object; // optional
    responseTime?: number; // optional

}

let respone: ApiResponse = {
    statusCode: 200,
    body: "Cool"
}

console.log("Status:", respone.statusCode);
console.log("Body:", respone.body);


//respone.statusCode = 400;


interface Point {
    readonly x: number;
    readonly y: number;
}