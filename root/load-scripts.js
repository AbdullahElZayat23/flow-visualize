document.addEventListener('DOMContentLoaded', function () {
    // Check if the website is running on localhost
    let isLocalhost = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    // Select all script elements
    let scriptTags = document.getElementsByTagName('script');

    // Create an array to store the new script elements
    let newScriptTags = [];

    // Loop through the script tags and update their src attribute
    for (let i = 0; i < scriptTags.length; i++) {
        let scriptTag = scriptTags[i];
        let src = scriptTag.getAttribute('src');

        // Replace the script URL if it's in the dist/js directory and the website is running on localhost
        if (isLocalhost && src?.includes('./dist/js/')) {
            src = src.replace('./dist/js/', './src/js/');

            // Remove the .min suffix if present
            src = src.replace('.min', '');

            // Create a new script tag with the updated src
            let newScriptTag = document.createElement('script');
            newScriptTag.src = src;
            newScriptTag.defer = true;

            // Add the new script tag to the array
            newScriptTags.push(newScriptTag);

            // Remove the old script tag
            scriptTag.parentNode.removeChild(scriptTag);
        }
    }

    // Add the new script tags to the head or body of the HTML document
    let targetElement = document.head || document.body;
    newScriptTags.forEach(function (scriptTag) {
        targetElement.appendChild(scriptTag);
    });

});
