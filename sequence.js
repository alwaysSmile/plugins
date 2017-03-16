(function () {
    var elementAnim = document.getElementsByClassName('news-list')[0];
    var item = elementAnim.getElementsByClassName('news-item');

    function sequence(sec, mS) {
        for (var i = 0; i < item.length; i++) {
            var millisecond = i * mS
            item[i].setAttribute('style', 'transition: ' + sec + 's ease ' + millisecond + 's')
        }
        elementAnim.classList.add('animate-items')
    };

    function sequenceReverse(sec, mS) {
        for (var i = 0; i < item.length; i++) {
            var millisecond = ((item.length - 1) - i) * mS
            item[i].setAttribute('style', 'transition: ' + sec + 's ease ' + millisecond + 's')
        }
        elementAnim.classList.remove('animate-items')
    };

    sequence(1.2, 0.15);

    var bCl = document.getElementsByClassName('flex-elements__content')[0].getElementsByTagName("h1")[0];
    bCl.onclick = function () {
        sequenceReverse(1.2, 0.15);
    }
})();