(function () {
    var names = [];
    var sorted = [];
    var curList = document.getElementsByClassName('current-list');

    function allLists(curList) {
        for (var i = 0; i < curList.length; i++) {
            var item = curList[i].getElementsByTagName('li');
            eachElementGet(item);
            sortSurname(names);
            eachElementPaste(sorted, item);
        }
    }

    function eachElementGet(item) {
        for (var i = 0; i < item.length; i++) {
            names[i] = item[i].innerHTML;
        }
    }

    function sortSurname(names) {
        sorted = names.sort();
    }


    function eachElementPaste(sorted, item) {
        for (var i = 0; i < item.length; i++) {
            item[i].innerHTML = sorted[i];
        }
    }

    allLists(curList);
})();
