// popup.js

document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listener to the trackButton
    document.getElementById('trackButton').addEventListener('click', function () {
      // Retrieve the active tab and send a message to the content script to track activity
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'TRACK_ACTIVITY', data: { url: tabs[0].url } });
      });
    });
  });
  