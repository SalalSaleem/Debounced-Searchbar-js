// // Function to handle the search input with debounce
// function handleSearch() {
//     const query = document.getElementById('searchBar').value;
//     document.getElementById('result').innerText = 'Searching for: ' + query;
// }

// let timeout;
// document.getElementById('searchBar').addEventListener('input', function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(handleSearch, 2000);
// });





























function search(){
    var input = document.getElementById('searchBar').value;
    document.getElementById('result').innerText = " you are searching for " + input

}

var timeout;
    document.getElementById('searchBar').addEventListener('input', function() {
        clearTimeout(timeout);
        timeout = setTimeout(search , 500);
    })








