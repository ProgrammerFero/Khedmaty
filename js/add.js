const scriptURL = "https://script.google.com/macros/s/AKfycbyqpd0x_M_e4yfmnI6l3MURiVoOJy5WukU623aU6Jw6KJ4x6FDrzqGbdyjp4IS-TblXFA/exec";

const form = document.forms['AddT-form'];

form.addEventListener("submit" , e => {

    e.preventDefault()
    fetch(scriptURL , {method: "post" , body: new FormData(form)})
    .then(response => alert("We will review the Topic, and if it is ok and all the data is correct, it will be added"))
    .then(() => {window.location.reload();})
    .catch(error => console.error("Error!!" , error.message))

})

// Check Sub
if (localStorage.getItem("subEmailKhedmaty")) {
    console.log("Yeaah");
} else {
    window.location = "../subscribe.html" ;
}