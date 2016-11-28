/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("const handleJS = __webpack_require__(2);\nhandleJS.createEditor()\nhandleJS.renderPage()//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhbmRsZUpTID0gcmVxdWlyZSgnLi9oYW5kbGVDaGFuZ2UnKTtcbmhhbmRsZUpTLmNyZWF0ZUVkaXRvcigpXG5oYW5kbGVKUy5yZW5kZXJQYWdlKClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("const createFrame = __webpack_require__(3).createFrame;\nconst initValue = __webpack_require__(4);\nconst {debounce} = __webpack_require__(5);\n\nlet jsEditorEl,cssEditorEl,htmlEditorEl\n\nconst htmlEl = document.querySelector(\"#htmlContent\"),\n    jsEl = document.querySelector('#jsContent'),\n    cssEl = document.querySelector('#cssContent');\n\nconst createEditor = function(){\n    \n    htmlEditorEl = CodeMirror.fromTextArea(htmlEl,{mode:\"text/html\",theme:'material'})\n    \n    htmlEditorEl.on(\"change\",handleHTMLChange);\n    htmlEditorEl.doc.setValue(initValue.htmlValue)\n    \n    jsEditorEl = CodeMirror.fromTextArea(jsEl,{mode:\"javascript\",theme:'material'})\n    \n    jsEditorEl.on(\"change\",saveAndRender);\n    jsEditorEl.doc.setValue(initValue.jsValue)\n    \n    cssEditorEl = CodeMirror.fromTextArea(cssEl,{mode:\"css\",theme:'material'})\n    \n    cssEditorEl.on(\"change\",handleCSSChange);\n    cssEditorEl.doc.setValue(initValue.cssValue)\n}\n\nconst renderPage = () => {\n    const html = getHTML(),\n    js = getJS(),\n    css = getCSS();\n\n    createFrame({html,js,css})\n\n}\n\nconst handleHTMLChange = function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n}\n\nconst handleJSChange = function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n}\n\nconst handleCSSChange = function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n}\n\nconst saveAndRender = debounce(function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n},3000)\n\nconst getHTML = function(){\n    return htmlEl.value;\n}\n\nconst getJS = function(){\n    return jsEl.value;\n}\n\nconst getCSS = function(){\n    return cssEl.value;\n}\n\n\nmodule.exports = {\n    createEditor,\n    renderPage\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oYW5kbGVDaGFuZ2UuanM/ZGVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVGcmFtZSA9IHJlcXVpcmUoJy4vY3JlYXRlSUZyYW1lJykuY3JlYXRlRnJhbWU7XG5jb25zdCBpbml0VmFsdWUgPSByZXF1aXJlKCcuL2luaXRWYWx1ZScpO1xuY29uc3Qge2RlYm91bmNlfSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKTtcblxubGV0IGpzRWRpdG9yRWwsY3NzRWRpdG9yRWwsaHRtbEVkaXRvckVsXG5cbmNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHRtbENvbnRlbnRcIiksXG4gICAganNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc0NvbnRlbnQnKSxcbiAgICBjc3NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3NDb250ZW50Jyk7XG5cbmNvbnN0IGNyZWF0ZUVkaXRvciA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgaHRtbEVkaXRvckVsID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoaHRtbEVsLHttb2RlOlwidGV4dC9odG1sXCIsdGhlbWU6J21hdGVyaWFsJ30pXG4gICAgXG4gICAgaHRtbEVkaXRvckVsLm9uKFwiY2hhbmdlXCIsaGFuZGxlSFRNTENoYW5nZSk7XG4gICAgaHRtbEVkaXRvckVsLmRvYy5zZXRWYWx1ZShpbml0VmFsdWUuaHRtbFZhbHVlKVxuICAgIFxuICAgIGpzRWRpdG9yRWwgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShqc0VsLHttb2RlOlwiamF2YXNjcmlwdFwiLHRoZW1lOidtYXRlcmlhbCd9KVxuICAgIFxuICAgIGpzRWRpdG9yRWwub24oXCJjaGFuZ2VcIixzYXZlQW5kUmVuZGVyKTtcbiAgICBqc0VkaXRvckVsLmRvYy5zZXRWYWx1ZShpbml0VmFsdWUuanNWYWx1ZSlcbiAgICBcbiAgICBjc3NFZGl0b3JFbCA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGNzc0VsLHttb2RlOlwiY3NzXCIsdGhlbWU6J21hdGVyaWFsJ30pXG4gICAgXG4gICAgY3NzRWRpdG9yRWwub24oXCJjaGFuZ2VcIixoYW5kbGVDU1NDaGFuZ2UpO1xuICAgIGNzc0VkaXRvckVsLmRvYy5zZXRWYWx1ZShpbml0VmFsdWUuY3NzVmFsdWUpXG59XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IGdldEhUTUwoKSxcbiAgICBqcyA9IGdldEpTKCksXG4gICAgY3NzID0gZ2V0Q1NTKCk7XG5cbiAgICBjcmVhdGVGcmFtZSh7aHRtbCxqcyxjc3N9KVxuXG59XG5cbmNvbnN0IGhhbmRsZUhUTUxDaGFuZ2UgPSBmdW5jdGlvbihlbCx7ZnJvbSwgdG8sIHRleHQsIHJlbW92ZWQsIG9yaWdpbn0pe1xuICAgIGVsLnNhdmUoKVxuICAgIHJlbmRlclBhZ2UoKVxufVxuXG5jb25zdCBoYW5kbGVKU0NoYW5nZSA9IGZ1bmN0aW9uKGVsLHtmcm9tLCB0bywgdGV4dCwgcmVtb3ZlZCwgb3JpZ2lufSl7XG4gICAgZWwuc2F2ZSgpXG4gICAgcmVuZGVyUGFnZSgpXG59XG5cbmNvbnN0IGhhbmRsZUNTU0NoYW5nZSA9IGZ1bmN0aW9uKGVsLHtmcm9tLCB0bywgdGV4dCwgcmVtb3ZlZCwgb3JpZ2lufSl7XG4gICAgZWwuc2F2ZSgpXG4gICAgcmVuZGVyUGFnZSgpXG59XG5cbmNvbnN0IHNhdmVBbmRSZW5kZXIgPSBkZWJvdW5jZShmdW5jdGlvbihlbCx7ZnJvbSwgdG8sIHRleHQsIHJlbW92ZWQsIG9yaWdpbn0pe1xuICAgIGVsLnNhdmUoKVxuICAgIHJlbmRlclBhZ2UoKVxufSwzMDAwKVxuXG5jb25zdCBnZXRIVE1MID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gaHRtbEVsLnZhbHVlO1xufVxuXG5jb25zdCBnZXRKUyA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGpzRWwudmFsdWU7XG59XG5cbmNvbnN0IGdldENTUyA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGNzc0VsLnZhbHVlO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZUVkaXRvcixcbiAgICByZW5kZXJQYWdlXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGFuZGxlQ2hhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("let frameEl;\nlet createFrame = function ({html,js,css}){\n    // memoize frame element\n    if(frameEl){\n        frameEl.remove()\n    }\n    frameEl = document.createElement('iframe')\n    const el = document.querySelector(\"#root\")\n    frameEl.setAttribute(\"id\",\"iframe\")\n    frameEl.setAttribute(\"class\",\"output\")    \n    el.appendChild(frameEl)\n    const doc = document.querySelector('#iframe').contentWindow.document\n    const head = doc.querySelector(\"head\")\n    doc.body.innerHTML = html;\n    head.appendChild(createEl('script',js))\n    head.appendChild(createEl('style',css))\n}\n\nlet createEl = function(type,innerhtml){\n    const el = document.createElement(type)\n    el.innerHTML = innerhtml\n    return el;\n}\n\nmodule.exports = {\n    createFrame\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jcmVhdGVJRnJhbWUuanM/MjgxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZnJhbWVFbDtcbmxldCBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uICh7aHRtbCxqcyxjc3N9KXtcbiAgICAvLyBtZW1vaXplIGZyYW1lIGVsZW1lbnRcbiAgICBpZihmcmFtZUVsKXtcbiAgICAgICAgZnJhbWVFbC5yZW1vdmUoKVxuICAgIH1cbiAgICBmcmFtZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKVxuICAgIGZyYW1lRWwuc2V0QXR0cmlidXRlKFwiaWRcIixcImlmcmFtZVwiKVxuICAgIGZyYW1lRWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm91dHB1dFwiKSAgICBcbiAgICBlbC5hcHBlbmRDaGlsZChmcmFtZUVsKVxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZnJhbWUnKS5jb250ZW50V2luZG93LmRvY3VtZW50XG4gICAgY29uc3QgaGVhZCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKVxuICAgIGRvYy5ib2R5LmlubmVySFRNTCA9IGh0bWw7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChjcmVhdGVFbCgnc2NyaXB0JyxqcykpXG4gICAgaGVhZC5hcHBlbmRDaGlsZChjcmVhdGVFbCgnc3R5bGUnLGNzcykpXG59XG5cbmxldCBjcmVhdGVFbCA9IGZ1bmN0aW9uKHR5cGUsaW5uZXJodG1sKXtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBlbC5pbm5lckhUTUwgPSBpbm5lcmh0bWxcbiAgICByZXR1cm4gZWw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZUZyYW1lXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3JlYXRlSUZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = {\n    htmlValue : `<html>\n    <head>\n    </head>\n    <body>\n        <h1>Hello</h1>\n    </body>\n</html>`,\n    jsValue : `function hello(){\n    alert(\"Hello\")\n}`,\n    cssValue : `h1{\n    color : gray;\n}`\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbml0VmFsdWUuanM/MzU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBodG1sVmFsdWUgOiBgPGh0bWw+XG4gICAgPGhlYWQ+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgICA8aDE+SGVsbG88L2gxPlxuICAgIDwvYm9keT5cbjwvaHRtbD5gLFxuICAgIGpzVmFsdWUgOiBgZnVuY3Rpb24gaGVsbG8oKXtcbiAgICBhbGVydChcIkhlbGxvXCIpXG59YCxcbiAgICBjc3NWYWx1ZSA6IGBoMXtcbiAgICBjb2xvciA6IGdyYXk7XG59YFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luaXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("let debounce = function(func,timeout){\n  let debounced = false;\n  return function(){\n   let args = arguments;\n    if(!debounced){\n      debounced = true;\n      setTimeout(function(){\n        func.apply(undefined,args)\n        debounced = false;\n      },timeout)\n    }\n  }\n\n}\n\n\nmodule.exports = {\n    debounce\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWJvdW5jZS5qcz9kZmExIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsdGltZW91dCl7XG4gIGxldCBkZWJvdW5jZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZighZGVib3VuY2VkKXtcbiAgICAgIGRlYm91bmNlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGZ1bmMuYXBwbHkodW5kZWZpbmVkLGFyZ3MpXG4gICAgICAgIGRlYm91bmNlZCA9IGZhbHNlO1xuICAgICAgfSx0aW1lb3V0KVxuICAgIH1cbiAgfVxuXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVib3VuY2Vcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: './dist/bundle.js'\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnBhY2sucHJvZC5qcz8wMjJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeTogJy4vc3JjL2luZGV4LmpzJyxcbiAgb3V0cHV0OiB7XG4gICAgZmlsZW5hbWU6ICcuL2Rpc3QvYnVuZGxlLmpzJ1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93ZWJwYWNrLnByb2QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);