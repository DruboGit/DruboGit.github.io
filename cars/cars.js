class Car {
    constructor(brand, color, bid){
        this.brand = brand;
        this.color = color;
        this.bid = bid;
    }
}
let carlist = [];
async function getDataFromLocalStorage(){
    try {
        carlist = await JSON.parse(localStorage.getItem("thecarlist") );
        if (carlist == null)
            carlist = []
            list_car_div.innerHTML = "";
            carlist.forEach(createHtmlCarList);
    }
    catch (e){
        
        console.log(`Fel: ${e}`)
    }
}
getDataFromLocalStorage();
const addbutton = document.getElementById("addbutton");
const brand = document.getElementById("brand");
const color = document.getElementById("color");
const list_car_div = document.getElementById("listcarDiv");

addbutton.addEventListener("click", addButtonClick);

const createHtmlCarList = (car) => {
    const cardiv = document.createElement("div");
    cardiv.className = "car_div_element";
    const carH2 = document.createElement("h2");
    const carPcolor = document.createElement("P");
    const carDelButt = document.createElement("button");

    carH2.innerText = `${car.brand}`
    carPcolor.innerText = `Color: ${car.color}`
    carDelButt.innerText = "Delete"
    carDelButt.id = car.bid;

    cardiv.append(carH2, carPcolor, carDelButt);
    list_car_div.appendChild(cardiv);
}
function addButtonClick(){
    console.log(`brand = ${brand.value}`)
    console.log(`color = ${color.value}`)
    const now = Date.now();
    const id = now.toString();
    console.log(`ID = ${id}`);
    let brandname = brand.value;

    if (brandname != ""){
        let car = new Car(brand.value, color.value, id);
        carlist.push(car);

        localStorage.setItem("carlist", JSON.stringify(carlist));
        brand.value = "";
        color.value = "";
        list_car_div.innerHTML = "";
        carlist.forEach(createHtmlCarList);
    }
    else
        alert("Must fill in everything")
    brand.focus();
}
let deleteCar = (e) => {
    const new_carlist = carlist.filter((o, i) => o.bid !== e.target.id)

    carlist = new_carlist;
    localStorage.setItem("thecarlist", JSON.stringify(carlist));
    getDataFromLocalStorage();
}

window.addEventListener("click", deleteCar);
