// popup.js

document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listener to the trackButton in the popup
    var trackButton = document.getElementById('trackButton');
    if (trackButton) {
      trackButton.addEventListener('click', function () {
        // Send a message to the background script to initiate tracking
        chrome.runtime.sendMessage({ type: 'TRACK_ACTIVITY' });
      });
    } else {
      console.error("Element with ID 'trackButton' not found.");
    }
  });
  