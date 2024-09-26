
// log out buttno

$("input_logIn_button").addEventListener("click", (e) => {
    e.preventDefault();
    const loginName = $("login_input_name").value;


    if (loginName==='') {
        alert("The name may characters");
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

