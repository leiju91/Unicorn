//impoter jquery
import $ from 'jquery';

import bsCustomFileInput from 'bs-custom-file-input';
$(document).ready(function () {
    bsCustomFileInput.init()
});

require('bootstrap');
let cache = document.getElementById("cache");
let cache1 = document.getElementById("cache1");


cache.onmouseover = aff;
function aff() {
    cache1.style.display = "block";
}
cache.onmouseout = cac;
function cac() {
    cache1.style.display = "none";
}
