const shareURLbtn = document.querySelector('#url-share-button');

export const setShareURLbutton = () => {
  shareURLbtn.onclick = () => {
    navigator.clipboard.writeText(location.href);
  };
};
