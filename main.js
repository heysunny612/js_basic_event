import { countUp } from './utils/countUp.js';
import { setTabMenu } from './module/tabMenu.js';
import { setSelectCards, setSelectButton } from './module/selectCard.js';
import { setResultContainer } from './module/selectCard.js';
import { setMbitSection } from './module/mbtiSelect.js';
import { setShareURLbutton } from './module/share.js';
  
const participateDOM = document.querySelector('#participate-number');
const data = {
  participate: 112458,
};

countUp(participateDOM, data.participate, 2);

setSelectCards();
setSelectButton();
setResultContainer();
setMbitSection();
setTabMenu();
setShareURLbutton()