function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap year`);
    }
    else {
        console.log(`${year} is not a leap year`);
    }
}

checkLeapYear(2024);
checkLeapYear(2025);
checkLeapYear(2026);