import React, { useState } from 'react';
import TabButton from './TabButton'; // 剛剛的元件

const TabView = () => {
  const tabs = ['Pending', 'Completed', 'Overdue'];
  const [activeTab, setActiveTab] = useState('Pending');

  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      borderBottom: '1px solid #ccc',
      display: 'flex',
    }}>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          text={tab}
          isActive={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        />
      ))}
    </div>
  );
};

export default TabView;
