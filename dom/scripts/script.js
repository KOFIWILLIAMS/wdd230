const input= document.querySelector("input");
const list = document.querySelector("ul");
const myButtn = document.querySelector("button");

myButtn.addEventListener("click", ( )=>{
    const element = input.value;
    const itemList = document.createElement("li");
    const deleteButtn = document.createElement("button");

    itemList.textContent = element;
    deleteButtn.textContent ="❌";

    itemList.appendChild(deleteButtn);

    list.appendChild(itemList);

    deleteButtn.addEventListener("click", () =>{
        itemList.remove();
        input.focus();
    });

    input.focus();

    input.value = " ";
})

