// src/components/IconBar.js
import styles from '../styles/IconBar.module.css';

const icons = [
  'icon1.png',
  'icon2.png',
  'icon3.png',
  'icon4.png',
  'icon5.png',
  'icon6.png',
  'icon7.png',
  'icon8.png',
  'icon9.png',
];

const IconBar = () => {
  return (
    <div className={styles.iconBar}>
      {icons.map((icon, index) => (
        <img
          key={index}
          src={`/icons/${icon}`}
          alt={`Icon ${index + 1}`}
          className={styles.icon}
        />
      ))}
    </div>
  );
};

export default IconBar;
