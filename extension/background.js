chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'TRACK_ACTIVITY' && message.data && message.data.url) {
      console.log('Tracking started for URL:', message.data.url);
      
      // Retrieve token from Chrome Storage
      chrome.storage.local.get('token', function(data) {
        const token = data.token;
        
        fetch('http://localhost:3000/api/v1/activities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({ activity: { url: message.data.url } }),
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Activity tracked:', data);
          sendResponse({ success: true }); // Send success response back to popup script
        })
        .catch((error) => {
          console.error('Error tracking activity:', error);
          sendResponse({ success: false, error: error.message }); // Send error response back to popup script
        });
      });
      
      // Return true to indicate that sendResponse will be called asynchronously
      return true;
    } else {
      console.error('Invalid message or missing URL:', message);
      sendResponse({ success: false, error: 'Invalid message or missing URL' });
      return false;
    }
  });
  