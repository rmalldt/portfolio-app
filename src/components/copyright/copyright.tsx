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
      <p style={{ color }}>©2025 Rupesh Mall. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
