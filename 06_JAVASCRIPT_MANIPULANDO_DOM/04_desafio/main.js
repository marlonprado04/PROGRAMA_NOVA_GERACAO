const botaoVisualizar = document.querySelector('[data-visualizar]')
const botaoEsconder = document.querySelector('[data-esconder]')
const listaCores = document.querySelector('[data-lista]')

botaoVisualizar.addEventListener('click', (evento) => {
    listaCores.style.display = 'block'
})

botaoEsconder.addEventListener('click', (evento) => {
    listaCores.style.display = 'none'
})
