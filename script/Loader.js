(function(){
    var restApi = "http://jsonplaceholder.typicode.com";
    $.ajax({
        url: restApi + '/albums',
        method: 'GET'
    }).then (function(albums) {
        for (var album = 0; album < albums.length; album++) {
            $("<div>").attr("id", album + 1)
                .append(albums[album].title).appendTo("#Albums");
        }
        $("#Albums > div").click(function() {
            $("#Albums > div").css("background-color", "white");
            $(this).css("background-color", "lightgray");
            var currentAlbum = this;
            $.ajax({
                url: restApi + '/photos',
                method: 'GET'
            }).then(function(photos) {
                $("#Photos").empty();
                for (var photo = 0; photo < photos.length; photo++) {
                    if (photos[photo].albumId == currentAlbum.id) {
                        $("<img>").attr("src", photos[photo].url)
                            .appendTo("#Photos");
                    }
                }
            })
        })
    })
})();