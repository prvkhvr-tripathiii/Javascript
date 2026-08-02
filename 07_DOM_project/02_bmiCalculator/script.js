const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const warning = document.querySelector('#warning')
    const container = document.querySelector('.container')

    results.style.color = 'rgb(241, 241, 241)';

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
        results.style.color = 'Red';
    } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
        results.style.color = 'Red';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is <span>${bmi}</span>`
        if (bmi > 30) {
            warning.innerHTML = 'You are a person with obesity.'
            container.style.backgroundColor = "Red";
        } else if (bmi > 25) {
            warning.innerHTML = 'You are overweight.'
            container.style.backgroundColor = "Orange";
        } else if (bmi > 20) {
            warning.innerHTML = 'You are fit.'
            container.style.backgroundColor = "Green";
        } else {
            warning.innerHTML = 'You are underweight.'
            container.style.backgroundColor = "Orange";
        }
    }
})
