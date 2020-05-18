import('./common');

import '../scss/admin.scss';

var $       = require( 'jquery' );
var dt      = require( 'datatables.net' )( window, $ );
var buttons = require( 'datatables.net-buttons' )( window, $ );

$(document).ready( function () {
    $('#event-id').DataTable();
} );