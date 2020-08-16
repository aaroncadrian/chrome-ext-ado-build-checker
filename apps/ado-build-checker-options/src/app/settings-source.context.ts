import { createContext } from 'react';
import { ISettingsSource } from './settings-source.interface';

export const SettingsSource = createContext<ISettingsSource>(null);

SettingsSource.displayName = 'Settings Source';
