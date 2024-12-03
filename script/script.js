function menu() {
    var menu = document.querySelector('nav.menu')
    
    var abrir = document.querySelector('img.abrir_menu')
    
    var fechar = document.querySelector('img.fechar_menu')
    
    
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





let btn = document.querySelectorAll('.btn')

let icons = document.querySelectorAll('.icons')

// Função criada para substituir o ícone, quando o cursor do mouse, está dentro do botão / link.

function hoverOn() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseenter', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/envelope-regular2.svg')
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/discord-brands-solid2.svg')
            } else {
                icons[2].setAttribute('src', 'imagens/whatsapp-brands-solid2.svg')
            }
        })
    }
}

hoverOn()


// Função para desfazer a substituição dos ícones, quando o cursor do mouse estiver fora do botão / link.

function hoverOff() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseleave', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/envelope-regular.svg')
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/discord-brands-solid.svg')
            } else {
                icons[2].setAttribute('src', 'imagens/whatsapp-brands-solid.svg')
            }
        })
    }
}

hoverOff()



const screenTouch = window.matchMedia("(max-width: 1007px)")

function touchHover(event) {
    if (event.matches) {
        for (let c = 0; c < btn.length; c++) {
            btn[c].addEventListener('touchstart', () => {
                if (btn[c] == btn[0]) {
                    icons[0].setAttribute('src', 'imagens/envelope-regular2.svg')
                } else if (btn[c] == btn[1]) {
                    icons[1].setAttribute('src', 'imagens/discord-brands-solid2.svg')
                } else {
                    icons[2].setAttribute('src', 'imagens/whatsapp-brands-solid2.svg')
                }
            })

            btn[c].addEventListener('touchend', () => {
                setTimeout(() => {
                    if (btn[c] == btn[0]) {
                        icons[0].setAttribute('src', 'imagens/envelope-regular.svg')
                    } else if (btn[c] == btn[1]) {
                        icons[1].setAttribute('src', 'imagens/discord-brands-solid.svg')
                    } else {
                        icons[2].setAttribute('src', 'imagens/whatsapp-brands-solid.svg')
                    }
                }, 3000)
            })
        }
    }
}

touchHover(screenTouch)
