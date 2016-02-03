(function (window, undefined) {

    function initialize() {
        var textInput = document.querySelector('#textInput');
        Rx.DOM.keyup(textInput).pluck('target', 'value').debounce(500).subscribe(function (x) {
            renderCaseNames(x, "cases");
        });
        var tagInput = document.querySelector('#tagInput');
        Rx.DOM.keyup(tagInput).pluck('target', 'value').debounce(500).subscribe(function (x) {
            renderCaseNames(x, "cases_by_tag");
        });
    }

    function renderCaseNames(from, endpoint) {
        var requestStream = Rx.Observable.just("http://localhost:8080/" + endpoint + "/" + from);
        var responseStream = requestStream.flatMap(function (requestUrl) {
                    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
                }
        );

        responseStream.subscribe(function (response) {
            var element = $("ul");
            element.empty();
            var users = Rx.Observable.from(response);
            users.subscribe(function (caseName) {
                var html = "<li class=\"suggestion\"><a href=\"#\" onClick=\"displayCase('" + caseName + "');\" class=\"casename\">" + caseName + "</a></li>";
                element.append(html);
            });
        });
    }

    Rx.DOM.ready().subscribe(initialize);

}(window));

function displayCase(caseName) {
    console.log("Case: " + caseName);
}