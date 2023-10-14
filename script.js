let dialog = document.querySelector(".dialog"); //open dialog
let btnDialog = document.querySelector(".btnDialog");
btnDialog.addEventListener("click", () => {
    dialog.showModal();
});
let btnClose = document.querySelector(".close");
btnClose.addEventListener("click", () => {
    dialog.close();
})
let library = [];                               //library here
function Book (name,author,pages,read,index) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index= index;
    this.changeRead = function(){
        if(this.read==="Completed") {
            this.read="On Progress";
        } else {
            this.read="Completed";
        }
    }
}
function addBook (name,author,pages,read) {
    library.push(new Book(name,author,pages,read) );
}
let cardContainer=document.querySelector(".container");
function displayCards(array){
    cardContainer.innerHTML="";
    for(let i=0; i<library.length; i++) {
        let div = document.createElement("div"); //create a div(card)
        div.classList.add("card");
        cardContainer.appendChild(div);
        //create div for each element (witch correspondent class)
        let divName = document.createElement("div");
        divName.classList.add("bookTitle");
        div.appendChild(divName);
        divName.textContent=library[i].name;////////////
        let divAuthor = document.createElement("div");
        divAuthor.classList.add("author");
        div.appendChild(divAuthor);
        divAuthor.textContent="by: "+library[i].author;//////////
        let divPages = document.createElement("div");
        divPages.classList.add("pages");
        div.appendChild(divPages);
        divPages.textContent="Pages: "+library[i].pages;/////////////
        let divRead = document.createElement("div");
        divRead.classList.add("progress");
        div.appendChild(divRead);
        divRead.textContent=library[i].read;///////////////
        let divButtons= document.createElement("div"); 
            divButtons.classList.add("buttons")
            div.appendChild(divButtons);
        let readBtn = document.createElement("button"); //read btn
            divButtons.appendChild(readBtn)
        if(library[i].read==="Completed"){/////////////
            readBtn.classList.add("read");
            readBtn.textContent="Read";
        } else{
            readBtn.classList.add("not-read")
            readBtn.textContent="Not read yet";
        }
        readBtn.addEventListener("click", () => {
            library[i].changeRead();////////////
            if(readBtn.textContent==="Read") {
                readBtn.textContent="Not read";
                readBtn.classList.remove("read");
                readBtn.classList.add("not-read")
                divRead.textContent="On Progress";
            } else {
                readBtn.textContent="Read";
                readBtn.classList.remove("not-read");
                readBtn.classList.add("read");
                divRead.textContent="Completed";
            }
        });
        let deleteBtn = document.createElement("button") //delete btn
        deleteBtn.classList.add("delete");
        deleteBtn.textContent="Delete";
        divButtons.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            //function to delete book
            library.splice(i,1);/////////////
            displayCards(library);
        });
    }
}
let bookName = document.querySelector("#book-name"); //form info and submit
let bookAuthor = document.querySelector("#book-author");
let bookPages = document.querySelector("#book-pages");
let bookRead = document.querySelector("#read");
let submit = document.querySelector(".book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
        dialog.close();
        addBook(bookName.value,bookAuthor.value,bookPages.value,bookRead.value);
        displayCards(library);
        bookName.value="";
        bookAuthor.value="";
        bookPages.value="";
    }   
}); 


//Optional
addBook("Creat11","Rob",210,"Completed");
addBook("Non00","Dev",300,"On Progress");
addBook("Liv22","Bolita",450,"Completed");
addBook("Str33","Pan",310,"On Progress");
displayCards(library);
//Optional