const listEl = document.querySelector('#categories');
const listLi = listEl.children;

console.log(listEl);
console.log(listLi);

function amount (arr) {
return `Number of categories: ${arr.length}`;
}
console.log(amount(listLi));

Array.from(listLi).forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
