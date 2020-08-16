import { ISettings, ISettingsSource } from './settings-source.interface';

export const createChromeSettingsSource = (): ISettingsSource => {
  return {
    getSettings(): Promise<ISettings> {
      return new Promise<ISettings>((resolve) => {
        chrome.storage.sync.get(
          ['organization', 'project', 'personalAccessToken'],
          resolve
        );
      });
    },

    saveSettings(settings: ISettings): Promise<void> {
      return new Promise<void>((resolve) => {
        chrome.storage.sync.set(settings, resolve);
      });
    },
  };
};
