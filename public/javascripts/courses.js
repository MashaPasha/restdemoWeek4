
$(function ready() {

    $.getJSON("/api/courses", function (data) {
        data.forEach(function (item) {
            $('#courses').append('<tr><td>' + item.title + '</td><td>' + item.courseNo + '</td></tr>');
        });
    });

});



