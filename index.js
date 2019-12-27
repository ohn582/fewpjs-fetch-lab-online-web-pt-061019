document.addEventListener('DOMContentLoaded', function() {
  function fetchBooks(){
    fetch('https://anapioficeandfire.com/api/books')
  }
})

// //get post
// fetch('https://anapioficeandfire.com/api/books')
// .then(resp => resp.json())
// .then((fetchBooks) => 
// console.log(fetchBooks));