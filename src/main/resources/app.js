;(function (window, undefined) {

    function initialize() {
        var textInput = document.querySelector('#textInput');
        var source = Rx.DOM.keyup(textInput)
                .pluck('target', 'value')
                .debounce(500);

        source.subscribe(function (x) {
            console.log('Next: ' + x);
            renderCaseNames(x);
        });
    }

    Rx.DOM.ready().subscribe(initialize);

    function renderCaseNames(from) {
        var requestStream = Rx.Observable.just('http://localhost:8080/cases/' + from);
        var responseStream = requestStream.flatMap(function (requestUrl) {
                    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
                }
        );

        responseStream.subscribe(function (response) {
            var element = $("ul");
            element.empty();
            var users = Rx.Observable.from(response);
            users.subscribe(function (caseName) {
                element.append('<li class="suggestion"><a href="#" target="_blank" class="casename">' + caseName + '</a></li>');
            });
        });
    }
}(window));
