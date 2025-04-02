app.filter("bookFilter", function () { 
    return function (books, searchText) { 
        if (!searchText) return books; 

        searchText = searchText.toLowerCase(); 
        return books.filter(function (book) { 
            return book.title.toLowerCase().includes(searchText) || 
                   book.author.toLowerCase().includes(searchText) || 
                   book.genre.toLowerCase().includes(searchText); 
        }); 
    }; 
});
