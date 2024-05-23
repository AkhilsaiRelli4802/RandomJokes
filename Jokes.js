let joketextele = document.getElementById("jokeText");
let spinnerele = document.getElementById("spinner");
let jokebtn = document.getElementById("jokeBtn");
let options = {
    method: "GET"
}

function getrandomjoke() {
    spinnerele.classList.remove("d-none");
    joketextele.classList.add("d-none");
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomjoke = jsonData.value;
            spinnerele.classList.add("d-none");
            joketextele.classList.remove("d-none");
            joketextele.textContent = randomjoke;
        });
}
jokebtn.addEventListener("click", getrandomjoke);