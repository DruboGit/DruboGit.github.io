let bool_katet = true

const minSelect = document.getElementById("minselect");
let inputv1 = document.getElementById("input_vl");
let inputv2 = document.getElementById("input_v2");
const svardiv = document.getElementById("svar_id");
const kalkyleraknapp = document.getElementById("kalk_knapp");

kalkyleraknapp.addEventListener("click", kalkyleraClick);

minSelect.addEventListener("change", function(){
    console.log(`Selected Val: ${this.value}`)
    let selectval = this.value;

    if (selectval === "Katet") {
        bool_katet = true
        inputv2.placeholder = "katet";
    }
    else {
        bool_katet = false;
        inputv2.placeholder = "hypotenusa";
    }
})

function kalkyleraClick(){
    console.log(`balls`)

    try{
        let tal1 = inputv1.value;
        let tal2 = inputv2.value;
        
        let int_tal1 = parseInt(tal1);
        let int_tal2 = parseInt(tal2);

        let int_tal1_upph = int_tal1 * int_tal1;
        let int_tal2_upph = int_tal2 * int_tal2;

        let str_svar = ""

        if(isNaN(tal1) || isNaN(tal2)) {
            alert("Endast heltal")
        }
        else {
            if (bool_katet){
                let adderat = int_tal1_upph + int_tal2_upph;
                let roten_ur = Math.sqrt(adderat);

                str_svar = `<b>hypotenusa</b>
                <br>
                ${tal1}&sup2; + ${tal2}&sup2 = <br>
                ${int_tal1_upph} + ${int_tal2_upph} = ${adderat} <br>
                Roten ur: ${adderat} = ${roten_ur.toFixed(2)}`
            }
            else {
                let adderat = int_tal1_upph + int_tal2_upph;
                let roten_ur = Math.sqrt(adderat);

                str_svar = `<b>katet</b>
                <br>
                ${tal1}&sup2; + ${tal2}&sup2 = <br>
                ${int_tal1_upph} + ${int_tal2_upph} = ${adderat} <br>
                Roten ur: ${adderat} = ${roten_ur.toFixed(2)}`
            }
            svardiv.innerHTML = str_svar;

            inputv1.value = ""
            inputv2.value = ""
        }
    }
    catch (error) {
        alert("innmatnings Error" + error)
    }
}