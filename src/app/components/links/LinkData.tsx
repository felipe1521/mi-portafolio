import React, { useEffect, useState } from 'react';
import styles from './links.module.css';
import { ClipboardDocumentCheckIcon, CheckIcon } from '@heroicons/react/24/outline';

type LinkDataProps = {
    data: string;
    type: string;
    handleToggle: () => Promise<void>;
    clipboard: string | null;
};
function LinkData({ data, type, handleToggle, clipboard }: LinkDataProps) {
    const [opacity, setOpacity] = useState(0);
    const [icon, setIcon] = useState(0);
  
    useEffect(() => {
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
      <div className={styles.data_content}>
          <i className={`bx bxl-${type} ${styles.icon}`}></i>
          <p className={styles.data_text}>{data}</p>
          <p className={styles.clipboard_text} style={{opacity: opacity}}>Copiado!</p>
          <ClipboardDocumentCheckIcon onClick={() => handleClick()}
            className={styles.clipboard_icon} style={{ display: icon == 1 ? 'none' : 'block' }} />
          <CheckIcon className={styles.clipboard_icon} style={{ display: icon == 0 ? 'none' : 'block' }} />
      </div>
    )
}

export default LinkData;