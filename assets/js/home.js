//getting the array of the task category elements
var elements = document.getElementsByClassName('task-category');

//Changing the color of the elements regarding there task category
for(var i=0 ;i < elements.length ; i++)
{
    if(elements[i].innerText=="PERSONAL")
    {
        elements[i].style.backgroundColor = "green";
    }
    else if(elements[i].innerText=="WORK")
    {
        elements[i].style.backgroundColor = "red";
    }
    else if(elements[i].innerText =="SCHOOL")
    {
        elements[i].style.backgroundColor = "blue";
    }
    else if(elements[i].innerText=="CLEANING")
    {
        elements[i].style.backgroundColor = "purple";
    }
}