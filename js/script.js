var btn = document.querySelector("#btn")

function darkMode() {
    var body = document.querySelector(body)
    body.classlist.toggle("dark-mode")

    if(btn.innertext == "ativar") {
        btn.innertext = "desativar"
    }else{
        
    }
}