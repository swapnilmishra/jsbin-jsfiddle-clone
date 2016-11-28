const createFrame = require('./createIFrame').createFrame;
const initValue = require('./initValue');
const {debounce} = require('./debounce');

let jsEditorEl,cssEditorEl,htmlEditorEl

const htmlEl = document.querySelector("#htmlContent"),
    jsEl = document.querySelector('#jsContent'),
    cssEl = document.querySelector('#cssContent');

const createEditor = function(){
    
    htmlEditorEl = CodeMirror.fromTextArea(htmlEl,{mode:"text/html",theme:'material'})
    
    htmlEditorEl.on("change",handleHTMLChange);
    htmlEditorEl.doc.setValue(initValue.htmlValue)
    
    jsEditorEl = CodeMirror.fromTextArea(jsEl,{mode:"javascript",theme:'material'})
    
    jsEditorEl.on("change",saveAndRender);
    jsEditorEl.doc.setValue(initValue.jsValue)
    
    cssEditorEl = CodeMirror.fromTextArea(cssEl,{mode:"css",theme:'material'})
    
    cssEditorEl.on("change",handleCSSChange);
    cssEditorEl.doc.setValue(initValue.cssValue)
}

const renderPage = () => {
    const html = getHTML(),
    js = getJS(),
    css = getCSS();

    createFrame({html,js,css})

}

const handleHTMLChange = function(el,{from, to, text, removed, origin}){
    el.save()
    renderPage()
}

const handleJSChange = function(el,{from, to, text, removed, origin}){
    el.save()
    renderPage()
}

const handleCSSChange = function(el,{from, to, text, removed, origin}){
    el.save()
    renderPage()
}

const saveAndRender = debounce(function(el,{from, to, text, removed, origin}){
    el.save()
    renderPage()
},3000)

const getHTML = function(){
    return htmlEl.value;
}

const getJS = function(){
    return jsEl.value;
}

const getCSS = function(){
    return cssEl.value;
}


module.exports = {
    createEditor,
    renderPage
}