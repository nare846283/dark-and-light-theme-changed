let root = document.documentElement;
let btn = document.querySelector("#btn")
let flag = 0 ;

btn.addEventListener('click', function() {
    if (flag == 0) {
        root.style.setProperty("--light", "#000")
        root.style.setProperty("--dark", "#fff")
        btn.innerHTML = "Dark"
        flag = 1
    }else{
        root.style.setProperty("--light", "#fff")
        root.style.setProperty("--dark", "#000")
        btn.innerHTML = "Light"
        flag = 0
    }

})