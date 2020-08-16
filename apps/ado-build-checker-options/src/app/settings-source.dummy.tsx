import { ISettings, ISettingsSource } from './settings-source.interface';

export const createDummySettingsSource = (): ISettingsSource => {
  return {
    async getSettings(): Promise<ISettings> {
      return {
        organization: 'DummyOrgName',
        project: 'DummyProjectName',
        personalAccessToken: 'DummyPat',
      };
    },

    async saveSettings(settings: ISettings): Promise<void> {
      console.log('Settings have been saved!', { settings });
    },
  };
};
