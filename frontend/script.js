const input = () =>{
    return `
    <div class="card">
        <form>
            
            <input type="text" id="input1" name="asd"><br>
            <select name="animals" id="animals">
                <option value="both5555">both</option>
                <option value="cats5555">cats</option>
                <option value="dogs5555">dogs</option>
            </select>
            <button>Submit</button>
            <br><br>

            
            <input type="text" id="input2" name="assadd"><br>
            <button>Submit</button>
            <br><br>

            
            <input type="text" id="input3" name="asdddd"><br>
            <button>Submit</button>
            <br><br>
        </form>
    </div>
    `
}

const loadEvent = async () => {
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", input())

    const form = rootElement.querySelector('form')

    const inputEvent = document.querySelectorAll('input');
    console.log(typeof inputEvent);
    console.log(Array.isArray(inputEvent));
    Array.from(inputEvent).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })
    })// tehát a map az kb ugyan az mint a for ciklus
    //külömbség: a for mindenen végigmegy ami iterálható, a map-nek tömbre van szüksége hogy végigmenjen
    // map előny: a map az tömböt ad vissza, tehát nem kell külön tömböt csinálni plusz még szintaktikailag letisztultabb. 

    /* for (const input of inputEvent) {
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })
    } */
    form.querySelector('select').addEventListener('input', function(e) {
        console.log(e.target.value);
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault()
        console.log(e.target);
    })

    

}
window.addEventListener("load", loadEvent)