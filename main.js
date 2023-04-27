import { countUp } from './utils/countUp.js';
import { setTabMenu } from './module/tabMenu.js';
import { setSelectCards, setSelectButton } from './module/selectCard.js';

const participateDOM = document.querySelector('#participate-number');
const data = {
  participate: 112458,
};

countUp(participateDOM, data.participate, 2);

setSelectCards();
setSelectButton();
setTabMenu();
