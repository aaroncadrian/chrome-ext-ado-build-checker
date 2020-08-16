import React from 'react';

import './app.scss';
import SettingsForm from './settings-form';
import { createChromeSettingsSource } from './settings-source.chrome';
import { SettingsSource } from './settings-source.context';

export const App = () => {
  const settingsSource = createChromeSettingsSource();

  return (
    <SettingsSource.Provider value={settingsSource}>
      <SettingsForm />
    </SettingsSource.Provider>
  );
};

export default App;
