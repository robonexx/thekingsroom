import { useEffect } from 'react';
import locoScroll from 'locomotive-scroll';
export default function useScroll(start) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector('#main');
    locoScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 5,
      class: 'is-reveal',
      mobile: {
        breakpoint: 0,
        smooth: true,
        multiplier: 15,
        class: 'is-reveal',
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      },
    });
  }, [start]);
}
