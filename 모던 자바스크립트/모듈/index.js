export const title='Printer'; //내보낼 수 있게 만들어줌

export function print(value){
    console.log(value);   
}


import { addMenu } from './add.js';
import { deleteMenuByIndex as deleteMenu } from './delete.js';
import * as module from './moudle.js';
//module.js에서 모든 파일을 불러옴. -> 객체 형식으로
//사용할 때도 객체 사용하듯이 사용하면 됨
// * : 와일드카드 문자 라고 함.
//근데 모든게 필요하지는 않으므로 불필요한 import 발생 가능 -> 비효율적

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
