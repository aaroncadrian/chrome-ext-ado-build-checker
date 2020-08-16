import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { SettingsSource } from './settings-source.context';

export const SettingsForm = () => {
  const settingsSource = useContext(SettingsSource);

  const [organization, setOrganization] = useState<string>('');
  const [project, setProject] = useState<string>('');
  const [personalAccessToken, setPersonalAccessToken] = useState<string>('');

  const onFormSubmitted = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ e });

    settingsSource
      .saveSettings({
        organization,
        project,
        personalAccessToken,
      })
      .then(() => {
        console.log('successfully saved');
      });
  };

  useEffect(() => {
    settingsSource.getSettings().then((settings) => {
      setOrganization(settings.organization);
      setProject(settings.project);
      setPersonalAccessToken(settings.personalAccessToken);
    });
  }, []);

  return (
    <div>
      <form onSubmit={onFormSubmitted}>
        <TextField
          fullWidth
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          id="input-organization"
          label="Organization"
          variant="outlined"
        />

        <TextField
          fullWidth
          value={project}
          onChange={(e) => setProject(e.target.value)}
          id="input-project"
          label="Project"
          variant="outlined"
        />

        <TextField
          fullWidth
          value={personalAccessToken}
          onChange={(e) => setPersonalAccessToken(e.target.value)}
          id="input-pat"
          label="Personal Access Token"
          variant="outlined"
        />

        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default SettingsForm;
