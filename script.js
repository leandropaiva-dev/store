document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    } else {
       
    }
});
