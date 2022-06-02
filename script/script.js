function menu() {
    var menu = document.querySelector('nav.menu')
    
    var abrir = document.querySelector('span.abrir_menu')
    
    var fechar = document.querySelector('span.fechar_menu')
    
    
    if (menu.style.display != 'block') {
        menu.style.display = 'block'
        abrir.style.display = 'none'
        fechar.style.display = 'block'
    } else {
        menu.style.display = 'none'
        abrir.style.display = 'block'
        fechar.style.display = 'none'
    }
}



function mostrar() {
    var mostra = document.querySelector('div.mostrar')

    var maisInfo = document.querySelector('div.mais_informacoes')
    
    var button = document.querySelector('button.btn_mais')
    
    if (mostra.style.display != 'flex') {
        mostra.style.display = 'flex'
        maisInfo.style.display = 'flex'
        button.innerHTML = 'Ver Menos'
    } else {
        mostra.style.display = 'none'
        maisInfo.style.display = 'none'
        button.innerHTML = 'Ver Mais'
    }
}
