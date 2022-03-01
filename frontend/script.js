/* const currentDate = new Date("1999/01/02")
 */
//construktorok nagybetűvel kezdődnek
function Book(title, author, year, genre){
    //this: mindig egy objektumra mutat vissza, ha másra nem akkor a global windopw-ra
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function(){
        const d = new Date()
        const correntYear = d.getFullYear()
        return correntYear - this.year 
    }
}

const myFavoriteBook = new Book("Háború és Béke", "Tolsztoj", 1867, "Historical novel")
const mySecondFavoriteBook = new Book("Algebra alapjai", "Joe Algebra", 1992, "drama")
console.log(myFavoriteBook.title);
console.log(mySecondFavoriteBook.age());

