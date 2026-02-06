/** following probunny code */
function onSubmit() {
    // Check reCAPTCHA status
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        // reCaptcha not verified
        alert("Please complete the CAPTCHA");
        return false;
    } else {
        document.getElementById('contact-form').submit();
        return true;
    }
}

//function renderRecaptcha() {
//    grecaptcha.render('divRecaptcha', {
//        // 'sitekey': '6LelmJ4pAAAAAJw7XktvwuUAe9ErllgFdv_sAVPM',
//        'sitekey': '6LcmFaYpAAAAAKMEJDQDZfSU6zRRmCStrxixHl86',
//        // 'callback' : 'successCallback', // for testing on postman
//        'theme': 'light'
//    });
//}

//function onSubmit(token) {
//  // Check reCAPTCHA status
//  var response = grecaptcha.getResponse();
//  if (response.length == 0) {
//      // reCaptcha not verified
//      alert("Please complete the CAPTCHA");
//      return false;
//  } else {
//    document.getElementById('contact-form').submit();
//    return true;
//  }
//}

//function onloadCallback() {
//  //  console.log('reCAPTCHA API loaded');
//}

//// function successCallback(token) { // for testing on postman
////    console.log('reCAPTCHA verification successful');
////   debugger;
//// }

//// Callback function to handle reCAPTCHA completion
//function onReCaptchaCompleted(response) {
//  renderRecaptcha();
//  console.log("reCAPTCHA response token:", response);
//}

//window.onload = function() {
//  onloadCallback();
//  renderRecaptcha();
//};
