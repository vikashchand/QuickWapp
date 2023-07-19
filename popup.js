document.getElementById('openWhatsApp').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
      const url = `http://wa.me/${phoneNumber}`;
      
      // Create a new tab with the WhatsApp URL
      chrome.tabs.create({ url });
    }
  });
  