const { list } = require("mocha/lib/reporters/base");

// Code your solutions in this file
const names = [`Guadalupe`,`Ollie`,`Aki`];

function writeCards(names, event)
{
    const newlist = []
    for (let i = 0; i < names.length; i++)
    {
        newlist.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        
    }
    return newlist;
    
}

function countDown(number)
{
    while(number >=0)
    {
        console.log(number--);
    }
}
writeCards([`Guadalupe`,`Ollie`,`Aki`],`surprise`);
//countDown(10);