// for (let i = 0; i < 5; i++){
//     console.log(`Some text ${i}`);
// }
// for (let i = 6; i < 11; i++){
//     console.log(`Some text ${i}`);
// }

function printTable(){

    let numInput = document.querySelector("#numInput").value

    for (let i = 0; i < 10; i++){
        console.log(`${numInput} x ${i + 1} = ${numInput * (i + 1)}`);
    }
}

