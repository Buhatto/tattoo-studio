# Инструкция по добавлению файлов на GitHub

## Новые файлы для загрузки

Добавь в репозиторий следующие HTML-файлы:
- `index.html` — обновлённая главная страница (заменяет старую)
- `about.html` — О студии
- `masters.html` — Мастера
- `portfolio.html` — Портфолио (с фильтрацией по мастеру)
- `prices.html` — Стоимость услуг
- `training.html` — Обучение
- `booking.html` — Запись на сеанс

## Важно: обновить style.css

Открой свой `style.css` и **добавь в самый конец** содержимое файла `style-additions.css`.
Это добавит стили для:
- Шапок внутренних страниц (`.page-hero`)
- Активного пункта меню (`.nav-links a.active`)
- Кнопок фильтра портфолио (`.filter-btn`)
- Карточек цен (`.price-card`)

## Как загрузить на GitHub

### Вариант 1: Через сайт GitHub
1. Зайди в репозиторий `Buhatto/tattoo-studio`
2. Нажми **Add file → Upload files**
3. Перетащи все HTML-файлы
4. Нажми **Commit changes**

Для `style.css` — открой файл через **Edit (карандаш)**, вставь код из `style-additions.css` в конец и сохрани.

### Вариант 2: Через Git
```bash
git clone https://github.com/Buhatto/tattoo-studio.git
cd tattoo-studio
# Скопируй новые файлы в папку
# Добавь стили из style-additions.css в конец style.css
git add .
git commit -m "Разбивка на отдельные страницы"
git push
```

## Структура сайта после обновления

```
index.html       → Главная
about.html       → О студии
masters.html     → Мастера
portfolio.html   → Портфолио (с фильтром по мастеру)
prices.html      → Стоимость услуг
training.html    → Обучение
booking.html     → Запись на сеанс
style.css        → Стили (добавить style-additions.css в конец)
script.js        → Скрипты (не изменялся)
img/             → Изображения (не изменялись)
```
