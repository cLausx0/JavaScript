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

function tabelaCarros(){
    let html = ' ';
    html += '<tr> <td> Teste </td></tr>'
    document.getElementById('tableCars').innerHTML = html
}