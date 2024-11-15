import React from 'react';
import styles from './links.module.css';
import { ClipboardDocumentCheckIcon, CheckIcon } from '@heroicons/react/24/outline';

function LinkData({ data, color, type, handleToggle, clipboard }) {
    const [opacity, setOpacity] = React.useState(0);
    const [icon, setIcon] = React.useState(0);
  
    React.useEffect(() => {
        if(clipboard == data) {
            setOpacity(0);
            setIcon(0);
        }
    }, [clipboard, data]);

    const handleClick = async () => {
      await handleToggle();
      navigator.clipboard.writeText(data);
      setOpacity(1);
      setIcon(1);
      setTimeout(() => setOpacity(0), 2000);
    };
    return (
      <div className={styles.data_content} style={{backgroundColor: color, boxShadow: `0 0 10px ${color}`}}>
          <i className={`bx bxl-${type}`}></i>
          <p className={styles.data_text}>{data}</p>
          <p className={styles.clipboard_text} style={{opacity: opacity}}>Copiado!</p>
          <ClipboardDocumentCheckIcon onClick={() => handleClick(data)}
            className={styles.clipboard_icon} style={{ display: icon == 1 ? 'none' : 'block' }} />
          <CheckIcon className={styles.clipboard_icon} style={{ display: icon == 0 ? 'none' : 'block' }} />
      </div>
    )
}

export default LinkData;