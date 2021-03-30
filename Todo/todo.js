var ul = document.getElementById("list");
var li;




var addButton = document.getElementById("add")
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);



function addItem(){
	debugger;
    var input = document.getElementById("input");
    var item = input.value;
    ul = document.getElementById('list');
    var textnode  =  document.createTextNode(item);

    if (item == '')
    {
        return false;
        document.write("Please Enter the to do list")
    }

    else
    {
        // create list
        li = document.createElement('li');
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // create label
        var label = document.createElement('label');
        label.setAttribute('for', 'checkbox')


        // Add these things to web page

        ul.appendChild(label);
        ul.appendChild(checkbox);
        ul.appendChild(textnode);
        ul.appendChild(label);
        ul.insertBefore(li, ul.hasChildNodes[0]);
        li.className = 'visual';
		li.innerText = item;

    }


}
function removeItem(){
    li = ul.children;
    for(let index = 0; index<li.length; index++)
    {
        while(li[index] && li[index].children[0], check){
            ul.removeChild(li[index]);
        }
    }


}
