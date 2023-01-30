//Add a new li element without the same class Name

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent ='HELLO 2';
items[1].style.fontWeight = 'bold';

// will not make item 5 pink 
for (var i=0 ; i< items.length ; i++)
{
    items[i].style.backgroundColor = 'pink';
}

//giving error if try editing it with getelementsbyclassname cause item5 not have same class
//items.style.backgroundcolor = 'red';


//And try editing it with getelementsbyclassname and then by getelementbytagname

var li= document.getElementsByTagName('li')
console.log(li);

for (var i=0 ; i< li.length ; i++)
{
    li[i].style.backgroundColor = 'teal';
}