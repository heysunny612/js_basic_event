import { makeDOMwithProperties, appendChildrenList } from '../utils/dom.js';
import { SELECT_RESULT_KEY } from '../constants/result.js';

const cardInfoList = [
  {
    id: 1,
    name: '초코꼬북칩',
    imgSrc: 'public/assets/초코꼬북칩.jpeg',
    description:
      '이 과자는 꼬북칩 특유의 네 겹으로 된 칩의 바삭한 식감과 진한 초코츄러스 맛을 구현했다. 오리온이 네 겹 칩에 한 겹마다 초콜릿을 입혀 진한 초콜릿의 맛을 촉촉하면서도 바삭하게 즐길 수 있도록 하고 슈거 토핑을 올려 달달함과 바삭한 식감을 더했다',
  },
  {
    id: 2,
    name: '나쵸',
    imgSrc: 'public/assets/나쵸.jpeg',
    description:
      '토르티야 칩이나 토토포에 녹인 치즈를 부은 형태로 되어 있는 것이 가장 일반적인 형태이다. 최초의 나초는 1943년 경에 이그나시오 "나초" 아나야가 튀긴 토르티야 칩과 녹인 치즈, 할라피뇨 고추로 만들었다',
  },
  {
    id: 3,
    name: '허니버터칩',
    imgSrc: 'public/assets/허니버터칩.jpeg',
    description:
      '허니버터칩은 해태제과와 일본 제과업체 가루비가 합작해 설립한 해태가루비에서 출시한 제품으로, 한국 감자칩 시장에서 오리온과 농심에 밀려 고전을 면치 못하던 해태제과가 내놓은 새 형태의 감자칩 제품이다.',
  },
  {
    id: 4,
    name: '홈런볼',
    imgSrc: 'public/assets/홈런볼.jpeg',
    description:
      '1981년에 출시한 홈런볼은 입안에서 녹여 먹어도 맛있고, 살짝 얼려 먹어도 맛있는 과자에요. 손에 묻기 쉬운 초코크림은 슈 속에 쏙 들어가 있기 때문에 손으로 막 집어먹어도 묻지 않는답니다. 맛있는 홈런볼은 트레이에 담겨 있기 때문에 언제 어디서나 편하게 즐기실 수 있다.',
  },
];
const cardListDOM = document.querySelector('.snack-card-list');
const selectButtonDOM = document.querySelector('.participate-button');
const resultSection = document.querySelector('#result-section');
const [notYetContainer, resultCotainer] =
  document.querySelectorAll('.result-container');
const [, resultImgDOM, resultNameDOM, resultDescriptionDOM, selectRetryButton] =
  resultCotainer.children;

const getSeletedCard = () => {
  return cardListDOM.querySelectorAll('.select')[0];
};

const getCardById = (id) => {
  return document.getElementById(`select-${id}`);
};

const onSeleted = (id) => {
  const originalSeletedCard = getSeletedCard();
  originalSeletedCard?.classList.remove('select');

  const newSelectedCard = getCardById(id);
  newSelectedCard?.classList.add('select');
};

const getSelectCard = ({ id, name, imgSrc, description }) => {
  const cardDOM = makeDOMwithProperties('button', {
    id: `select-${id}`,
    className: 'snack-card',
    onclick: () => onSeleted(id),
  });
  const cardImage = makeDOMwithProperties('img', {
    src: `${imgSrc}`,
    alt: `${name}`,
  });
  const cardDescriptionCon = makeDOMwithProperties('div', {
    className: 'snack-description',
  });
  const cardName = makeDOMwithProperties('div', { innerText: `${name}` });
  const cardDescription = makeDOMwithProperties('div', {
    innerText: `${description}`,
  });
  appendChildrenList(cardDOM, [cardImage, cardDescriptionCon]);
  appendChildrenList(cardDescriptionCon, [cardName, cardDescription]);

  return cardDOM;
};

export const setSelectCards = () => {
  cardInfoList.forEach((cardList) => {
    const selectCardDOM = getSelectCard(cardList);
    cardListDOM.appendChild(selectCardDOM);
  });

  const cardId = Number(localStorage.getItem(SELECT_RESULT_KEY));
  if (!cardId || isNaN(cardId)) return;
  onSeleted(cardId);
};

export const setSelectButton = () => {
  selectButtonDOM.onclick = () => {
    const selectedCard = getSeletedCard();
    if (!selectedCard) {
      alert('선택된 과자가 없습니다.');
      return;
    }
    const cardId = selectedCard.id.split('-')[1];
    localStorage.setItem(SELECT_RESULT_KEY, cardId);
    resultSection.scrollIntoView({ behavior: 'smooth' });
    setResultContainer();
  };
};
const initialize = () => {
  cardListDOM.scrollIntoView({ behavior: 'smooth', block: 'end' });
};
export const setResultContainer = () => {
  const selectedId = Number(localStorage.getItem(SELECT_RESULT_KEY));
  const isSelected = !!selectedId;
  if (!isSelected) {
    notYetContainer.style.display = 'block';
    resultCotainer.style.display = 'none';
    return;
  }
  notYetContainer.style.display = 'none';
  resultCotainer.style.display = 'flex';

  const cardInfo = cardInfoList.find((cardList) => cardList.id == selectedId);
  const { imgSrc, name, description } = cardInfo;
  resultImgDOM.src = imgSrc;
  resultImgDOM.alt = name;
  resultNameDOM.innerText = name;
  resultDescriptionDOM.innerText = description;

  //다시하기 버튼
  selectRetryButton.onclick = () => {
    initialize();
  };
};
