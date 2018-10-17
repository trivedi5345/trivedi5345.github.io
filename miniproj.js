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

function caloriecounter()
{
    var activity=document.getElementById("workList").value;
    var timespent= Number(document.project2.timespent.value);
    var walking = 6;
    var running = 12.5;
    var swimming = 18;
    var bowling = 16;
    var tv = 2;


    if (activity == "walking")
    {
        return "You lost" + " " + walking * timespent + ' ' + "calories";
    }
    else if (activity == "running")
    {
        return "You lost" + " " + running * timespent + ' ' + "calories";
    }
    else if (activity == "swimming")
    {
        return "You lost" + " " + swimming * timespent + ' ' + "calories..." + " " + "Fun Fact: Im a level 8 swimmer"
    }
    else if (activity == "bowling")
    {
        return "You lost" + " " + bowling * timespent + ' ' + "calories." + " " + "Bowlings not my strong sport";
    }
    else if (activity == "tv")
    {
        return "You gained" + " " + tv * timespent + ' ' + "calories..." + " " + "stop being LAZY";
    }



}

