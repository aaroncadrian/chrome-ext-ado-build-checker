chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: '#3aa757' }, () => {
    console.log('The color is green.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            css: ['meta[name="version"]'],
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
