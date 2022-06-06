
function printTable() {
    let number;
    let result = "";
    let number2;

    number = Number(document.getElementById("number").value);
    number2 = Number(document.getElementById("number2").value);
    for(let i = 1; i<= number2; i++){

    //   result = result + "<p>"+number + "x" + i + "=" + number * i+"</p>";
    result = (`${result} <p> ${number} x ${i} = ${number * i} </p>`);
    }

    document.getElementById("result").innerHTML = result;
  }
