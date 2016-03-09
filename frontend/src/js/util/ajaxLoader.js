/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 2/25/16.
 */

;(function () {
    'use strict';

    //spinner while making asynchronous calls
    var ajaxLoader = {
        show: function () {
            document.getElementsByClassName('ajax-loader')[0].style.visibility = 'visible';
        },

        hide: function () {
            document.getElementsByClassName('ajax-loader')[0].style.visibility = 'hidden';
        }
    }

    module.exports = ajaxLoader;
})();