const findMetaTag = () => {
  console.group('FIND VERSION META');

  const metaTag = document.querySelector('meta[name="version"]');

  if (!metaTag) {
    console.log('no version tag found');

    return;
  }

  const version = metaTag.getAttribute('content');

  if (!version) {
    console.log('no version value');

    return;
  }

  console.log('version found!', { version });

  chrome.runtime.sendMessage({
    type: 'VERSION_FOUND',
    version,
  });

  console.groupEnd();
};

findMetaTag();
