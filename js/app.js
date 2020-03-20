//how to select by id
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className); //Note::when you will select class by id then you have to use className



// styling by javascript
console.log(document.getElementById('task-title').style.background='#2e2e2e');
console.log(document.getElementById('task-title').style.color='#fff');
console.log(document.getElementById('task-title').style.marginTop='10px');
console.log(document.getElementById('task-title').style.padding='5px');
 


// selecting text of tags by three way 
console.log(document.getElementById('task-title').textContent='Below are all of list item');
console.log(document.getElementById('task-title').innerText='All list item are below');
console.log(document.getElementById('task-title').innerHTML='<span>All list item are below </span>');

