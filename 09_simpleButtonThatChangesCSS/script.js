const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelector('li');

function run() {
  //className
  console.log(itemList.className);
  //if just set text.className = 'dark', it will remove the card class and just put dark instead.
  //so, include existing card class in the className for preserving the existing class.
  text.className = 'card dark';
}

function run2() {
  //classList
  //console.log(itemList.classList); <- This is an array, so we can call array methods to this.

  //add, remove, replace and toggle
  /*
  text.classList.add('dark'); <- This adds dark class
  text.classList.remove('card'); <- This removes card class
  text.classList.replace('card', 'dark'); <- This removes card class and puts dark class instead
  */
  text.classList.toggle('dark');
  itemList.classList.toggle('hidden');
  text.classList.forEach((c) => console.log(c));
}

function run3() {
  //changeStyle
  itemList.style.lineHeight = '3';
}

function run4() {
  items.forEach((item, index) => {
    if (index === 2) {
      item.style.color;
    }
    item.style.color = 'red';
  });
}
document.querySelector('button').onclick = run2;
