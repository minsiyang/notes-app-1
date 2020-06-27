
(function (exports) {
    function NoteListView(notelist) {
        this.frame = notelist;
    }

    NoteListView.prototype.returnHTML = function () {
        var array = this.frame.returnNote()
        var string = '<ul>'
        array.forEach(function(note) {
            string += `<a href='#${note.id}'><li><div>${note.returnText().substring(0, 20)}</div></li></a>`
    
        });
        return string += `</ul>`
    }
    exports.NoteListView = NoteListView;
})(this);

