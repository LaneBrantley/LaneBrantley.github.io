$(document).ready(function() {
    $("#toobin").click(function() {
        $.getJSON("json_files/toobin.json", function (data) {
            $.each(data, function() {
                $.each(this, function (key, value) {
                    $("#image").attr("src", value.image);
                    $("#month").html(value.month);
                    $("#speaker").html(value.speaker);
                    $("#title").html(value.title);
                    $("#text").html(value.text);
                })
            }) 
        }) 
    })
    $("#chua").click(function() {
        $.getJSON("json_files/chua.json", function (data) {
            $.each(data, function() {
                $.each(this, function (key, value) {
                    $("#image").attr("src", value.image);
                    $("#month").html(value.month);
                    $("#speaker").html(value.speaker);
                    $("#title").html(value.title);
                    $("#text").html(value.text);
                })
            }) 
        }) 
    })
    $("#sampson").click(function() {
        $.getJSON("json_files/sampson.json", function (data) {
            $.each(data, function() {
                $.each(this, function (key, value) {
                    $("#image").attr("src", value.image);
                    $("#month").html(value.month);
                    $("#speaker").html(value.speaker);
                    $("#title").html(value.title);
                    $("#text").html(value.text);
                })
            }) 
        }) 
    })
    $("#sorkin").click(function() {
        $.getJSON("json_files/sorkin.json", function (data) {
            $.each(data, function() {
                $.each(this, function (key, value) {
                    $("#image").attr("src", value.image);
                    $("#month").html(value.month);
                    $("#speaker").html(value.speaker);
                    $("#title").html(value.title);
                    $("#text").html(value.text);
                });
            })
        }) 
    })
});

