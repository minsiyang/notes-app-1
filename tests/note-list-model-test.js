
function constructsWithAnEmptyArray() {
  let noteList = new NoteList();
  expect.isTrue(Array.isArray(noteList.notes));
}
constructsWithAnEmptyArray();

function canStoreNotesInNoteArray() {
  let noteList = new NoteList();
  noteList.addNote("note");
  expect.isTrue(noteList.notes[0] instanceof Note);
}
canStoreNotesInNoteArray();

function canReturnStoredNotesInNoteArray() {
  let noteList = new NoteList();
  noteList.addNote("note");
  noteList.addNote("anotherNote");
  expect.isTrue(noteList.returnNote().length === 2);
}
canReturnStoredNotesInNoteArray();

function StoresInstancesOfNoteWhenAddingNewNote() {
  let noteList = new NoteList();
  noteList.addNote("note");
  noteList.addNote("anotherNote");
  expect.isTrue(noteList.returnNote()[0].returnText() === "note");
  expect.isTrue(noteList.returnNote()[1].returnText() === "anotherNote");
}
StoresInstancesOfNoteWhenAddingNewNote();

function IdIncreaseWhenAddaNote() {
  let notelist = new NoteList();
      expect.isTrue(notelist.id === 0);
      notelist.addNote("anotherNote");
      console.log(note);
      expect.isTrue(notelist.id === 1);
}
IdIncreaseWhenAddaNote();
