
const instances = [
    'https://staging-v2.robodesk.ai',
    'https://houston.robodesk.ai',
    'https://lg.robodesk.ai',
    'https://lg-jordan.robodesk.ai',
    'https://alfa-lab.robodesk.ai',
    'https://alfa-scan.robodesk.ai',
    'https://lg-turkey.robodesk.ai'
];

// Listen for input events on the text input
const input = document.getElementById('urlInput');
let container;
input.addEventListener('input', function () {
    const val = this.value;
    closeAllLists();
    if (!val) { return false; }
    container = document.getElementById('autocompleteContainer');
    const matches = instances.filter(function (Instance) {
        return Instance.toLowerCase().includes(val.toLowerCase());
    });
    for (let i = 0; i < matches.length; i++) {
        const item = document.createElement('div');
        item.textContent = matches[i];
        item.classList.add('autocomplete-item');
        item.addEventListener('click', function () {
            input.value = this.textContent;
            closeAllLists();
        });
        container.appendChild(item);
    }
});
input.addEventListener('click', function () {
    const val = this.value;
    let matches = instances;
    closeAllLists();    
    container = document.getElementById('autocompleteContainer');
    if (val) {        
        matches = matches.filter(function (Instance) {
            return Instance.toLowerCase().includes(val.toLowerCase());
        });
    }
    for (let i = 0; i < matches.length; i++) {
        const item = document.createElement('div');
        item.textContent = matches[i];
        item.classList.add('autocomplete-item');
        item.addEventListener('click', function () {
            input.value = this.textContent;
            closeAllLists();
        });
        container.appendChild(item);
    }
  });

// Close the autocomplete list when the user clicks outside of it
document.addEventListener('click', function (event) {
    if (event.target !== input && event.target.parentNode !== container) {
        closeAllLists();
    }
});

// Helper function to close all autocomplete lists
function closeAllLists() {
    const containers = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
}


