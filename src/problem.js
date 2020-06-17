import { interval } from 'rxjs';
import { filter, map, take, scan } from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#problem .result');

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 },
];

btn.addEventListener('click', () => {
  console.log('111111111');
  btn.disabled = true;
  let i = 0;
  const canDrink = [];

  const interval = setInterval(() => {
    if (people[i]) {
      if (people[i].age > 17) {
        canDrink.push(people[i].name);        
      }
      // console.log(i);
      display.textContent = canDrink.join('  ');
      i++;
    } else {
      clearInterval(interval);
      btn.disabled = false;
    }
  }, 1000);
});

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;
  interval(1000)
    .pipe(
      take(people.length),  //Определяется кол-во интервелов
      filter(val => {       // Пропускаем данные по заданным параметрам
        return people[val].age >= 18;    //Не надо проверять на наличие элемента массива при наличии take
        // if (people[val]){
        //   return people[val].age >= 18;
        // }
      }),
      map(val => {
        console.log(val);
        return people[val].name;
      }),
      scan((res, el) => res.concat(el), [])
    )
    .subscribe(res => {
      display.textContent = res.join(' = ');      
    }, null, () => {
      return rxjsBtn.disabled = false;
    })
});
