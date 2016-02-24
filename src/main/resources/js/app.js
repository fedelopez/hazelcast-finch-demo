function initialize() {
    var textInput = document.querySelector('#textInput');
    Rx.DOM.keyup(textInput).pluck('target', 'value').debounce(500).subscribe(function (x) {
        renderCaseNames(x, "cases");
    });
    var tagInput = document.querySelector('#tagInput');
    Rx.DOM.keyup(tagInput).pluck('target', 'value').debounce(500).subscribe(function (x) {
        renderCaseNames(x, "cases/concept");
    });
}

function renderCaseNames(from, endpoint) {
    var responseStream = Rx.Observable.fromPromise(jQuery.getJSON("http://localhost:8080/" + endpoint + "/" + from));
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

var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("caseJSON"), {
    lineNumbers: true,
    indentWithTabs: true,
    readOnly: true,
    theme: 'dracula',
    mode: "application/json",
    matchBrackets: true,
    autoCloseBrackets: true,
    viewportMargin: Infinity
});

function displayCase(caseName) {
    var caseId = caseName.substring("case-".length, caseName.length);
    var responseStream = Rx.Observable.fromPromise(jQuery.getJSON("http://localhost:8080/case/" + caseId));
    responseStream.subscribe(function (response) {
        myCodeMirror.setValue(JSON.stringify(response, null, 4));
    });
}