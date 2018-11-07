
function tenToSmall(num, base) //convert a base-10 number to a smaller base
{

    num= document.toBinary.num.value;
    base = 2;
    smallNum = "";

    while (num > 0)
    {
        smallNum = num%base + smallNum;
        num= Math.floor(num/base);
        alert(smallNum);
        alert(num);

    }

    return smallNum


}

function smallToTen ()
{
    var num = document.toBaseTen.inputOne.value;
    var base = document.toBaseTen.inputTwo.value;
    var tenNum = 0; // stores output
    var numLength = num.toString().length;

    while (numLength > 0)
    {
        var denominator = Math.pow(10, (numLength - 1));
        var currentDigit = Math.floor(num / denominator);
        tenNum = tenNum + currentDigit * Math.pow(base, (numLength - 1));
        num = num % denominator;
        numLength--;
    }
    return tenNum;
}