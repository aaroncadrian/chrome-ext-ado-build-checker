import { versionInfoMessage } from '../../version-info.message';

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type !== versionInfoMessage.type) {
    return;
  }

  const { version } = message;

  console.log('FINDING INFO ABOUT VERSION', { version, sender });

  const url = new URL(sender.url);
  const { host } = url;

  chrome.declarativeContent.onPageChanged.removeRules([host]);

  if (!!version) {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        id: host,
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: host,
            },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  }
});
