/*
Gameplan:

HTML:
(*) Calculator window for operations to be shown along with results
() Number buttons for the calculator
() Operator buttons (+, -, *, etc)
() '=' button
() Reset or Clear button

Javascript:
() Function that captures what was typed in the calculatorWindow
() function that will add numbers, subtract, etc
 */
function pnum(p1, p2)
{
    return Math.pow(p1, p2);
}
function sqrtNum(p1)
{
    var num = document.calculator.calcWindow.value;
    return Math.sqrt(num);
}
function per(p1) //works
{
    return p1/10;
}
function back()
{
    return document.calculator.calcWindow.value.slice(0,-1);
}

function insert(num)
{
    document.calculator.calcWindow.value = document.calculator.calcWindow.value+num
}
function equal()
{

    var firstNum = Number(document.calculator.calcWindow.value.substr(0,1));
    var operator = document.calculator.calcWindow.value.substr(1,1);
    var secondNum = Number(document.calculator.calcWindow.value.substr(2,1));

    if(operator === '^')
    {
        alert(pnum(firstNum, secondNum));
        document.calculator.calcWindow.value = pnum(firstNum, secondNum);

    }
    else if(operator === '%')
    {
        document.calculator.calcWindow.value = per(firstNum);
    }
    else
    {
        return document.calculator.calcWindow.value = eval(document.calculator.calcWindow.value);
    }
}

