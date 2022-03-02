//1. get data 
//2.  prepare data (codewars) business logcx
//3. components = html elements we would like to add to the document later
//4. render = add the components to the documents 

/* 1. */
function Month(name, id, nth, days){
    this.name = name
    this.id = id
    this.nth = nth
    this.days = days
}
const months = [
    new Month("January", "jan", 1, 31),
    new Month("February", "feb", 2, 28),
    new Month("March", "mar", 3, 31),
    new Month("April", "apr", 4, 30),
    new Month("May", "may", 5, 31),
    new Month("Juni", "jun", 6, 30),
    new Month("July", "jul", 7, 31),
    new Month("August", "aug", 8, 31),
    new Month("September", "sep", 9, 30),
    new Month("Oktober", "okt", 10, 31),
    new Month("November", "nov", 11, 30),
    new Month("December", "dec", 12, 31),
]


/* 2. */
const monthSection = (id, h1, days) => {
    return `
        <section id="${id}">
            <h1>${h1}</h1>
            <div class="days">${days}</div>
        </section>
    `
}

const dayCard = (year, month, day) => {
    return `
        <div class="card">
            <time>${year}</time>
            <time>${month}</time>
            <time>${day}</time>
            <button class="card-btn">Get day name</button>
        </div>
    `
}

const dayCards = (month, callDayCard) => {
    let toReturn = ""
    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i)
    }
    return toReturn
}
/* console.log( dayCards(months[0], dayCard) ); */

/* 3. */
const loadEvent = () => {
    //hogyan lehet kirendelni amit az előbb megkaptunk
    //rootba a sectionoket rendereljök bele
    /* let rootElement = document.getElementById('root')
    for (let i = 0; i < 12; i++) {
        rootElement.insertAdjacentHTML('beforeend', monthSection(months[i].id, months[i].name, dayCards(months[i], dayCard) ) ) 
    } */

    //section hozzáadás
    let content = ""
    for (const month of months) {
        content += monthSection(month.id, month.name, dayCards(month, dayCard) )
    }
    document.getElementById('root').insertAdjacentHTML('beforeend', content)

    //clickEvent

    /* function cardButtonClickEvent(event){
        //toggle ha rajta van leveszi ha nincs ráteszo
        event.target.parentElement.classList.toggle("clicked")
    }

    const cardList = document.querySelectorAll(".card")
    for (const card of cardList) {
        card.querySelector("button").addEventListener("click", cardButtonClickEvent)
    } */
    function clickEvent(event){
        if( event.target.classList.contains("card-btn") ){
            event.target.innerHTML = "this button was clicked"
        }
    }
    document.addEventListener("click", clickEvent)
}
window.addEventListener("load", loadEvent)