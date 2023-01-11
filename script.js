let result = document.getElementById("inputext");

let calculate = (number) => {
    result.value += number;
};

let Result = () => {

    try {
        result.value = eval(result.value);
    }
    catch (err) {
        alert("Please Enter Valid Input");
    }
}

let clr = () => {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

const tog = document.querySelector('.toggle1');
const calculator = document.querySelector('.calc');
const buttons = document.querySelectorAll('button');

tog.onclick = () => {
    //for changing calculator color//
    calculator.classList.toggle('calc_dark');
    //for changing all buttons color/ =/
    buttons.forEach((item) => {
        item.classList.toggle('calc_button_dark');
    });

} 