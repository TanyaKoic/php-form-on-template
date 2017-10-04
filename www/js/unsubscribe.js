$(function () {

    var forms = $('form.form-unsubscribe');

    var setError = function (field) {
        var target;
        target = (field == "Email") ? $('#SubscriberEmail') : form.find('#' + field);

        target.addClass('error');
    };

    // Init redirection from main form.

    for (var i = 0; i < forms.length; i++) {
        var form = $(forms[i]);

        var submitBtn = form.find('a.btn'),
            submitHandler = function () {
                var form = $(this).closest('form'),
                    targetUrl = lmpost.urls.supportUrl,
                    options = lmpost.options,
                    hitID = options.hituid;

                if (form.valid()) {
                    $('<div class="processmsg"><p>Please wait. Your data is being processed...</p></div>').insertBefore(form);
                    form.hide();
                    $('div.svcerrormsg').hide();

                    var inputCtrl = form.find('input'),
                        name = inputCtrl.attr('name'),
                        val = inputCtrl.val(),
                        name = name.replace('Subscriber', '');



                    $.ajax(
                        {
                            url: targetUrl + '?action=unsubscribe1&responsetype=json&uid=' + hitID + '&clienturl=' + escape(location.href) + '&field=' + name + '&value=' + val,
                            type: 'get',
                            dataType: 'jsonp',
                            success: function (data) {
                                if (data && data.Result < 2) {
                                    $('div.thakyoumsg').show();
                                    $('div.svcerrormsg').hide();
                                }
                                else {
                                    form.show();
                                    $('div.svcerrormsg').show();
                                    if (data && data.Errors && data.Errors.length) {
                                        $.each(data.Errors, function (index, value) {
                                                value.Field && setError(value.Field);
                                            }
                                        );
                                    } //if
                                    lmpost.blinkErrorElements(form);
                                }


                                $('div.processmsg').remove();
                            },

                            error: function () {
                                form.show();
                                $('div.svcerrormsg').show();
                                $('div.processmsg').remove();
                            }
                        }
                    );
                }
                else {
                    lmpost.blinkErrorElements(form);
                }

                return false;
            };

        submitBtn.on('click', submitHandler);
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS, "i");
            var results = regex.exec(window.location.search);
            if (results != null) {
                return decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            return null;
        }

        var email = getParameterByName('email'),
            muid = getParameterByName('msguid');
        if (email) {
            $('#SubscriberEmail').val(email);
            function autoSubmit() {
                if (lmpost.options && lmpost.options.hituid)
                    submitBtn.click();
                else
                    window.setTimeout(autoSubmit, 1500);
            }
            if (muid)
                autoSubmit();
        }
    }


    lmpost.registerHit();

    form.validate({
        rules: {
            SubscriberEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            SubscriberEmail: "Please enter a valid email address"
        }
    });
});
