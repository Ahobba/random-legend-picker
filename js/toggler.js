Array.from(document.querySelectorAll('.weaponpicker .column button')).forEach(e => {
    e.addEventListener('click', e => {
        if(e.target.classList.contains('is-danger')){
            e.target.classList.remove('is-danger')
            e.target.classList.add('is-info')
        }
        else {
            e.target.classList.toggle('is-light')
        }
    })
})

Array.from(document.querySelectorAll('.weaponpicker .column button')).forEach(e => {
    e.addEventListener('contextmenu', e => {

        // Azul claro       -> Vermelho escuro
        // Azul escuro      -> Vermelho escuro
        // Vermelho escuro  -> Azul claro

        e.preventDefault()
        if (e.target.classList.contains('is-info')){
            e.target.classList.remove('is-info')
        }
        if (e.target.classList.contains('is-light')) {
            e.target.classList.remove('is-light')
        }
        if (e.target.classList.contains('is-danger')){
            e.target.classList.remove('is-danger')
            e.target.classList.add('is-info')
            e.target.classList.add('is-light')
        }
        else{
            e.target.classList.add('is-danger')
        }
    })
})

document.querySelector('body').addEventListener('contextmenu', e => e.preventDefault())