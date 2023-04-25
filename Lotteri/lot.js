const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "Slott i Ryssland",
    "Biljett till en konsär av artisten du hatar mest",
    "Eiffeltornet",
    "Massage av Putin",
    "10 miljoner i skadestånd",
    "Swat raid",
    "Skäggig man",
    "Markrättigheterna till Siberia",
    "Ett hus i Arktis",
    "12 spänn",
    "Gifta dig me en estetare",
    "Snowboard",
]

function slumpClick(){

    let vinst = `<h3> Dina vinster </h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    for (i=0; i<int_antalv; i++){
        let slumptal = Math.floor(Math.random() *12)
        let tvinst = vinster[slumptal];
        vinst += `<p>${tvinst}</p>`
    }

    svar_div.innerHTML = vinst;
}