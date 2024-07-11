// script.js

// Получаем все ссылки в меню
const menuLinks = document.querySelectorAll('.menu-main a');

// Перебираем ссылки и добавляем обработчик события клика
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Убираем подсветку у всех ссылок
        menuLinks.forEach(item => item.classList.remove('active'));
        
        // Добавляем класс active текущей ссылке
        this.classList.add('active');
    });
});
