function calculate() {
    var current_plan = parseFloat(document.getElementById('current_plan').value);
    var current_used = parseFloat(document.getElementById('current_used').value);
    var next_plan = parseFloat(document.getElementById('next_plan').value);
    var next_day = parseFloat(document.getElementById('next_day').value);

    var upgrade_price = (next_day * next_plan) - (current_used * current_plan);
    document.getElementById('result').textContent = "Upgrade Price: " + upgrade_price;
}