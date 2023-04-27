export const countUp = (dom, target, second, term = 15) => {
  if (
    !dom ||
    isNaN(Number(target)) ||
    isNaN(Number(second)) ||
    isNaN(Number(term))
  )
    return;

  let nowNumber = 0;
  let countTerm = Math.floor(target / ((second * 1000) / term));

  const timerId = setInterval(() => {
    if (nowNumber >= target) {
      nowNumber = target;
      clearInterval(timerId);
      return;
    }
    nowNumber += countTerm;
    dom.innerHTML = `${nowNumber.toLocaleString()}`;
  }, term);
};
