$(document).ready(function() {
    $.getJSON("team.json", function (data) {
        $.each(data, function() {
            $.each(this, function (key, value) {
                $("#team").append(
                    "<strong>Name</strong>: " + value.name + "<br>" +
                    "<strong>Title</strong>: " + value.title + "<br>" +
                    "<strong>Bio</strong>: " + value.bio + "<br>"
                );
            });
        });
    });
});