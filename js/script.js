/* Gallery Section */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {
        inDuration: 275,
        outDuration: 200,
    });
});