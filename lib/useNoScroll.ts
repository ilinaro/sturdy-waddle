export const useNoScroll = (active: boolean) => {
  if (typeof window !== 'undefined') {
    const body = document.body;

    if (body) {
      if (active) {
        body.style.overflowY = 'hidden';
      } else {
        body.style.overflowY = 'visible';
      }
    }
  }
};
