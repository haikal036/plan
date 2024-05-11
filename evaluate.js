function evaluate() {

    var current = parseFloat(document.getElementById('current').value);
    var current_used = parseFloat(document.getElementById('current_used').value);
    var upgrade = parseFloat(document.getElementById('upgrade').value);
    var upgrade_future = parseFloat(document.getElementById('upgrade_future').value);

    // Check if inputs are valid
    //if (isNaN(current) || isNaN(upgrade)) 
    //{
    //    alert("Please enter valid data");
    //    return;
    //}

    // Perform the calculation
    var upgrade_price = (upgrade_future * upgrade) - (current_used * current);

    //if (current === 1.00 || current === 1.69 || current === 3.33 || current === 4.97) 
    //{
    //   upgrade_price = (upgrade_future * upgrade) - (current_used * current);
    //}

    // Display the result
    document.getElementById("result").textContent = "Upgrade Price: " + upgrade_price.toFixed(2);
}