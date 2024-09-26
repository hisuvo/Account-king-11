
let id = 0;

$("add_member_button").addEventListener("click", (event) => {
    event.preventDefault();
    
    const menberName = $("input_name").value;
    const amount = $value("input_money");
    const mill = $value("input_mill");

    if(menberName === "") {
        alert("Please Input File");
        return;

    }


    if($("input_money").value === ""){
        alert(`Input ${menberName} Amount Number`)
        return;
    }

    if($("input_mill").value === ""){
        alert(`Input ${menberName} Mill Number`)
        return;
    }
    
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="p-2 border-2 border-blue-10 grid grid-cols-3 gap-2 rounded-lg text-center">
            <h2 class=" font-bold">${id = id + 1}. ${menberName.toLowerCase()}</h2>
            <p id=${id}-${menberName}-${amount} class=" font-bold">${amount}</p>
            <p id=${id}-${menberName}-${mill} class=" font-bold">${mill}</p>
        </div>
    `
    $("member_information_chart").appendChild(div);

    console.log(`${id}-${menberName}-${amount}`)


    $("input_name").value = ""
    $("input_money").value = ""
    $("input_mill").value = ""

})
