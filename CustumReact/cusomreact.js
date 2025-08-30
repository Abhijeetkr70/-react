function customRander(reactElement,container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.Children
//     // domElement.setAttribute('herf', reactElement.props.herf)

//     // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)
}

import { Children } from "react"

const reactElement ={
    type:'a',
    props:{
        herf: 'http://google.com',
        target: '_blank'
    },
    Children:'Click me to visit google'
}



const mainContsiner = ducument.querySelector('#root')

customRander(reactElement, mainContsiner)