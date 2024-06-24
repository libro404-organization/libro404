const phrases =  [
    {
        phrase: '"Los monstruos son reales, los fantasmas también: viven dentro de nosotros y, a veces, ellos ganan." - Stephen King'
    },
    {
        phrase: '"El miedo no es real. Es solo una construcción de la mente. El único lugar donde el miedo puede existir es en nuestros pensamientos sobre el futuro. Es un producto de nuestra imaginación, haciendo que temamos cosas que no existen en el presente y que pueden no existir nunca." - Dan Brown'
    },
    {
        phrase: '"Cuando no sabes en qué creer, cualquier cosa puede ser verdadera. " - Joe Hill'
    },
    {
        phrase: '"No hay nada más aterrador que un vaso de agua que se mueve por sí solo." - Michael Ende'
    },
    {
        phrase: '"Todo lo que tenemos que temer es el propio miedo." - Edgar Allan Poe'
    },
    {
        phrase: '"El miedo es la emoción más fuerte." - H.P. Lovecraft'
    },
    {
        phrase: '"Lo que camina detrás de ti en la oscuridad tiene algo que te atrae." - Shirley Jackson'
    },
    {
        phrase: '"La realidad es solo una ilusión, aunque sea una muy persistente." - Clive Barker'
    },
    {
        phrase: '"Hay cosas peores que los fantasmas, peores que los demonios del infierno." - Anne Rice'
    }
];

const showPhrasesBooks = document.getElementById('showPhrasesBooks')

showPhrase()

function showPhrase() {
    let numberPhrase = Math.floor(Math.random() * phrases.length)
    showPhrasesBooks.textContent = phrases[numberPhrase].phrase
}