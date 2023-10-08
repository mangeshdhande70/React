

// every react jsx function will parse to like below object
const reactElement = {
    type: 'a',
    props:{
        href:"https://www.google.com/",
        target:"_blank"
    },
    children:"Click me to visit Google"
    
}

function customeRender(reactElement, container){
   
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // Generic
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        console.log(`${prop}: ${reactElement.props[prop]}`);
        domElement.setAttribute(prop,reactElement.props[prop]) 
    }
    container.appendChild(domElement)
}


const container = document.getElementById('root')

customeRender(reactElement,container)

