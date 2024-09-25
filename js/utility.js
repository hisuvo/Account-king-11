// Return inner Element
function $(id){
    const outPut = document.getElementById(id);
    return outPut;
}

// Return Input null
function $null(id) {
    document.getElementById(id).value = "";
}

// Return all input value as string
function $value(id) {
    const outPut = document.getElementById(id).value;
    return outPut;
}

// Return only Number value
function $valueNumber(id) {
    const outPut = document.getElementById(id).value;
    const outPutNumber = parseFloat(outPut)
    return outPutNumber;
}

// Return Inner Text
function $text(id) {
    const outPut = document.getElementById(id).innerText;
    return outPut;
}

// Only Event section hide
function $hide(id) {
    //All section remove hidden class
    document.getElementById("main_content").classList.remove("hidden");

    // Select sections add hidden class
    // document.getElementById(id).classList.add("hidden")
    function $(id) {
       const outPut = document.getElementById(id).classList.add("hidden")
       return outPut;
    }
    $(id)

}


function $show(id) {
    document.getElementById("montly_account").classList.remove("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")
    document.getElementById("memner_information").classList.remove("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")
    document.getElementById("bazzer_information").classList.remove("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")
    document.getElementById("total_account").classList.remove("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")
    document.getElementById("pay_account").classList.remove("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")
    document.getElementById("developer_information").classList.remove("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")

    // clik button showed
    document.getElementById(id).classList.add("border-2", "border-blue-400", "bg-blue-50", "shadow-lg", "rounded-md")
}


function $filteHide(id) {
    document.getElementById("dev_info_chart").classList.add("hidden");
    document.getElementById("input_counter_form").classList.add("hidden");
    document.getElementById("member_information_chart").classList.add("hidden");
    document.getElementById("bazar_info_chart").classList.add("hidden");
    document.getElementById("total_info_chart").classList.add("hidden");
    document.getElementById("pay_info_chart").classList.add("hidden");



    document.getElementById(id).classList.remove("hidden");
}