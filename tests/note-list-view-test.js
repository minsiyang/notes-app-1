
function constructsWithAnNoteListModel() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue(view.frame instanceof NoteList);
}
constructsWithAnNoteListModel();

// function returnHTMLStringNoNote() {
//     let list = new NoteList();
//     let view = new NoteListView(list);
//     expect.isTrue(view.returnHTML() === `<ul><li><a href=""><div></div></a></li></ul>`)
// }
// returnHTMLStringNoNote();

function returnHTMLStringOneNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    expect.isTrue(view.returnHTML() === `<ul><a href='#0'><li><div>Rae</div></li></a></ul>`)
}
returnHTMLStringOneNote();

function returnHTMLStringSeveralNotes() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    list.addNote("Minsi");
    var string = `<ul><a href='#0'><li><div>Rae</div></li></a><a href='#1'><li><div>Minsi</div></li></a></ul>`
    expect.isTrue(view.returnHTML() === string)
}
returnHTMLStringSeveralNotes();

function returnHTMLStringWithin20Char() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("This is an awesome test for some long string");
    expect.isTrue(view.returnHTML() === `<ul><a href='#0'><li><div>This is an awesome t</div></li></a></ul>`)
   
}
returnHTMLStringWithin20Char();
