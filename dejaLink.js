javascript:(function() {
    // Function to normalize and extract the main domain
    function getDomain(url) {
        // Remove protocol (http, https, etc.)
        url = url.replace(/(^\w+:|^)\/\//, '');
        // Remove 'www.' if it exists
        url = url.replace(/^www\./, '');
        // Extract main domain
        let parts = url.split(' ')[0].split('.');
        return parts.slice(-2).join('.');
    }
  
    // Collect all elements with the class 'infringing_url'
    let elements = document.querySelectorAll('.infringing_url');
    let seenLinks = new Set();
  
    // Loop through each element to extract unique domains
    elements.forEach(element => {
        let originalText = element.textContent.trim().toLowerCase();
        let domain = getDomain(originalText);
  
        // Improved regex to match plain text that looks like a domain or link
        if (/([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/.test(originalText)) {
            seenLinks.add(domain);
        }
    });
  
    // Clear the page content
    document.body.innerHTML = '';
  
    // Add back only the unique links to the page
    seenLinks.forEach(domain => {
        let linkElement = document.createElement('p');
        linkElement.textContent = domain;
        document.body.appendChild(linkElement);
    });
  
    alert('All duplicate plain text links processed and removed! Only unique links are now on the page.');
  })();