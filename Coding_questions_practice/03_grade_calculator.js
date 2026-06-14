let score = 77;

switch (true) {
    case (score >= 90 && score <= 100):
        console.log('Grade is A');
        break;
    case (score >= 80 && score < 90):
        console.log('Grade is B');
        break;
    case (score >= 70 && score < 80):
        console.log('Grade is C');
        break;
    case (score >= 60 && score < 70):
        console.log('Grade is D');
        break;
    default:
        console.log('Grade is F');
        break;
}