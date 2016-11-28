let frameEl;
let createFrame = ({html,js,css}) => {
    // memoize frame element
    if(frameEl){
        frameEl.remove()
    }
    frameEl = document.createElement('iframe')
    const el = document.querySelector("#root")
    frameEl.setAttribute("id","iframe")
    frameEl.setAttribute("class","output")    
    el.appendChild(frameEl)
    const doc = document.querySelector('#iframe').contentWindow.document
    const head = doc.querySelector("head")
    doc.body.innerHTML = html;
    head.appendChild(createEl('script',js))
    head.appendChild(createEl('style',css))
}

let createEl = (type,innerhtml) => {
    const el = document.createElement(type)
    el.innerHTML = innerhtml
    return el;
}

module.exports = {
    createFrame
}