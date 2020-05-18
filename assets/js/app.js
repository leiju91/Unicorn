import('./common');
import $ from 'jquery';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../scss/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
import('./home');
import('./event');

// Search
/*const search = document.querySelector('.search > input[type="text"]');
const result = document.querySelector('.search > .search-result');

search.addEventListener('focus', (event) => {
    event.currentTarget.addEventListener('keyup', (event) => {
        const q = event.currentTarget.value;
        if(q.length >= 2) {

            $.ajax({
                type: "POST",
                url: "/fr/event/search",
                data: {q: q},
                success: function(data) {
                    result.innerHTML = null;
                    data.forEach(event => {
                        let a = document.createElement('a');
                        a.setAttribute('href', event.url);
                        a.innerHTML = event.title + ' <span style="font-weight: bold">'+ event.category +'</span>';
                        a.style.color = 'white';
                        a.style.backgroundColor = 'red';
                        a.style.textAlign = 'left';
                        a.style.display = 'block';
                        a.style.padding = '10px 20px';
                        a.style.width = '100%';
                        result.appendChild(a);
                    });
                },
                dataType: "json"
            });
        } else {
            result.innerHTML = null;
        }
    });
});*/

$('.search > input[type="text"]').on('focus', function (e) {
    e.preventDefault();

    $(this).on('keyup', function (e) {
        e.preventDefault();
        let q = $(this).val();

        if (q.length >= 2) {
            $.ajax({
                type: "POST",
                url: "/fr/event/search",
                data: { q: q },
                success: function (data) {
                    $('.search-result').html(null);

                    $.each(data, function (i, event) {
                        console.log(event);
                        $('.search-result')
                            .append('<a href="'
                                + event.url
                                + '" style="color:white;background-color:red;display:block;padding:10px 20px;width: 100%;">'
                                + event.title
                                + ' <span>'
                                + event.category
                                + '</span></a>');
                    });
                },
                dataType: "json"
            });
        } else {
            $('.search-result').html(null);
        }
    });
});


