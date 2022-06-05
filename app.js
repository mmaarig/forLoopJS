// for (let i = 0; i < 5; i++){
//     console.log(`Some text ${i}`);
// }
// for (let i = 6; i < 11; i++){
//     console.log(`Some text ${i}`);
// }

// function printTable(){

//     let numInput = document.querySelector("#numInput").value;

//     for (let i = 1; i <= 10; i++){
//         let result = (`${numInput} x ${i} = ${numInput * (i)}`);
//         console.log(result);
//         let sumResultElement = document.querySelector("#sumResult");
//         sumResultElement.innerHTML = result;
//     }
// }

function printTable() {
    let number;
    let result = "";
    let number2;

    number = Number(document.getElementById("number").value);
    number2 = Number(document.getElementById("number2").value);
    for(let i = 1; i<= number2; i++){

    //   result = result + "<p>"+number + "x" + i + "=" + number * i+"</p>";
    result = (`${result} <p> ${number}x${i}=${number * i} </p>`);
    }

    document.getElementById("result").innerHTML = result;
  }
