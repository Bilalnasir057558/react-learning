
const renderCustomReact = (element, root) => {
    const domElement = document.createElement(element.type);
    domElement.innerText = element.children;
    for(const prop in element.properties) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, element.properties[prop]);
    }

    root.appendChild(domElement);
}



const domElement = {
    type: "a",
    properties: {
        href: "https://www.google.com",
        target: "_blank"
    }, 
    children: "Click to visit Google"
};


const rootElement = document.getElementById("root");
renderCustomReact(domElement, rootElement);