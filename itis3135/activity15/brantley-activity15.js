$(document).ready(function(){
    $.getJSON("facultyList.json", function (data) {
        $.each(data, function() {
            $.each(this,function (key, value) {
                $("#faculty").append(
                    '<img src="' + value.image + '"><br>' +
                    '<h2>' + value.full_name + '</h2><br>' +
                    '<h3>' + value.department + '</h3><br>' +
                    '<p>' + value.bio + '</p>'
                )
            })
        })
    })
});
