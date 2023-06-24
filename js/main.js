function calculate () {

    //Input Binding
    let inputValue = document.getElementById('input-value').value;

    // Tip Calculations
    let tip30 = parseFloat(inputValue) * .30;
    let tip25 = parseFloat(inputValue) * .25;
    let tip20 = parseFloat(inputValue) * .20;
    let tip15 = parseFloat(inputValue) * .15;
    let tip10 = parseFloat(inputValue) * .10;

    // Sum Calculations
    let sum30 = parseFloat(inputValue) + tip30;
    let sum25 = parseFloat(inputValue) + tip25;
    let sum20 = parseFloat(inputValue) + tip20;
    let sum15 = parseFloat(inputValue) + tip15;
    let sum10 = parseFloat(inputValue) + tip10;

    // Set Tip Values
    document.getElementById("tip-30").value = "$" + tip30.toFixed(2);
    document.getElementById("tip-25").value = "$" + tip25.toFixed(2);
    document.getElementById("tip-20").value = "$" + tip20.toFixed(2);
    document.getElementById("tip-15").value = "$" + tip15.toFixed(2);
    document.getElementById("tip-10").value = "$" + tip10.toFixed(2);

    // Set Total Values
    document.getElementById("sum-30").value = "$" + sum30.toFixed(2);
    document.getElementById("sum-25").value = "$" + sum25.toFixed(2);
    document.getElementById("sum-20").value = "$" + sum20.toFixed(2);
    document.getElementById("sum-15").value = "$" + sum15.toFixed(2);
    document.getElementById("sum-10").value = "$" + sum10.toFixed(2);
};