(function() {

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >=0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
    }

    var items = document.querySelectorAll('.timeline li');


    function addInView () {
        var test = "test";
         for (var i = 0; i < items.length; i++) {
            //console.log('Element ' + i + items[i] + ' in viewport?: ' + isElementInViewport(items[i]));
            if(isElementInViewport(items[i])) {
                items[i].classList.add('in-view');
            }
         }
    }

    window.addEventListener('load', addInView);
    window.addEventListener('scroll', addInView);

})();