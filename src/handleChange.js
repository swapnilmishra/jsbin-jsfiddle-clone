const createFrame = require('./createIFrame').createFrame;
const {jsValue,htmlValue,cssValue} = require('./initValue');
const {debounce} = require('./debounce');

let jsEditorEl,cssEditorEl,htmlEditorEl

const htmlEl = document.querySelector("#htmlContent"),
    jsEl = document.querySelector('#jsContent'),
    cssEl = document.querySelector('#cssContent');

const createEditor = function(){
    
    htmlEditorEl = CodeMirror.fromTextArea(htmlEl,{mode:"text/html",theme:'material'})
    
    htmlEditorEl.on("change",handleHTMLChange);
    htmlEditorEl.doc.setValue(htmlValue)
    
    jsEditorEl = CodeMirror.fromTextArea(jsEl,{mode:"javascript",theme:'material'})
    
    jsEditorEl.on("change",saveAndRender);
    jsEditorEl.doc.setValue(jsValue)
    
    cssEditorEl = CodeMirror.fromTextArea(cssEl,{mode:"css",theme:'material'})
    
    cssEditorEl.on("change",handleCSSChange);
    cssEditorEl.doc.setValue(cssValue)
}

const renderPage = () => {
    const html = getHTML(),
    js = getJS(),
    css = getCSS();

    createFrame({html,js,css})

}

const handleHTMLChange = (el,{from, to, text, removed, origin}) => {
    el.save()
    renderPage()
}

const handleJSChange = (el,{from, to, text, removed, origin}) => {
    el.save()
    renderPage()
}

const handleCSSChange = (el,{from, to, text, removed, origin}) => {
    el.save()
    renderPage()
}

const saveAndRender = debounce((el,{from, to, text, removed, origin}) => {
    el.save()
    renderPage()
},3000)

const getHTML = () => {
    return htmlEl.value;
}

const getJS = () => {
    return jsEl.value;
}

const getCSS = () => {
    return cssEl.value;
}


module.exports = {
    createEditor,
    renderPage
}