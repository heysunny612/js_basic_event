// 질문이 표시되고, yes -> +1, no-> 그대로
// 3. 버튼을 눌렀을때 다음 질문표시
// 4. n개의 질문이 끝나면 자시만 기다려주세요..3초 안내 후
// 5. 결과 표시

const [selectMbti, peddingMbti, resultMbti] =
  document.querySelectorAll('.mbti-container');
const [titleDOM, descriptionDOM] = resultMbti.children;
const mbitQuestionDOM = document.querySelector('.mbti-question');
const [btnYes, btnNo] = document.querySelector('.mbti-select').children;
const mbtiRetryBtn = document.querySelector('.mbti-retry-button');

const mbtiQuestionList = [
  '짠 과자가 단 과자보다 좋다.',
  '봉지 과자가 박스 과자보다 좋다.',
  '과자를 뜯으면 한 번에 다 먹는다',
];
let currentRound = 0;
let resultScore = 0;
const maxRound = mbtiQuestionList.length;

const getMbtiResult = (resultScore) => {
  switch (resultScore) {
    case 0:
      return {
        title: '과자 어린이 (A유형)',
        description: '과자 어린이 (A 유형) 설명',
      };
    case 1:
      return {
        title: '과자 초심자 (B유형)',
        description: '과자 어린이 (B 유형) 설명',
      };
    case 2:
      return {
        title: '과자 초심자 (B유형)',
        description: '과자 어린이 (B 유형) 설명',
      };
    case 3:
    default:
      return {
        title: '과자 중급자 (D유형)',
        description: '과자 어린이 (D 유형) 설명',
      };
  }
};

const setPendingSection = () => {
  peddingMbti.style.display = 'block';
  selectMbti.style.display = 'none';
  setTimeout(() => {
    peddingMbti.style.display = 'none';
    resultMbti.style.display = 'block';
  }, 1000);
};

const setResultSection = () => {
  const { title, description } = getMbtiResult(resultScore);
  titleDOM.innerText = title;
  descriptionDOM.innerText = description;
};

export const setMbitSection = () => {
  if (currentRound === maxRound) {
    setPendingSection();
    setResultSection();
    return;
  }
  selectMbti.style.display = 'block';
  mbitQuestionDOM.innerText = mbtiQuestionList[currentRound++];
  btnYes.onclick = () => {
    resultScore++;
    setMbitSection();
  };

  btnNo.onclick = () => {
    resultScore;
    setMbitSection();
  };

  mbtiRetryBtn.onclick = () => {
    resultScore = 0;
    currentRound = 0;
    setMbitSection();
    resultMbti.style.display = 'none';
  };
};
