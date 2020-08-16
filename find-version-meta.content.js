import { versionInfoMessage } from './version-info.message';

const findMetaTag = () => {
  const metaTag = document.querySelector('meta[name="version"]');

  const version = metaTag && metaTag.getAttribute('content');

  console.log({ version });

  chrome.runtime.sendMessage(versionInfoMessage(version));
};

findMetaTag();
