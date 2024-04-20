$(function () {
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });

    $('#selectAnswer').on('change', function () {
        if (this.value == '0') {
            $("#shortAnswer").show();
            $("#paragraph").hide();
            $("#mChoice").hide();
            $("#checkBox").hide();
            $("#dropDownn").hide();
            $("#rSlider").hide();
        }
        else if (this.value == '1') {
            $("#shortAnswer").hide();
            $("#paragraph").show();
            $("#mChoice").hide();
            $("#checkBox").hide();
            $("#dropDownn").hide();
            $("#rSlider").hide();

        }
        else if (this.value == '2') {
            $("#shortAnswer").hide();
            $("#paragraph").hide();
            $("#mChoice").show();
            $("#checkBox").hide();
            $("#dropDownn").hide();
            $("#rSlider").hide();

        }
        else if (this.value == '3') {
            $("#shortAnswer").hide();
            $("#paragraph").hide();
            $("#mChoice").hide();
            $("#checkBox").show();
            $("#dropDownn").hide();
            $("#rSlider").hide();

        }
        else if (this.value == '4') {
            $("#shortAnswer").hide();
            $("#paragraph").hide();
            $("#mChoice").hide();
            $("#checkBox").hide();
            $("#dropDownn").show();
            $("#rSlider").hide();

        }
        else {
            $("#shortAnswer").hide();
            $("#paragraph").hide();
            $("#mChoice").hide();
            $("#checkBox").hide();
            $("#dropDownn").hide();
            $("#rSlider").show();

        }

    });
});


$('#file-upload').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

