export const fadeIn = {
  initial: { x: '0', opacity: 0 },
  enter: {
    x: '0',
    opacity: 1,
    transition: { duration: 0.4, ease: 'linear' },
  },
  exit: {
    x: 0,
    transition: { duration: 0.4, opacity: 0, ease: 'ease-in-out' },
  },
};

export const fadeInUp = {
  initial: { y: 200, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.4, ease: 'linear' },
  },
  exit: {
    y: 0,
    transition: { duration: 0.4, opacity: 0, ease: 'ease-in-out' },
  },
};
export const fadeInLEft = {
  initial: { x: 1000, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'linear' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, opacity: 0, ease: 'ease-in-out' },
  },
};
export const fadeInRight = {
  initial: { x: -1000, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'linear' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, opacity: 0, ease: 'ease-in-out' },
  },
};
