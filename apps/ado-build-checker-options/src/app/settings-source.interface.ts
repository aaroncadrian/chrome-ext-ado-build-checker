export interface ISettings {
  organization: string;
  project: string;
  personalAccessToken: string;
}

export interface ISettingsSource {
  getSettings(): Promise<ISettings>;
  saveSettings(settings: ISettings): Promise<void>;
}
