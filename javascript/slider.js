console.log("slider rodando");

let items = document.querySelectorAll('.slider .carreira_card');
let active = 0;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    updateBullets();
}

loadShow();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
};

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
};

function updateBullets() {
    const bulletsContainer = document.querySelector('.bullets');
    bulletsContainer.innerHTML = '';

    items.forEach((item, index) => {
        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        if (index === active) {
            bullet.classList.add('active');
        }
        bullet.addEventListener('click', () => {
            active = index;
            loadShow();
        });
        bulletsContainer.appendChild(bullet);
    });
}