$(document).foundation();

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'maxHeight': 800,
    'albumLabel': "Image %1 sur %2"
})

$(function() {
    var container = $("#includedContent");

    if(window.location.hash) {

        var categorie = window.location.hash.substring(1);
        $( 'a.selected' ).toggleClass('selected');
        $('a[data-categorie="'+categorie+'"]').toggleClass('selected');

        container.load(categorie+".html", function () {
            container.fadeIn('slow');
        });
    } else {
        container.load("edition.html");
    }

    $('#menuTravaux').on('click','a', function(event){
        event.preventDefault();

        $( 'a.selected' ).toggleClass('selected');
        $( this ).toggleClass('selected');

        var categorie = $( this ).data('categorie');

        container.fadeOut('slow', function () {
            container.load(categorie+".html", function () {
                container.fadeIn('slow');
            });
        })
    })
});