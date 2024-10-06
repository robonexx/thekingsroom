import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { gsap, Power2 } from "gsap";
import styles from "./Member.module.scss";

const Member = ({ teamMembersData }) => {
  const { memberId } = useParams();

  // Find the member with the specified ID
  const member = teamMembersData.find(
    (member) => member.id === parseInt(memberId)
  );

  // Refs for GSAP animations
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const dynamicWidth = window.innerWidth > 900 ? "60%" : "100%";

    // Background image fades in over 3 seconds
    tl.to(bgRef.current, { opacity: 0.3, duration: 2 });

    // Image container fades in and grows in height from bottom to top
    tl.fromTo(
      containerRef.current,
      { height: "0%", opacity: 0 },
      {
        height: "60%",
        width: dynamicWidth,
        opacity: 1,
        duration: 0.8,
        ease: Power2.easeInOut,
      }
    );

    // Overlay slides out to the left, revealing the image behind
    tl.fromTo(
      overlayRef.current,
      { x: "0%" },
      { x: "-100%", duration: 0.8, ease: Power2.easeInOut, delay: 0.3 }
    );

    // Image zooms in as the overlay slides out
    tl.fromTo(
      imageRef.current,
      { scale: 1.6, ease: Power2.easeInOut },
      { scale: 1, duration: 2, ease: Power2.easeInOut },
      "-=1.5"
    );

    // Title slides up from behind the image
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=1"
    );

    // Paragraph fades in after the title
    tl.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );
    tl.fromTo(
      btnRef.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 0.8, ease: Power2.easeInOut, delay: 0.3 }
    );

    return () => {
      tl.kill(); // Clean up the animation on component unmount
    };
  }, [member]);

  function addLineBreak(string) {
    // Check if the string contains a dot (.)
    if (string.includes(".")) {
      // Split the string into an array using the dot (.) as a separator
      const parts = string.split(".");

      // Join the parts back together with a line break (\n\n) in between
      return parts.join(".\n\n");
    }

    // Return the original string if no dot (.) is found
    return string;
  }

  const formattedDescription = addLineBreak(member.fullDesc);

  return (
    <div className={styles.member}>
      <Link to={`/about`} className={styles.back} ref={btnRef}>
        Go Back
      </Link>

      {/* Background Image */}
      <div className={styles.bgImage} ref={bgRef}>
        <img src={member.img} alt={"some image for bg"} />
      </div>

      {/* Image Container with Overlay */}
      <div className={styles.imageContainer} ref={containerRef}>
        <div className={styles.overlay} ref={overlayRef}></div>
        <img ref={imageRef} src={member.img} alt={member.name} />
      </div>

      {/* Title */}
      <h1 ref={titleRef} className={styles.title}>
        {member.name}
      </h1>

      {/* Paragraph */}
      <p ref={paragraphRef} className={styles.description}>
        {formattedDescription}
      </p>
    </div>
  );
};

export default Member;
