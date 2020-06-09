let elem = document.getElementById("coords-show-mark");

elem.onclick = function() {

  function createMessageUnder(elem, html) {
    // создаём элемент, который будет содержать сообщение
    let message = document.createElement('div');
    // для стилей лучше было бы использовать css-класс здесь
    message.style.cssText = "position: fixed; color: red";

    // устанавливаем координаты элементу, не забываем про "px"!
    let coords = elem.getBoundingClientRect();

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;

    return message;
  }

  // Использование:
  // добавим сообщение на страницу на 5 секунд
  let message = createMessageUnder(elem, 'Hello, world!');
  document.body.append(message);
  setTimeout(() => message.remove(), 5000);

}