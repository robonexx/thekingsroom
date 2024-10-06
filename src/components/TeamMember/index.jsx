import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Power2 } from "gsap/all";
import styles from "./TeamMember.module.scss";
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
} from "react-icons/ri";
import { TbBrandBandcamp } from "react-icons/tb";

// mapping thru my social icons
const iconMap = {
  RiLinkedinBoxLine: RiLinkedinBoxLine,
  RiTwitterXLine: RiTwitterXLine,
  RiInstagramLine: RiInstagramLine,
  RiSpotifyLine: RiSpotifyLine,
  RiSoundcloudLine: RiSoundcloudLine,
  RiGithubLine: RiGithubLine,
  RiFacebookBoxLine: RiFacebookBoxLine,
  RiTiktokFill: RiTiktokFill,
  RiWhatsappLine: RiWhatsappLine,
  TbBrandBandcamp: TbBrandBandcamp,
};

const TeamMember = ({ name, desc, img, socials, id }) => {
  const imgRef = useRef(null);
  const container = useRef(null);
  const wrapper = useRef(null);
  const overlayRef = useRef(null);
  const text = useRef(null);
  const text2 = useRef(null);
  const socialsRef = useRef([]); // To reference the social icons

  useEffect(() => {
    const imageReveal = overlayRef.current;
    const tl = gsap.timeline();

    // Animate the wrapper and image
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
      width: "0%",
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

    // Animate the text coming in
    tl.fromTo(
      text.current,
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: -0.5,
      }
    );
    tl.fromTo(
      text2.current,
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: -0.5,
      }
    );

    // Stagger animation for social icons, after the previous animations finish
    tl.fromTo(
      socialsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
        stagger: 0.2, // stagger animation for each icon
        duration: 0.5,
      },
      "-=0.5" // overlap the icon animation slightly with the text animations
    );

    return () => {
      tl.kill();
    };
  }, [name, desc, img]);

  if (!img) {
    return null;
  }

  return (
    <div className={styles["crew-member-container"]}>
      <Link to={`/about/${id}`}>
        <div className={styles["crew-member"]} ref={wrapper}>
          {name !== "" ? <h2 ref={text}>{name}</h2> : ""}
          <div className={styles.overlay} ref={overlayRef}></div>
          <div className={styles.container} ref={container}>
            <div className={styles["image-container"]}>
              <img ref={imgRef} src={img} alt={name} />
            </div>
          </div>
          {desc !== "" ? <p ref={text2}>{desc}</p> : ""}
        </div>
      </Link>
      <ul className={styles.socials}>
        {socials &&
          socials.map((social, index) => {
            const IconComponent = iconMap[social.icon];
            return (
              <Link
                to={social.link}
                target='_blank'
                rel='noopener noreferrer'
                key={index}
                ref={(el) => (socialsRef.current[index] = el)}
              >
                {IconComponent && <IconComponent />}
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default TeamMember;
