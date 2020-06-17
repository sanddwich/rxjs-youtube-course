import { fromEvent, EMPTY } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  mergeMap,
  tap,
  catchError,
  filter
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// const url = 'https://api.github.com/search/users?q=sanddwich';
const url = 'https://api.github.com/search/users?q=';

const search = document.getElementById('search');
const result = document.getElementById('result');

const stream$ = fromEvent(search, 'input').pipe(
  map((el) => el.target.value), //Обработка события
  debounceTime(1000), //Задержка перед обработкой события в 1 секунду
  distinctUntilChanged(), //Обработка события, если наблюдаемое состояние элемента изменилось
  tap(() => {result.innerHTML = ''}), //Обнуление элементов в DIV "result"
  filter(val => val.trim()), //Проверяем пустая ли строка стрима. Если TRUE, то идут дальнейшие операторы. Если FALSE, стрим прекращается
  switchMap((val) => ajax.getJSON(url + val) //Переключаемся на другой поток, используя результат текущего потока, помещенного в "val"
    .pipe(
      catchError(err => { //Отлавливание ошибок потока AJAX запроса
        return EMPTY;
      })
    )),
  map((response) => response.items), //Обрабатываем новый поток (парсим), вытаскивая из полученного объекта массив "items"
  mergeMap((items) => items) //Разбиение массива на элементы
);

stream$.subscribe((user) => {
  // console.log(value);
  const html1 = `
  <div class="card">
    <div class="card-image">
      <img src="${user.avatar_url}">
      <span class="card-title">${user.login}</span>
    </div>
    <div class="card-action">
      <a href="${user.html_url}" target="_blank">Открыть gitHub</a>
    </div>
  </div>
  `;
  result.insertAdjacentHTML('beforeend', html1);
});
