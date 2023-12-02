var elList = document.querySelector(".pokemon__list");


function renderPokemons(_pokemons) {

    for(var i = 0; i < _pokemons.length; i++) {

        var newLi = document.createElement('li')
        var newImg = document.createElement('img')
        var newH2 = document.createElement('h2')
        var newText = document.createElement('p')
        var newSpankg = document.createElement('span')
        var newSpanSize = document.createElement('span')
        var newButton = document.createElement('button')

        newLi.setAttribute("class", "pokemon__item")
        newImg.setAttribute("src", _pokemons[i].img)
        newImg.setAttribute("alt", _pokemons[i].name + ", img")
        newH2.setAttribute("class", "pokemon__h2")
        newText.setAttribute("class", "pokemon__text")
        newSpankg.setAttribute("class", "pokemon__kg")
        newSpanSize.setAttribute("class", "pokemon__size")
        newButton.setAttribute("class", "pokemon__btn")
        newButton.setAttribute("type", "button")
        newButton.setAttribute("data-uuid", "close")

        newH2.textContent = _pokemons[i].name
        newText.textContent = _pokemons[i].type
        newSpankg.textContent = _pokemons[i].weight
        newSpanSize.textContent = _pokemons[i].height
        newButton.textContent = "❤️"

        newLi.appendChild(newImg)
        newLi.appendChild(newH2)
        newLi.appendChild(newText)
        newLi.appendChild(newSpankg)
        newLi.appendChild(newSpanSize)
        newLi.appendChild(newButton)
        elList.appendChild(newLi)
    }
    
}

renderPokemons(pokemons)





var Buttonlike = document.querySelectorAll(".pokemon__btn");
var TextLike = document.querySelector(".cound");
var cound = 0;
setInterval(function add() {
    TextLike.textContent = cound
}, 5)


for (var i = 0; i < Buttonlike.length; i++) {
    Buttonlike[i].addEventListener("click", function (evt) {

        if (evt.target.dataset.uuid == "close") {
            cound += 1
            evt.target.dataset.uuid = "open"

        } else if (evt.target.dataset.uuid == "open") {
            cound -= 1
            evt.target.dataset.uuid = "close"
        }
    })
}