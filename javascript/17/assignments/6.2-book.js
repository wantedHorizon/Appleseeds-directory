
const book1 = {
    autor: 'eliran',
    name:'Wonderland',
    year:2002,
  
}


const book2 = {
    autor: 'eliran',
    name:'Wonderland',
    year:1994,
  
}


const bookUtils = {
    
}; 

bookUtils.getFirstPublished = function(book1, book2) {
    return    book1.year >book2.year ? book1 : book2;
};

bookUtils.setNewEdition= function(book, year) {
    book.year = year;
};
bookUtils.setLanguage= function(book, language) {
    book.language = language;
};
bookUtils.setTranslation= function(book, language, translator ){
    book.translation= {language: language, translator: translator };
};
bookUtils.setPublisher= function(book, name, location ){
    book.publisher= {name: name, location: location };
};
bookUtils.isSamePublisher= function(book1,book2){
    if(!book1.publisher || !book2.publisher) return false;//error there is no publisher
    return book1.publisher.name=== book2.publisher.name
     && book1.publisher.location===book2.publisher.location;
};






book2.year=2002;
console.log(bookUtils.getFirstPublished(book1,book2));



console.log("set new edition",bookUtils.setNewEdition(book1,2005),book1.year);



//isSamePublisher checks
bookUtils.setPublisher(book1,"eliran","israel");
console.log(bookUtils.isSamePublisher(book1,book2));//false not created 

bookUtils.setPublisher(book2,"eliran","israel");
console.log(bookUtils.isSamePublisher(book1,book2));

