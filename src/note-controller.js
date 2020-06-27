
(function (exports) {

    function NoteController(Notelist) {
        this.noteListModel = Notelist;
        this.noteListModel.addNote('It is FRIDAY');

        this.view = new NoteListView(this.noteListModel)
    }

    NoteController.prototype.getHTML = function () {
        var ele = document.getElementById('app')
            ele.innerHTML = this.view.returnHTML();
    }

    exports.NoteController = NoteController;
})(this);


    window.addEventListener('DOMContentLoaded', function(event){
        var list = new NoteList();
        var controller = new NoteController(list);
        controller.getHTML();

    window.addEventListener("hashchange", function(event) {
        var id = window.location.hash.split('#')[1]
        var note = controller.noteListModel.returnNote()[id]
        var singleNoteView = new SingleNoteView(note)
        var html = singleNoteView.returnView()
        this.document.getElementById('app').innerHTML = html
    })
    });
