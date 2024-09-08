let ageNewUser = prompt("Сколько Вам лет?");
if (ageNewUser >= 18) {
    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    alert("К сожалению Вы еще слишком молоды, до свидания!");
    window.location.href = "https://ya.ru/?npr=1&utm_referrer=https%3A%2F%2Fyandex.ru%2F";
}

let name = prompt("Как Вас зовут?");
alert(`Приветствуем, ${name}. В вашем имени ${userName.length} символов`);