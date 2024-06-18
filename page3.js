let addButton = document.getElementById("add-button");
let deleteButton = document.getElementById("delete-button");
let list = document.getElementById("modifiable");

console.log(list.childElementCount+1)

addButton.onclick = function ()
{
    let newItem = document.createElement("li");
    let newText = document.createTextNode(list.childElementCount+1);
    newItem.appendChild(newText);

    list.appendChild(newItem);
    console.log("add");
}

deleteButton.onclick = function ()
{
    list.removeChild(list.lastElementChild)
    console.log("delete");
}