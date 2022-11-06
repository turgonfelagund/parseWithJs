'use strict'

class Parseador {

    constructor() {
        console.log('entrando');
        this.iniciar()
    }

    parser = new DOMParser()

    iniciar() {
        /* this.parsear(
            `
            <h1>Esto es simplemente una prueba</h1>

            <h3>Esto es simplemente una pruebaaaaa</h3>

            <h2>Esto es simplemente una pruebalvkdjfvñfdkn</h2>
        `
        ) */

        this.cargarParseado()
    }

    //crea nodos a partir de un bloque de texto
    parsear(texto) {
        let body = document.body
        let parseDocument = this.parser.parseFromString(texto, 'text/html')
        let bodyParseable = parseDocument.querySelector('body')

        body.appendChild(bodyParseable)


    }

    //método de carga de contenido de rchivo archivo.
    cargarParseado() {
        fetch('./prueba.html')
            .then(texto => {
                return texto.text()
            })
            .then(html => {
                var doc = this.parser.parseFromString(html, 'text/html');
                let body = document.body
                body.appendChild(doc.querySelector('div'))
            })
    }

}

let inicio = new Parseador()