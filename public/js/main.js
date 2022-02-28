import * as wss from './wss.js';
import * as store from './store.js';

const socket = io(`/`);
wss.registerSocketListeners(socket);

const codeCpyBtn = document.getElementById('personal_code_copy_button');
codeCpyBtn.addEventListener('click', () => {
   const code = store.getState().socketId;
   navigator.clipboard.writeText(code);
});