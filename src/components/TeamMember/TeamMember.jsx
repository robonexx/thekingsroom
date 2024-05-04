import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Power2 } from 'gsap/all';
import styles from './TeamMember.module.scss';
import {
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiSpotifyLine,
  RiSoundcloudLine,
  RiGithubLine,
  RiFacebookBoxLine,
  RiTiktokFill,
  RiWhatsappLine,
} from 'react-icons/ri';
import { TbBrandBandcamp } from 'react-icons/tb';

// mapping thru my social icons, something i learned at Degaming :D
// then dynamically fetching the right icons
const iconMap = {
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiSpotifyLine,
  RiSoundcloudLine,
  RiGithubLine,
  RiFacebookBoxLine,
  RiTiktokFill,
  RiWhatsappLine,
  TbBrandBandcamp,

  // Add other icons here as needed
};

const TeamMember = ({ name, desc, img, socials }) => {
  const imgRef = useRef(null);
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
    tl.to(imgRef.current, {
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
  }, [name, desc, img]);

  /* if (!name || !desc || !image) {
    return null;
  } */
  if (!img) {
    return null;
  }

  return (
    <div className={styles['crew-member-container']}>
      <div className={styles['crew-member']} ref={wrapper}>
        {name !== '' ? <h2 ref={text}>{name}</h2> : ''}

        <div className='overlay' ref={overlayRef}></div>
        <div className={styles.container} ref={container}>
          <div className={styles['image-container']}>
            <img ref={imgRef} src={img} alt={name} />
          </div>
        </div>
        {desc !== '' ? <p ref={text2}>{desc}</p> : ''}
      </div>
      <ul className={styles.socials}>
        {socials.map((social, index) => {
          // Here we get the icon component based on the icon string
          const IconComponent = iconMap[social.icon];
          return (
            <Link
              to={social.link}
              target='_blank'
              rel='noopener noreferrer'
              key={index}
            >
              {/* Render the icon if it exists */}
              {IconComponent && <IconComponent />}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamMember;
