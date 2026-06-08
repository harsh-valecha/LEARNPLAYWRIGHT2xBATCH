// write pyramid pattern
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j <= i) {
//             process.stdout.write("*" + " ");
//         }
//     }
//     console.log();
// }


// another way
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write("*" + " ");
//     }
//     console.log();
// }

// another way
for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}