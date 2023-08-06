function updateInput(input) {
    var value = $("#input").val();
    if (value == '0') {
        if (input != '+' && input != '-' && input != '×' && input != '÷') {
            value = '';
        }
    }
    $("#input").val(value + input);
    if (input == '+' || input == '-' || input == '×' || input == '÷') {
        if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '×' || value.slice(-1) == '÷') {
            value = value.slice(0, -1);
            $("#input").val(value + input);
        }
    }
}

$(".number").click(function() {
    var number = this.id;
    updateInput(number);
});

$(".mathSymbol").click(function() {
    var number = this.textContent;
    updateInput(number);
});