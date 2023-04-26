// // Get the element with ID "flow-visualize"
// const basicExample = document.getElementById('flow-visualize');

// // Get the current scale factor of the element
// let currentScaleFactor = 1;

// // Zoom In method
// function zoomIn() {
//   currentScaleFactor += 0.1;
//   basicExample.style.setProperty('--scale-factor', currentScaleFactor);
//   basicExample.classList.add('zoom-in');
//   basicExample.classList.remove('zoom-out');
// }

// // Zoom Out method
// function zoomOut() {
//   currentScaleFactor -= 0.1;
//   basicExample.style.setProperty('--scale-factor', currentScaleFactor);
//   basicExample.classList.add('zoom-out');
//   basicExample.classList.remove('zoom-in');
// }

// const chart = document.getElementById('flow-visualize');
// const panzoomInctance = panzoom(chart, {
//   zoomSpeed: 0.1, // adjust as needed
//   maxZoom: 2, // adjust as needed
//   minZoom: 0.5, // adjust as needed
//   smoothScroll: false, // adjust as needed
//   bounds: true, // adjust as needed
//   initialZoom: 1, // adjust as needed
// });
// zoom in and out with zoom buttons
// const zoomInButton = document.getElementById('zoom-in-icon');
// zoomInButton.addEventListener('click', function () {
//   panzoomInctance.zoomTo(0, 0, 2);
// });

// const zoomOutButton = document.getElementById('zoom-out-icon');
// zoomOutButton.addEventListener('click', function () {
//   panzoomInctance.zoomTo(0, 0, 2);
// });


