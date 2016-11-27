const createFrame = require('./createIFrame').createFrame;

const htmlEl = document.querySelector("#htmlContent"),
    jsEl = document.querySelector('#jsContent'),
    cssEl = document.querySelector('#cssContent');

const createEditor = function(){
    CodeMirror.fromTextArea(htmlEl,{mode:"text/html"})
    .on("change",handleHTMLChange);
    
    jsEditorEl = CodeMirror.fromTextArea(jsEl,{mode:"javascript"})
    .on("change",handleJSChange);
    
    cssEditorEl = CodeMirror.fromTextArea(cssEl,{mode:"css"})
    .on("change",handleCSSChange);
}

const addRunHandler = function(){
    const runBtn = document.querySelector("#runBtn")
    runBtn.addEventListener("click", (evt) => {
        evt.stopPropagation()
        evt.preventDefault()
        const html = getHTML(),
            js = getJS(),
            css = getCSS();
        
        createFrame({html,js,css})

    });
}

const handleHTMLChange = function(el,{from, to, text, removed, origin}){
    el.save()
}

const handleJSChange = function(el,{from, to, text, removed, origin}){
    el.save()
}

const handleCSSChange = function(el,{from, to, text, removed, origin}){
    el.save()
}

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
    addRunHandler,
    createEditor
}