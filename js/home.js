
// log out buttno

$("input_logIn_button").addEventListener("click", (e) => {
    e.preventDefault();
    const loginName = $("login_input_name").value;


    if (loginName.length < 3 || loginName.length >= 10) {
        alert("The name may have no more than 10 characters");
        $null("login_input_name")
        return
      } else {
        $("log_out").innerHTML = loginName.toUpperCase();
        $hide("header_content");

      }
    
})


// Filter Button section Functionality
// Montly account 
let childs = $("filter_button").children;
for(let child of childs) {
    child.addEventListener("click", function (e) {
        let btn = e.target.getAttribute("id")
        $show(btn)
    })
}

$("developer_information").classList.add("border")

$("developer_information").addEventListener("click", () => {
    $filteHide("dev_info_chart")
})

$("montly_account").addEventListener("click", () => {
    $filteHide("input_counter_form")

})

$("memner_information").addEventListener("click", () => {
    $filteHide("member_information_chart")
})

$("bazzer_information").addEventListener("click", () => {
    $filteHide("bazar_info_chart")
})

$("total_account").addEventListener("click", () => {
    $filteHide("total_info_chart")
})

$("pay_account").addEventListener("click", () => {
    $filteHide("pay_info_chart")
})



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
        <div class="p-2 bg-blue-50 grid grid-cols-5 gap-2 rounded-lg shadow-lg text-center">
            <h2 class=" font-bold">${id = id + 1}. ${menberName.toUpperCase()}</h2>
            <p class=" font-bold">${amount}</p>
            <p class=" font-bold">${mill}</p>
            <p class=" font-bold">${amount}</p>
            <p class=" font-bold">${mill}</p>
        </div>
    `
    $("memebr_status").appendChild(div);
    console.log(div)

    $("input_name").value = ""
    $("input_money").value = ""
    $("input_mill").value = ""

})