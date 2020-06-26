
function constructingWithTheGivenStringAndId() {
  let string = "My favorite language is JavaScript.";
  let note = new Note(string, 0); 
  expect.isTrue(note.text === string);
  expect.isTrue(note.id === 0);
}
constructingWithTheGivenStringAndId();

function hasMethodToReturnText() {
  //this is it part of the describe/it
  let string = "Chris's idea!!";
  let note = new Note(string);
  expect.isTrue(note.returnText() === string);
}
hasMethodToReturnText();


function returnNoteID() {
  let string = "Chris's idea!!";
  let note = new Note(string, 0);
  expect.isTrue(note.returnID() === 0);
}
returnNoteID();