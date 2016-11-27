# How to build runners like jsbin, jsfiddle, dabblet

I have always wondered how tools like [jsbin](jsbin.com), [jsfiddle](https://jsfiddle.net) or [dabblet](http://dabblet.com/) work. So, thought of putting together some code to do the same.

![alt text](https://raw.githubusercontent.com/swapnilmishra/jsbin-jsfiddle-clone/master/screenshot/screen.png "Demo run screenshot")

### Show me some code

It basically boils down to creating an iframe and injecting the content(html,css,js) to update. Below is the code from [createIframe.js](https://github.com/swapnilmishra/jsbin-jsfiddle-clone/blob/master/createIFrame.js) file which takes raw HTML,JS,CSS and create an iframe from it there by showing the output.

```javascript
let frameEl;
let createFrame = function ({html,js,css}){
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

let createEl = function(type,innerhtml){
    const el = document.createElement(type)
    el.innerHTML = innerhtml
    return el;
}
```

### How to run

```javascript
npm install
npm start
```

### Tooling used

* [Codemirror](https://codemirror.net) - For syntax highlighting
* [Webpack](https://webpack.github.io/) - For module building and livereload

### What's not implemented here

Whatever I have implemented here are the easiest things to build for these type of tools. The real challenge is building it with security practices in place. In this [link](https://github.com/jsbin/jsbin/wiki/Best-practices-for-building-your-own-live-paste-bin), creator of jsbin([Remy sharp](https://twitter.com/rem)), jsfiddle([Piotr Zalewa](https://twitter.com/zalun)) and dabblet([Lea verou](https://twitter.com/LeaVerou) ) discusses various best practices and security aspects which are very important.

Few of these things are:

* Handling user-accounts/login/signup/saving.
* Ensuring the iframe is not used for XSS attacks.