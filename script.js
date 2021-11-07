function compute()
{

    let principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a positive number!"); //check the input.
        document.getElementById("principal").focus(); //set the focus to the principal input box
        return;
    }
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let localDate = new Date();
    let futureDate = localDate.getFullYear() + Number(years); //using Date() structure to get future year

    let resultText = document.createElement('resultText');
    resultText.innerHTML = "If you deposit "+ "<mark>" +principal.toString() + "</mark>,<br>"
        + "at an interest rate of " + "<mark>" + rate.toString() + "</mark>%.<br>"
        + "You will receive an amount of " + "<mark>" + interest.toString() + "</mark><br>"
        + "in the year " + "<mark>" + futureDate.toString() + "</mark>,<br>"; //form the shown text

    let result = document.getElementById("result");
    while(result.hasChildNodes()) {
        result.removeChild(result.firstChild);
    }
    result.appendChild(resultText); //using js to dynamically plug in the resultText
    result.children[0] = resultText;
}

function displayInterest(val){
    let displayData = document.getElementById("displayData");
    displayData.innerText = val.toString() + " %" //refresh the changed interest text
}