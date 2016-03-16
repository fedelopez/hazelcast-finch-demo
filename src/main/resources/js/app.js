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

function renderCaseNames(caseName, endpoint) {
    var element = $("ul");
    if (!caseName) {
        element.empty();
    } else {
        var responseStream = Rx.Observable.fromPromise(jQuery.getJSON(endpoint + "/" + caseName));
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
}

function displayCase(caseName) {
    var caseId = caseName.substring("case-".length, caseName.length);
    var responseStream = Rx.Observable.fromPromise(jQuery.getJSON("case/" + caseId));
    responseStream.subscribe(function (response) {
        myCodeMirror.setValue(JSON.stringify(response, null, 4));
    });
}

function initialize() {
    var textInput = document.querySelector('#textInput');
    Rx.DOM.keyup(textInput).pluck('target', 'value').debounce(100).subscribe(function (value) {
        renderCaseNames(value, "cases");
    });
}

Rx.DOM.ready().subscribe(initialize);

var conceptInput = $('#conceptInput');
conceptInput.change(function () {
    renderCaseNames(this.value, "cases/concept");
});
