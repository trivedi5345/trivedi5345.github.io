function assignGrade()
{
    //capture a score
    var score = Number(document.project3.num1.value);

    if(score >=90) //that's an A
    {
        return 'A for Awesome';
    }
    else if (score >= 80)
    {
        return 'B for Best';
    }
    else if (score >= 70)
    {
        return 'C for Cool';
    }
    else if (score >= 60)
    {
        return 'D for Dumbo';
    }
    else if (score >= 50)
    {
        return 'F for Fabulous';
    }
    else if (score <= 50)
    {
        return 'F for Fabulous';
    }
}



function tempBug()
{

        var temp1 = Number(document.project6.temp1.value);

        if (temp1 >=500)
        {
            return 'Are you even on Earth?!?!?';
        }
        else if (temp1 >= 90)
        {
            return document.getElementById('temp1').src="sum.jpg";
        }

       else if (temp1 >= 80)
        {
            return document.getElementById('temp1').src="summer.jpg";
        }
        else if (temp1 >= 70)
        {
            return document.getElementById('temp1').src="spring.jpg";
        }
        else if (temp1 >= 60)
        {
            return document.getElementById('temp1').src="fall.jpg";
        }
        else if (temp1 >= 50)
        {
            return document.getElementById('temp1').src="winter.jpg";
        }
        else if (temp1 >=0)
        {
            return document.getElementById('temp1').src="bilz.jpg";
        }
        else if (temp1 >= 500)
        {
            return 'Where are you? Neptune?'
        }


}

function calCounter()
{
    var call = Number(document.project5.num1.value);

    if (call >= 60)
    {
        return "300 calories";
    }

    else if (call >= 40 )
    {
        return "210 calories";
    }

    else if (call >= 20)
    {
        return "140 calories";
    }
    else if (call >= 10)
    {
        return "60 calories"
    }



}
