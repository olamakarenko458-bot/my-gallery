document.addEventListener('DOMContentLoaded', () => {
    // Тут пишемо код
  window.onload=function(){
      setTimeout(()=>{
          alert("Хочете такий принт собі на стіну? Напишіть мені на mail!");
      },1000);
  };
  const logo = document.querySelector('header img');

logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
});
});

const aboutLink = document.getElementById('link-about');
const contactsLink = document.getElementById('link-contacts');
const footer = document.querySelector('.footer'); // Або document.querySelector('footer')

// Створюємо функцію для зміни підвалу
function updateFooterStyle() {
    footer.style.transition = "all 0.5s ease"; // Плавність
    footer.style.backgroundColor = "#1a1a1a"; // Темний фон
    footer.style.color = "#ffffff";           // Світлий текст
}

// Вішаємо подію кліку на обидві кнопки
aboutLink.addEventListener('click', (event) => {
    // event.preventDefault(); // Розкоментуй, якщо не хочеш, щоб сторінка скролила
    updateFooterStyle();
});

contactsLink.addEventListener('click', (event) => {
    updateFooterStyle();
});
