//btn to open dialog
let dialog = document.querySelector(".dialog");

let btnDialog = document.querySelector(".btnDialog");
btnDialog.addEventListener("click", () => {
    dialog.showModal();
});
let btnClose = document.querySelector(".close");
btnClose.addEventListener("click", () => {
    dialog.close();
})
//



//library here
let library = [];

function Book (name,author,pages,read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBook (book) {
    library.push(book);
}

//example only
//delete this
let first = new Book("Book1","author",120, true);
addBook(first);
//delete this

function displayCards(array){
    for(let i=0; i<=array.length; i++) {
        //create a div(card)
        //create div for each element (witch correspondent class)
        //assign each array element value to its div
    }
}