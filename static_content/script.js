// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
function sendReq (argument) {
	xhr.open('GET', 'phones.json', true);
	// 3. Отсылаем запрос
	xhr.send();
	// 4. Если код ответа сервера не 200, то это ошибка
	if (xhr.status != 200) {
	// обработать ошибку
	console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} else {
		var responseText = xhr.responseText();
		console.log(responseText);	
	}
}
setInterval(sendReq, 3000);
// some code