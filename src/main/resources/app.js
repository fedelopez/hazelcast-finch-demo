

var requestStream = Rx.Observable.just('http://192.168.40.18:8080/cases/1');

var responseStream = requestStream.flatMap(function (requestUrl) {
            return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
        }
);

responseStream.subscribe(function (response) {
    console.log("Response: " + response);
    var users = Rx.Observable.from(response).take(3);
    var index = 0;
    users.subscribe(function (user) {
        console.log(user);
        renderCase(user, ".suggestion" + ++index)
    });
});

function renderCase(caseName, selector) {
    var element = document.querySelector(selector);
    var usernameEl = element.querySelector('.casename');
    usernameEl.textContent = caseName;
}
