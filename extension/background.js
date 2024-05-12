chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'TRACK_ACTIVITY') {
      fetch('http://localhost:3000/api/v1/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') // Assuming token-based authentication
        },
        body: JSON.stringify({ activity: { url: message.data.url } }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Activity tracked:', data);
        })
        .catch((error) => {
          console.error('Error tracking activity:', error);
        });
    }
  });
  