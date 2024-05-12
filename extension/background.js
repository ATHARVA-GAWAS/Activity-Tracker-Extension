chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'TRACK_ACTIVITY') {
      console.log('Tracking started...');
      
      fetch('http://localhost:3000/api/v1/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') // Assuming token-based authentication
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
        
      // Return true to indicate that sendResponse will be called asynchronously
      return true;
    }
  });
  