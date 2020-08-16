const type = 'VERSION_INFO';

export const versionInfoMessage = (version) => ({
  type,
  version,
});

versionInfoMessage.type = type;
