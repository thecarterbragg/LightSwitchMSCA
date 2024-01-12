const button = document.getElementById('button')

const lightStyle = {
    backgroundColor: '#eee',
    color: '#222'
}

const darkStyle = {
    backgroundColor: '#222',
    color: '#eee'
}

const changeStyles =(style)=> {
    let newStyle;
    
    if(style == lightStyle) {
        newStyle = darkStyle
    } else if (style == darkStyle) {
        newStyle = lightStyle
    }

    return newStyle
}

button.addEventListener('click', ()=> {
    const body = document.getElementsByTagName('body')[0]

    body.classList.contains('dark') ? body.style = darkStyle : null

    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        body.classList.add('light')
    } else if (body.classList.contains('light')) {
        body.classList.remove('light')
        body.classList.add('dark')
    }
})

const toggleClass =(arr, element, mode1, mode2)=> {
    if (element.classList.contains(mode1)) {
        element.classList.remove(mode1)
        element.classList.add(mode2)
    } else if (element.classList.contains(mode2)) {
        element.classList.remove(mode2)
        element.classList.add(mode1) 
    } else {
        return 'error'
    }
}
