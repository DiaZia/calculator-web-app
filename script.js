var arrayOfInput = [];
var indexOfInput = 0;

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
            var last = arrayOfInput[arrayOfInput.length - 1];
            arrayOfInput.pop();
            arrayOfInput.push(last.slice(0,-1) + input);
        } else {
            arrayOfInput.push($("#input").val().slice(indexOfInput));
            indexOfInput = $("#input").val().length;
        }
        arrayOfInput.forEach(element => {
            console.log(element);
        });
    }
}


function addDot() {
    var value = $("#input").val();
    if ((value.slice(-1) != '+' && value.slice(-1) != '-' && value.slice(-1) != '×' && value.slice(-1) != '÷')) {
        if (!($("#input").val().slice(indexOfInput).includes('.'))) {
            $("#input").val(value + '.');
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

$("#point").click(function() {
    addDot();
});

function deleteLast() {
    var value = $("#input").val();
    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '×' || value.slice(-1) == '÷') {
        var lengthOfLast = arrayOfInput[arrayOfInput.length - 1].length;
        arrayOfInput.pop();
        indexOfInput -= lengthOfLast;
    }
    $("#input").val(value.slice(0, -1));
    
}

$("#back").click(deleteLast);


function solve() {

    var reslut = 0.0;
    if (indexOfInput < $("#input").val().length) {
        arrayOfInput.push($("#input").val().slice(indexOfInput) + ' ');
    }
    reslut += parseFloat(arrayOfInput[0].slice(0, -1));
    var mathSymbol = arrayOfInput[0].slice(-1);
    for (var i = 1; i < arrayOfInput.length; i++) {
        switch (mathSymbol) {
            case '+': 
                reslut += parseFloat(arrayOfInput[i].slice(0, -1));
                break;
            case '-': 
                reslut -= parseFloat(arrayOfInput[i].slice(0, -1));
                break;
            case '×': 
                reslut *= parseFloat(arrayOfInput[i].slice(0, -1));
                break;
            case '÷': 
                reslut /= parseFloat(arrayOfInput[i].slice(0, -1));
                break;
        }
        mathSymbol = arrayOfInput[i].slice(-1);
    }
    arrayOfInput = [];
    indexOfInput = 0;
    $("#input").val(reslut);
}

$("#equals").click(solve);