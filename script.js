let userName;

let inputBox = document.getElementById('entry');
let submitButton = document.querySelector('button');

let agePred = document.getElementById('pred-age');
let genderPred = document.getElementById('pred-gender');


function getUserInput(event) {
    event.preventDefault();
    userName = inputBox.value;
    console.log(userName);

    agePred.innerHTML = 'Predicted Age: ';
    genderPred.innerHTML = 'Predicted Gender: ';

    let requestURL = `https://api.agify.io?name=${userName}`;
    let requestURL2 = `https://api.genderize.io/?name=${userName}`;

    fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(getAge)
    .catch(function (error) {
        console.log('Error during fetch:', error);
    });

    fetch(requestURL2) 
    .then(function (response) {
        return response.json();
    })
    .then(getGender)
    .catch(function (error) {
        console.log('Error during fetch:', error);
    });
}

submitButton.onclick = getUserInput;


function getAge(data) {
    let predictedAge = data.age;
    console.log('Test:', data.age);

    agePred.innerHTML += predictedAge;
}

function getGender(data) {
    let predictedGender = data.gender;
    console.log(data.gender)

    let gender = predictedGender.charAt(0).toUpperCase() + predictedGender.slice(1);

    genderPred.innerHTML += gender;

}

