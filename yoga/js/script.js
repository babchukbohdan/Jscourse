console.log('hello');

let reqest = new XMLHttpRequest();

reqest.open("GET", 'js/current.json');
reqest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
reqest.send();

reqest.addEventListener('readystatechange', function() {

    if (reqest.readyState === 4 && reqest.status === 200) {
        let data = JSON.parse(reqest.response);

        console.log(data.usd);
    }
});

let message = {
    loading: 'Загрузка',
    success: 'Спасибо',
    failure: 'Ошибка'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();

    request.open("POST", 'server.php');
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
    let formData = new FormData(form);
    window.a = formData;
    console.log(formData);

    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });

    console.log(obj);

    let json = JSON.stringify(obj);
    
    request.send(json);

    request.addEventListener('readystatechange', function() {

        if (reqest.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (reqest.readyState === 4 && reqest.status === 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});