(function (exports) {
  function NoteList() {
    this.notes = [];
    this.counter = 0;
  }

  NoteList.prototype.addNote = function (note, counter=this.counter) {
    this.notes.push(new Note(note, counter));
    this.counter ++
  };

  NoteList.prototype.returnNote = function () {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);
