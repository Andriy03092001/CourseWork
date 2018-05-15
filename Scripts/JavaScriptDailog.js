$("#myDialog").hide();

function OpenDialog() {
    $("#myDialog").show();
}

function CloseDialog() {
    $("#myDialog").hide();
}

$("#btnRegister").on("click", OpenDialog);
$("#btnCloseDialog").on("click", CloseDialog);