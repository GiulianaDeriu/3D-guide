function setCssVariables(obj) {
    document.documentElement.style.setProperty(`--${obj.dataset.var}`, obj.value + obj.dataset.unit);
}

function setActive(obj) {

    document.querySelectorAll('input[type="range"]').forEach(e => {
        e.disabled = !obj.checked
    });
    document.documentElement.style.setProperty('--prespective', obj.checked ? (document.querySelector('.slider1 > input').value + 'px') : 'none');
}

function setAnimation(obj) {
    if (obj.checked) {
        document.querySelector('.cube').classList.add('animated')
    } else {
        document.querySelector('.cube').classList.remove('animated')
    }
}