import React from 'react';

import './app.scss';
import SettingsForm from './settings-form';
import { SettingsSource } from './settings-source.context';
import { createDummySettingsSource } from './settings-source.dummy';

export const App = () => {
  const settingsSource = createDummySettingsSource();

  return (
    <SettingsSource.Provider value={settingsSource}>
      <SettingsForm />
    </SettingsSource.Provider>
  );
};

export default App;
