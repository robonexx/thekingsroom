import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power2 } from 'gsap/all';
import styles from './ImageReveal.module.scss';

const ImageReveal = ({ title, sub, img }) => {
  const image = useRef(null);
  const container = useRef(null);
  const wrapper = useRef(null);
  const overlayRef = useRef(null);
  const text = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    const imageReveal = overlayRef.current;
    const tl = gsap.timeline();
    tl.from(wrapper.current, {
      duration: 1.4,
      scale: 1.6,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
    tl.to(container.current, { opacity: 1 });
    tl.to(imageReveal, {
      duration: 1.4,
      width: '0%',
      opacity: 1,
      ease: Power2.easeInOut,
    });
    tl.to(image.current, {
      duration: 1.4,
      scale: 1,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: -1.4,
    });

    tl.fromTo(
      text.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: -0.5,
      }
    );
    tl.fromTo(
      text2.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: -0.5,
      }
    );

    // Kill the timeline to prevent memory leaks
    return () => {
      tl.kill();
    };
  }, [title, sub, img]);

  /* if (!title || !sub || !img) {
    return null;
  } */
  if (!img) {
    return null;
  }

  return (
    <div className={styles['image-reveal']} ref={wrapper}>
      {title !== '' ? <h2 ref={text}>{title}</h2> : ''}

      <div className='overlay' ref={overlayRef}></div>
      <div className={styles.container} ref={container}>
        <div className={styles['image-container']}>
          <img ref={image} src={img} alt={title} />
        </div>
      </div>
      {sub !== '' ? <p ref={text2}>{sub}</p> : ''}
    </div>
  );
};

export default ImageReveal;
