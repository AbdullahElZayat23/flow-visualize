var zoomLevelPercentage = 100; // Initial zoom level

function zoomIn() {
  zoomLevelPercentage += 25; // Increment the zoom level by 25%
  applyZoom();
}

function zoomOut() {
  if (zoomLevelPercentage > 25) {
    zoomLevelPercentage -= 25; // Decrement the zoom level by 25% if it's greater than 25%
  } else if (zoomLevelPercentage > 5) {
    zoomLevelPercentage -= 5; // Decrement the zoom level by 5% if it's greater than 5%
  } else {
    zoomLevelPercentage = 5; // Set the zoom level to the minimum value of 5%
  }
  applyZoom();
}


function resetZoom() {
  zoomLevelPercentage = 100;
  applyZoom();
}

function applyZoom() {
  let chartContainer = document.querySelector(".chart");
  // Calculate the scroll position ratios
  let scrollTopRatio = chartContainer.scrollTop / chartContainer.scrollHeight;
  let scrollLeftRatio = chartContainer.scrollLeft / chartContainer.scrollWidth;


  document.querySelectorAll(".chart > *").forEach(node => {
    node.style.zoom = `${zoomLevelPercentage}%`;
  });

  chartContainer.scrollTop = scrollTopRatio * chartContainer.scrollHeight;
  chartContainer.scrollLeft = scrollLeftRatio * chartContainer.scrollWidth;
}
