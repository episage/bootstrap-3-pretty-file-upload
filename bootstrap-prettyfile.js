// Pretty file
if ($('.prettyFile').length) {
    $('.prettyFile').each(function () {
        var pF = $(this),
            fileInput = pF.find('input[type="file"]');

        fileInput.change(function () {
            // When original file input changes, get its value, show it in the fake input
            var files = fileInput[0].files,
                info = '';
            if (files.length > 1) {
                // Display number of selected files instead of filenames
                info = files.length + ' files selected';
            } else {
                // Display filename (without fake path)
                var path = fileInput.val().split('\\');
                info = path[path.length - 1];
            }

            pF.find('.input-append input').val(info);
        });

        pF.find('.input-append').click(function (e) {
            e.preventDefault();
            // Make as the real input was clicked
            fileInput.click();
        })
    });
}