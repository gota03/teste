let campoBusca = document.querySelector("#campo")
let btnBuscar = document.querySelector("#buscar")
let cardPrincipal = document.querySelector("#cardPrincipal")

async function mostrarNaves(num){
    const url = "https://swapi.dev/api/planets/"
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        let elementos = dados.results
        console.log(dados.results)

        const divPrincipal = document.createElement("div")
        divPrincipal.classList.add("card")
        divPrincipal.classList.add("text-center")

        const divHeader = document.createElement("div")
        divHeader.classList.add("card-header")
        divHeader.textContent = "Informações dos planetas"

        const divBody = document.createElement("div")
        divBody.classList.add("card-body")

        const cardTitulo = document.createElement("h5")
        cardTitulo.classList.add("card-title")
        cardTitulo.textContent = `Nome: ${elementos[num].name}`

        const cardTexto1 = document.createElement("p")
        cardTexto1.classList.add("card-text")
        cardTexto1.textContent = `Clima: ${elementos[num].climate}`

        const cardTexto2 = document.createElement("p")
        cardTexto2.classList.add("card-text")
        cardTexto2.textContent = `Terreno: ${elementos[num].terrain}`

        const cardTexto3 = document.createElement("p")
        cardTexto3.classList.add("card-text")
        cardTexto3.textContent = `População: ${elementos[num].population}`

        const divFooter = document.createElement("div")
        divFooter.classList.add("card-footer")
        divFooter.classList.add("text-muted")
        divFooter.textContent = "Planetas de Star Wars"

        divPrincipal.appendChild(divHeader)
        divPrincipal.appendChild(divBody)
        divBody.appendChild(cardTitulo)
        divBody.appendChild(cardTexto1)
        divBody.appendChild(cardTexto2)
        divBody.appendChild(cardTexto3)
        divPrincipal.appendChild(divFooter)
        

        if(cardPrincipal.children.length>0){
            cardPrincipal.removeChild(cardPrincipal.firstElementChild)
        }

        cardPrincipal.appendChild(divPrincipal)

    } catch (error) {
        console.log("o seguinte erro ocorreu: ", error)
    }
}

btnBuscar.addEventListener("click", (evento)=>{
    evento.preventDefault()
    let num = campoBusca
    if(num.value != "" && num.value >=1 && num.value <=10){
        mostrarNaves(num.value)
        console.log(num.value)
    }
    else{
        alert("Insira um número válido")
    }
})