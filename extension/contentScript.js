// contentScript.js

console.log('Content script loaded.');

// Listen for messages from the background script
// In contentScript.js
// contentScript.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'TRACK_ACTIVITY') {
      console.log('Received TRACK_ACTIVITY message from background script:', message.data);
      
      // Perform actions based on the received message, such as tracking activity
      // For demonstration purposes, log the received URL
      console.log('URL to track:', message.data.url);
    }
  });
  