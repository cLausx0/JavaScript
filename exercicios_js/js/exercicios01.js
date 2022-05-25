function trafficLight(luz) {
    const semaforo = document.getElementById("img_traffic_light")

    if (luz == 'red'){
        semaforo.setAttribute('src', '/exercicios_js/img/red_light.png')
    }
    else if (luz == 'yellow'){
        semaforo.setAttribute('src', '/exercicios_js/img/yellow_light.png')
    }
    else if (luz == 'green'){
        semaforo.setAttribute('src', '/exercicios_js/img/green_light.png')
    }
    else{
        semaforo.setAttribute('src', '/exercicios_js/img/all_off_light.png')
    }
}


function toFahrenheit() {
    let fharenheit = document.getElementById('inputFahrenheit')
    let celcius = document.getElementById('inputCelcius').value
    let temp = celcius * (9 / 5) + 32
    fharenheit.value = temp
}

function toCelcius() {
    let celcius = document.getElementById('inputCelcius')
    let fharenheit = document.getElementById('inputFahrenheit').value
    let temp = (fharenheit - 32) / (9/5)
    celcius.value = temp
}

function imc() {
    let altura = document.getElementById('inputAltura').value
    let peso = document.getElementById('inputPeso').value
    let IMC = document.getElementById('inputIMC')
    valor = peso / (altura ** 2)
    IMC.value = valor.toFixed(1)
}

function tabelaCarros(carros) {
    const table = document.getElementById('tableCars')
    let idx = true
    let newtrElement;
    let newTDElement;

    if (idx) {
        newtrElement = document.createElement('tr')
    
        table.appendChild(newtrElement)
        for(let i of carros){
            for (let x in i) {
                newTDElement = document.createElement('td')
                newTDElement.innerHTML = x
                newtrElement.appendChild(newTDElement)
            }
            idx = false
            break
        }
    }

    for (let i of carros) {
        newtrElement = document.createElement('tr')

        table.appendChild(newtrElement)

        for (let x in i) {
            newTDElement = document.createElement('td')
            newTDElement.innerHTML = i[x]
            newtrElement.appendChild(newTDElement)
        }
    }

}

function tabelaCarrosMaisEmplacados(carros){
    const table = document.getElementById('tableCars')
    let idx = true
    carros.sort(function(a,b){
        if (a.emplacamentos < b.emplacamentos) return 1
        if (a.emplacamentos > b.emplacamentos) return -1
        return 0
    })

    let newtrElement;
    let newTDElement;

    if (idx) {
        newtrElement = document.createElement('tr')
    
        table.appendChild(newtrElement)
        for(let i of carros){
            for (let x in i) {
                newTDElement = document.createElement('td')
                newTDElement.innerHTML = x
                newtrElement.appendChild(newTDElement)
            }
            idx = false
            break
        }
    }

    for (let i of carros) {
        newtrElement = document.createElement('tr')

        table.appendChild(newtrElement)

        for (let x in i) {
            newTDElement = document.createElement('td')
            newTDElement.innerHTML = i[x]
            newtrElement.appendChild(newTDElement)
        }
    }

}

function tabelaCarrosIpva(carros){
    const table = document.getElementById('tableCars')
    let idx = true
    for(let i of carros){
        i.ipva = (i.preco *3/100)/100
    }
    let newtrElement;
    let newTDElement;

    if (idx) {
        newtrElement = document.createElement('tr')
    
        table.appendChild(newtrElement)
        for(let i of carros){
            for (let x in i) {
                newTDElement = document.createElement('td')
                newTDElement.innerHTML = x
                newtrElement.appendChild(newTDElement)
            }
            idx = false
            break
        }
    }

    for (let i of carros) {
        newtrElement = document.createElement('tr')

        table.appendChild(newtrElement)

        for (let x in i) {
            newTDElement = document.createElement('td')
            newTDElement.innerHTML = i[x]
            newtrElement.appendChild(newTDElement)
        }
    }
}