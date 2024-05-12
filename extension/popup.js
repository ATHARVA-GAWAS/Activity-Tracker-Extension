document.getElementById('trackButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'TRACK_ACTIVITY', data: { url: tabs[0].url } });
    });
  });
  