
function noteControllerInstance() {
   let notelist = new NoteList();
   let controller = new NoteController(notelist);
   expect.isTrue(controller instanceof NoteController)
}

noteControllerInstance();

function checkInnerHTMLPropertyValue() {
   let notelist = new NoteList();
   let view = new NoteController(notelist); 
   view.getHTML(); 
   console.log(document.getElementById('app').innerHTML)
   let string = `<ul><a href="#0"><li><div>It is FRIDAY</div></li></a></ul>`
   expect.isTrue(document.getElementById('app').innerHTML === string)
}
checkInnerHTMLPropertyValue();


