import React, { useState, useCallback } from 'react';

import styles from './DropDown.module.scss';

export default function DropDownItem(props) {
  const [click, setClick] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  return (
    <li key={props.title} className={styles.dropdown_item}>
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.dropdown_link}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {click && props.children}
    </li>
  );
}
