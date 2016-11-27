const createFrame = require('./createIFrame').createFrame;

const htmlEl = document.querySelector("#htmlContent"),
    jsEl = document.querySelector('#jsContent'),
    cssEl = document.querySelector('#cssContent');


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
    addRunHandler
}