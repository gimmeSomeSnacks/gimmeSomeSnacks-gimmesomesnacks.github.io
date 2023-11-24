let counterr = 0;
let intervalId;
const notifTotalObjects = document.querySelector(".notification-base");
const notifTotalObjectsOut = document.querySelector(".notif-total");
function incrementCounter() {
    counterr++;
    let notificationElement = document.createElement('div');
    notificationElement.className = 'notif-block';
    notificationElement.textContent = `Уведомление ${counterr}`;
    document.getElementById('notificationContainer').appendChild(notificationElement);
    if (counterr == 1) {
        notifTotalObjects.insertAdjacentHTML("beforeend", `<p class="notif-total">${counterr}</p>`);
    }
    document.querySelector('.notif-total').innerText = counterr;

}


intervalId = setInterval(incrementCounter, 3000);
document.querySelector('.notif-button').addEventListener('click', function () {
    clearInterval(intervalId);
    setTimeout(function () {
        intervalId = setInterval(incrementCounter, 3000);
    }, 10000);
});


let ul = document.querySelector('.uluved');
document.querySelector('.liuved').addEventListener('click', function () {
    var item = prompt("Новый пункт:");
    while (item) {
        const litem = document.createElement('li');
        litem.textContent = item;
        ul.appendChild(litem);
        item = prompt("Новый пункт: ");
    }
});


function showNotification(options) {
    var div = document.createElement("div");

    div.className = "MainFixedNotification";
    div.textContent = options;

    document.body.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 1500);
}

document.querySelector('.uved').addEventListener('click', function () {
    options = prompt("Текст уведомления:")
    showNotification(options);
});