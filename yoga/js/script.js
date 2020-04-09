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

//Slider

let sliderIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');


showSlides(1);
    
function showSlides(n) {

    if (n > slides.length) {
        sliderIndex = 1;
    };

    if (n < 1) {
        sliderIndex = slides.length;
    };

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((dot) => dot.classList.remove('dot-active'));
    
    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].classList.add('dot-active');
};

function plusSlides(n) {
    showSlides(sliderIndex += n);
};

function currentSlide(n) {
    showSlides(sliderIndex = n);
};

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

dotsWrap.addEventListener('click', function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
        const dot = dots[i];
        if (e.target.classList.contains('dot') && 
            e.target === dots[i - 1]) {
                currentSlide(i);
        }
    }
});

//Calc

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value === '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value === '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});


place.addEventListener('change', function() {
    if(persons.value === '' || restDays.value === '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});


localStorage.setItem('number', 1);