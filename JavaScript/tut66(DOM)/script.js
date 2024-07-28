console.log("Hello World")

document.body.hasChildNodes(0)
true
document.body.childNodes(0)

document.body.childNodes
NodeList(12) [text, div.cont, text, div.liner-scroll-points-container, style.L-GoogleBookmarkOptOut, style.L-GooglePBLOptOut, style.L-YoutubeBookmarkOptOut, style.L-YoutubeHighlightOptOut, style.L-YoutubePBLOptOut, style.L-PDFCopilotOptOut, div.LImageHighlighter.LImageHighlighter__optOut, style.L-V6]
document.body.childNodes[0]
document.body.childNodes[1]
<div class=​"cont">​…​</div>​
document.body.lastChild
<style type=​"text/​css" class=​"L-V6">​…​</style>​

let cont = document.body.childNodes[1]
undefined
cont.lastElementChild
<script src=​"script.js">​</script>​
cont.firstElementChild
<div class=​"box">​Box1​</div>​
cont.lastElementChild.style.backgroundColor = "red"
'red'
cont.firstElementChild.style.backgroundColor = "red"
'red'
cont.lastElementChild.parentElement
<div class=​"cont">​…​</div>​
cont.lastElementChild.parentElement.style.backgroundColor = "green"
<div class=​"cont">​…​</div>​
VM910:2 Uncaught SyntaxError: Unexpected token 'class'
document.body.firstElementChild.childNodes


NodeList(13) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text, script, text]
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
document.body.firstElementChild.firstElementChild
<div class=​"box" style=​"background-color:​ red;​">​Box1​</div>​
document.body.firstElementChild.children
HTMLCollection(6) [div.box, div.box, div.box, div.box, div.box, script]