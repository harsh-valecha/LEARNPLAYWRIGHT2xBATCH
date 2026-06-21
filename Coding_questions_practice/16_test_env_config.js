function questionName(input) {
    // Normalize the input to lowercase to handle both 'production' and 'prod' smoothly
    const env = input.toLowerCase();

    // Use let for the assembled config string as requested
    let answer;

    switch (env) {
        case 'dev':
            answer = "Environment: DEV Base URL: https://dev-api.testingacademy.com API Key: dev_key_xxxx-xxxx Timeout: 3000ms Description: Dev - Local development and sandboxing";
            break;
        case 'qa':
            answer = "Environment: QA Base URL: https://qa-api.testingacademy.com API Key: qa_key_xxxx-xxxx Timeout: 5000ms Description: QA - Automated and manual testing";
            break;
        case 'staging':
            answer = "Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror";
            break;
        case 'prod':
        case 'production':
            answer = "Environment: PRODUCTION Base URL: https://api.testingacademy.com API Key: prod_key_xxxx-xxxx Timeout: 2000ms Description: Production - Live user environment";
            break;
        default:
            answer = "Unknown Environment";
    }

    return answer;
}

console.log(questionName("production"));