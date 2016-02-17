/*jshint multistr:true */

var text = "blah Kyle \
            blah Kyle blah blah Kyle \
            Kyle blah blah blah blah";
            
var myName = "Kyle";

var hits = [];

for(var i=0; i < text.length; i++)
{
    if(text[i]==='K')
    {
        for(var j=i; j < i + myName.length; j++)
        {
            hits.push(text[j]);
        }
    }
}

if(hits === 0)
{
    console.log("Your name wasn't found!")
}
else
{
    console.log(hits)
}