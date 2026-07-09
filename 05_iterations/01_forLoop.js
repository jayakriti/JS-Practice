//for loop

for (i = 0; i <= 10; i++)
{
    const element = i;

    if (element == 5)
    {
        //console.log("5 is the BEST number")
    }
    //console.log(element);
}

for (i = 1; i <= 10; i++)
{
    //console.log(`Outer Loop Value ${i}`)
    for (j = 1; j <= 10; j++)
    {
        //console.log(`Inner Loop Value ${j} and Outer Loop Value ${i}`)
        //console.log(i + "*" + j + "= " + i*j)
    }
}

let myArray = ["abc", "def", "ghi"]
for (i = 0; i < myArray.length; i++) 
{
    //console.log(myArray[i])
}

//BREAK and CONTINUE

for (i = 1; i <= 20; i++)
{
    if (i == 5)
    {
        console.log(`Detected Number 5`)
        //break; //BREAK takes directly out of the LOOP
        continue; //CONTINUE ignores once
    }
    console.log(`Value of i is: ${i}`)
}