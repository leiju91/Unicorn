import('./common');

import '../scss/admin.scss';

var $ = require( 'jquery' );
require( 'datatables.net-bs4' )( $ );


$(document).ready( function () {
    console.log("test");
    $('#event-table').DataTable();
} );