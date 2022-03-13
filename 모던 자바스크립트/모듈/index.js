export const title='Printer'; //내보낼 수 있게 만들어줌

export function print(value){
    console.log(value);   
}


import { addMenu } from './add.js';
import { deleteMenuByIndex as deleteMenu } from './delete.js';
// 여기에 코드를 작성해 주세요.


const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
