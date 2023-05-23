const jokeButton = document.getElementById("joketime");

jokeButton.addEventListener("click", aq_joke)

const a_joke = document.getElementById("pjoke")

function aq_joke(e) {

    

    fetch(
        `https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Spooky`,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            let joke = "balls"
            if (response.type === "twopart") {
                joke = response.setup + " " + response.delivery;
            }
            else {
                joke = response.joke
            }
            a_joke.innerHTML = joke;
            
        })
        .catch(error => console.log(error));
}