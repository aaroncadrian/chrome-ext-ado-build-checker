chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type !== 'VERSION_FOUND') {
    return;
  }

  const { version } = message;

  console.log('FINDING INFO ABOUT VERSION', { version, sender });
});
