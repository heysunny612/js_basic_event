const anchorToSelect = document.querySelector('#anchor-to-select');
const anchorToResult = document.querySelector('#anchor-to-result');
const anchorToMbti = document.querySelector('#anchor-to-mbti');

const participateSection = document.querySelector('#participate-section');
const resultSection = document.querySelector('#result-section');
const mbtiSection = document.querySelector('#mbti-section');

export const setScrollHandler = (anchorDOM, targetDom) => {
  const scrollTargetY = targetDom.offsetTop;
  anchorDOM.onclick = () => {
    window.scrollTo({ top: `${scrollTargetY}`, behavior: 'smooth' });
  };
};

export const setTabMenu = () => {
  setScrollHandler(anchorToSelect, participateSection);
  setScrollHandler(anchorToResult, resultSection);
  setScrollHandler(anchorToMbti, mbtiSection);
};
