import { versionInfoMessage } from './version-info.message';

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type !== versionInfoMessage.type) {
    return;
  }

  const { version } = message;

  console.log('FINDING INFO ABOUT VERSION', { version, sender });

  if (!!version) {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        id: sender.url,
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              urlEquals: sender.url,
            },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  } else {
    chrome.declarativeContent.onPageChanged.removeRules([sender.url]);
  }
});
