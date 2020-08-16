const findMetaTag = () => {
  const metaTag = document.querySelector('meta[name="version"]');

  const version = metaTag && metaTag.getAttribute('content');

  chrome.runtime.sendMessage({
    type: 'VERSION_INFO',
    version,
  });

  console.groupEnd();
};

findMetaTag();
