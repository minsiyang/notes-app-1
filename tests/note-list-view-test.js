
function constructsWithAnNoteListModel() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue(view.frame instanceof NoteList);
}
constructsWithAnNoteListModel();

function returnHTMLStringNoNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue(view.returnHTML() === "<ul><li><div></div></li></ul>")
}
returnHTMLStringNoNote();

function returnHTMLStringOneNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    expect.isTrue(view.returnHTML() === "<ul><li><div>Rae</div></li></ul>")
}
returnHTMLStringOneNote();

function returnHTMLStringSeveralNotes() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    list.addNote("Minsi");
    var string = "<ul><li><div>Rae</div></li><li><div>Minsi</div></li></ul>"
    expect.isTrue(view.returnHTML() === string)
}
returnHTMLStringSeveralNotes();

function returnHTMLStringWithin20Char() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("This is an awesome test for some long string");
    expect.isTrue(view.returnHTML() === "<ul><li><div>This is an awesome t</div></li></ul>")
   
}
returnHTMLStringWithin20Char();
