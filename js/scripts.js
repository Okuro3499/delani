$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function() {
        $("#design").slideUp('1500').hide('1000');
        $("#design-image").show('1500');
    });
});

$(document).ready(function() {
    $("#dev-image").click(function() {
        $("#dev-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function() {
        $("#development").slideUp('1500').hide('1000');
        $("#dev-image").show('1500');
    });
});

$(document).ready(function() {
    $("#product-image").click(function() {
        $("#product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function() {
        $("#product").slideUp('1500').hide('1000');
        $("#product-image").show('1500');
    });
});