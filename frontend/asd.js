function Counrty(name, short, population, flag, continent){
    this.name = name
    this.short = short
    this.population = population
    this.flag = flag
    this.continent = continent
}

//components
const header = (logo) =>{
    return `
    <header>
        <a id="logo">${logo}</a>
        <button></button>
    </header>
    `
}

const countryCards = (countries) =>{
    return `
        <div class="countryCards">${countries}</div>
    `
}
const countryCard = (name, short, population, flag, continent) =>{
    return `
        <div class="countryCard">
            <h2>${name}</h2>
            <h2>${short}</h2>
            <h2>${population}</h2>
            <img src="${flag}"></img>
            <h3>${continent}</h3>
        </div>
    `
}

const loadEvent = async () => {
    //get data
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    console.log(countryArr[0]);

    //process data
    let countries = countryArr.map(function (country) {
        return new Counrty(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })
    console.log(countries)

    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header("Countries"))



    let content = ""
    for (const country of countries) {
        content += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    }
    rootElement.insertAdjacentHTML( "beforeend", countryCards( content ) )
    
    

}
window.addEventListener("load", loadEvent)

//jelenitsünk meg kártyaként ezt a countrit és 1 komponensbe mensük el a 
// counriCard meg egy countri cards
//counricardsban legyen egy counry card div és abbana countrik
// 2 külön komponensbe legyen meg és a load eseményben kell hozzáadni a root elemhez-- ott csak meghivni kell
//countryCard
//countryCards
