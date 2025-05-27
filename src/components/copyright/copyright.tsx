import React from 'react';

import styles from './copyright.module.css';

type CopyrightProps = {
  color?: string;
};

const Copyright: React.FC<CopyrightProps> = ({
  color = 'var(--color-grey-900)',
}) => {
  return (
    <div className={styles.section}>
      <p style={{ color }}>Designed and built by Rupesh Mall@2025</p>
    </div>
  );
};

export default Copyright;
