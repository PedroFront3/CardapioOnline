$(function () {

    verificarCliqueMenu();

    function verificarCliqueMenu() {

        $('a').click(function () {

            var href = $(this).attr('href');

            $.ajax({

                'url': href,

                'success': function (data) {
                    $('#container').html(data);
                }
            });

            return false;
        });
    }

});
