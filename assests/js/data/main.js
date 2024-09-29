const fromEl = document.querySelector('form')

 const lib = new Library()
 fromEl.addEventListener("submit", (e)=>{
    e.preventDefault()
    const bookTitle= document.getElementById('bookTitle').value.trim()
    const bookAuthor = document.getElementById('bookAuthor').value.trim()

    console.log(bookTitle,bookAuthor)

    if(bookTitle && bookAuthor){
    
     const addedBook = new Book(bookTitle, bookAuthor)

     //add book to library class
     lib.addBook(addedBook)

     renderLibrary()
      // remove the entered book information
     }

    })

    function markBookAsRead(index){
        lib.getBooks()[index].markAsRead()
        renderLibrary()

    }
    function removeBook(index){
        lib.removeBook(index)
        renderLibrary()

    }
    
    function renderLibrary(){
        const renderLibEl=  document.querySelector('ul#renderedLibrary')
         const bookCountEl= document.querySelector('#bookCount')

         bookCountEl.textContent=lib.bookCount()
         //reseting previous value
         renderLibEl.innerHTML=''
        lib.getBooks().forEach((book, index) => {
            renderLibEl.innerHTML += `
       <li class="p-3 bg-violet-300 rounded text-black font-semibold text-sm flex justify-between ">
                <div class="${book.isRead() ? 'line-through' : ''}">${book.getTitle()} by ${book.getAuthor()}</div>
            <div>
                <button class="px-2 py-1 bg-green-600 text-sm rounded text-white " onclick="markBookAsRead(${index})"> Mark as Read</button>
                <button class="px-2 py-1 bg-red-600 text-sm rounded text-white" onclick="removeBook(${index})"> Remove</button>
            </div>
            </li>`

        })
}
