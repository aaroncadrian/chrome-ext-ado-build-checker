const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = (element) => {
  const color = element.target.value;

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.tabs.executeScript(tab.id, {
      code: `document.body.style.backgroundColor = "${color}";`,
    });
  });
};
