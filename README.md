# Lun NY truck

Тестовое от ЛУН

Результат смотреть [тут](https://romanborodatov.github.io/lun/dist/);

## Фичи

- Анимация симулирует движение реального автомобиля. Происходит расчёт разгона и торможения с помощью синусоидной функции.
- Длительность анимации равна расчётному времени преодоления дистанции в реальном мире в эквиваленте.
- Машина останавливается перед поворотами.
- Машина плавно поворачивает.
- Машина не считает поворотом изменение вектора движения меньше чем на 45 градусов.
- Вы можете сами выбрать куда машине ехать дальше: к другой ёлке или назад в офис.

## P.S.
По фидбеку из прошлой версии:

- Для перемещения снега правильно использовать transorm: translate в CSS.
- Для resize нужна была debounce функция.
