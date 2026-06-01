
let responseCodes = [200, 400, 500];
function hasError(...codes) {
    return codes.some(c => c >= 400);
}
console.log(hasError(responseCodes));
