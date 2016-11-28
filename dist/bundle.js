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
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("const handleJS = __webpack_require__(2);\nhandleJS.createEditor()\nhandleJS.addRunHandler()\nhandleJS.renderPage()//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhbmRsZUpTID0gcmVxdWlyZSgnLi9oYW5kbGVDaGFuZ2UnKTtcbmhhbmRsZUpTLmNyZWF0ZUVkaXRvcigpXG5oYW5kbGVKUy5hZGRSdW5IYW5kbGVyKClcbmhhbmRsZUpTLnJlbmRlclBhZ2UoKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("const createFrame = __webpack_require__(3).createFrame;\nconst initValue = __webpack_require__(4);\n\nlet jsEditorEl,cssEditorEl,htmlEditorEl\n\nconst htmlEl = document.querySelector(\"#htmlContent\"),\n    jsEl = document.querySelector('#jsContent'),\n    cssEl = document.querySelector('#cssContent');\n\nconst createEditor = function(){\n    \n    htmlEditorEl = CodeMirror.fromTextArea(htmlEl,{mode:\"text/html\",theme:'material'})\n    \n    htmlEditorEl.on(\"change\",handleHTMLChange);\n    htmlEditorEl.doc.setValue(initValue.htmlValue)\n    // htmlEditorEl.doc.save();\n    \n    jsEditorEl = CodeMirror.fromTextArea(jsEl,{mode:\"javascript\",theme:'material'})\n    \n    jsEditorEl.on(\"change\",handleJSChange);\n    jsEditorEl.doc.setValue(initValue.jsValue)\n    // htmlEditorEl.doc.save();\n    \n    cssEditorEl = CodeMirror.fromTextArea(cssEl,{mode:\"css\",theme:'material'})\n    \n    cssEditorEl.on(\"change\",handleCSSChange);\n    cssEditorEl.doc.setValue(initValue.cssValue)\n    // htmlEditorEl.doc.save();\n}\n\nconst addRunHandler = function(){\n    // const runBtn = document.querySelector(\"#runBtn\")\n    // runBtn.addEventListener(\"click\",renderPage);\n}\n\nconst renderPage = () => {\n    // if(evt){\n    //     evt.stopPropagation()\n    //     evt.preventDefault()\n    // }\n    const html = getHTML(),\n    js = getJS(),\n    css = getCSS();\n\n    createFrame({html,js,css})\n\n}\n\nconst handleHTMLChange = function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n}\n\nconst handleJSChange = function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n}\n\nconst handleCSSChange = function(el,{from, to, text, removed, origin}){\n    el.save()\n    renderPage()\n}\n\nconst getHTML = function(){\n    return htmlEl.value;\n}\n\nconst getJS = function(){\n    return jsEl.value;\n}\n\nconst getCSS = function(){\n    return cssEl.value;\n}\n\n\nmodule.exports = {\n    addRunHandler,\n    createEditor,\n    renderPage\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oYW5kbGVDaGFuZ2UuanM/ZGVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVGcmFtZSA9IHJlcXVpcmUoJy4vY3JlYXRlSUZyYW1lJykuY3JlYXRlRnJhbWU7XG5jb25zdCBpbml0VmFsdWUgPSByZXF1aXJlKCcuL2luaXRWYWx1ZScpO1xuXG5sZXQganNFZGl0b3JFbCxjc3NFZGl0b3JFbCxodG1sRWRpdG9yRWxcblxuY29uc3QgaHRtbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodG1sQ29udGVudFwiKSxcbiAgICBqc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzQ29udGVudCcpLFxuICAgIGNzc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nzc0NvbnRlbnQnKTtcblxuY29uc3QgY3JlYXRlRWRpdG9yID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBodG1sRWRpdG9yRWwgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShodG1sRWwse21vZGU6XCJ0ZXh0L2h0bWxcIix0aGVtZTonbWF0ZXJpYWwnfSlcbiAgICBcbiAgICBodG1sRWRpdG9yRWwub24oXCJjaGFuZ2VcIixoYW5kbGVIVE1MQ2hhbmdlKTtcbiAgICBodG1sRWRpdG9yRWwuZG9jLnNldFZhbHVlKGluaXRWYWx1ZS5odG1sVmFsdWUpXG4gICAgLy8gaHRtbEVkaXRvckVsLmRvYy5zYXZlKCk7XG4gICAgXG4gICAganNFZGl0b3JFbCA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGpzRWwse21vZGU6XCJqYXZhc2NyaXB0XCIsdGhlbWU6J21hdGVyaWFsJ30pXG4gICAgXG4gICAganNFZGl0b3JFbC5vbihcImNoYW5nZVwiLGhhbmRsZUpTQ2hhbmdlKTtcbiAgICBqc0VkaXRvckVsLmRvYy5zZXRWYWx1ZShpbml0VmFsdWUuanNWYWx1ZSlcbiAgICAvLyBodG1sRWRpdG9yRWwuZG9jLnNhdmUoKTtcbiAgICBcbiAgICBjc3NFZGl0b3JFbCA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGNzc0VsLHttb2RlOlwiY3NzXCIsdGhlbWU6J21hdGVyaWFsJ30pXG4gICAgXG4gICAgY3NzRWRpdG9yRWwub24oXCJjaGFuZ2VcIixoYW5kbGVDU1NDaGFuZ2UpO1xuICAgIGNzc0VkaXRvckVsLmRvYy5zZXRWYWx1ZShpbml0VmFsdWUuY3NzVmFsdWUpXG4gICAgLy8gaHRtbEVkaXRvckVsLmRvYy5zYXZlKCk7XG59XG5cbmNvbnN0IGFkZFJ1bkhhbmRsZXIgPSBmdW5jdGlvbigpe1xuICAgIC8vIGNvbnN0IHJ1bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcnVuQnRuXCIpXG4gICAgLy8gcnVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbmRlclBhZ2UpO1xufVxuXG5jb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIC8vIGlmKGV2dCl7XG4gICAgLy8gICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIC8vICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIC8vIH1cbiAgICBjb25zdCBodG1sID0gZ2V0SFRNTCgpLFxuICAgIGpzID0gZ2V0SlMoKSxcbiAgICBjc3MgPSBnZXRDU1MoKTtcblxuICAgIGNyZWF0ZUZyYW1lKHtodG1sLGpzLGNzc30pXG5cbn1cblxuY29uc3QgaGFuZGxlSFRNTENoYW5nZSA9IGZ1bmN0aW9uKGVsLHtmcm9tLCB0bywgdGV4dCwgcmVtb3ZlZCwgb3JpZ2lufSl7XG4gICAgZWwuc2F2ZSgpXG4gICAgcmVuZGVyUGFnZSgpXG59XG5cbmNvbnN0IGhhbmRsZUpTQ2hhbmdlID0gZnVuY3Rpb24oZWwse2Zyb20sIHRvLCB0ZXh0LCByZW1vdmVkLCBvcmlnaW59KXtcbiAgICBlbC5zYXZlKClcbiAgICByZW5kZXJQYWdlKClcbn1cblxuY29uc3QgaGFuZGxlQ1NTQ2hhbmdlID0gZnVuY3Rpb24oZWwse2Zyb20sIHRvLCB0ZXh0LCByZW1vdmVkLCBvcmlnaW59KXtcbiAgICBlbC5zYXZlKClcbiAgICByZW5kZXJQYWdlKClcbn1cblxuY29uc3QgZ2V0SFRNTCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGh0bWxFbC52YWx1ZTtcbn1cblxuY29uc3QgZ2V0SlMgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBqc0VsLnZhbHVlO1xufVxuXG5jb25zdCBnZXRDU1MgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBjc3NFbC52YWx1ZTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhZGRSdW5IYW5kbGVyLFxuICAgIGNyZWF0ZUVkaXRvcixcbiAgICByZW5kZXJQYWdlXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGFuZGxlQ2hhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

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

	eval("module.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: './dist/bundle.js'\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnBhY2sucHJvZC5qcz8wMjJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeTogJy4vc3JjL2luZGV4LmpzJyxcbiAgb3V0cHV0OiB7XG4gICAgZmlsZW5hbWU6ICcuL2Rpc3QvYnVuZGxlLmpzJ1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93ZWJwYWNrLnByb2QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);