// Get the import file input element
const importFileInput = document.getElementById('importFile');
const externalFlow = document.getElementsByName('external-source')[0];
// Add an event listener to the import file input element
importFileInput.addEventListener('change', (event) => {
  // Get the selected file from the input element
  const file = event.target.files[0];

  // Create a file reader
  const reader = new FileReader();

  // Add an event listener to the file reader
  reader.addEventListener('load', (event) => {
    try {
      // Parse the JSON data from the file content
      const jsonData = JSON.parse(event.target.result);
      if (jsonData?.steps?.length) {
        // Do something with the imported data
        // For example, update the flow visualization
        updateFlowVisualization(jsonData);
      } else {
        showFeedBack({
          title: "No Steps To Render",
          text: "There are no steps to render at the moment",
          icon: "info",
        });
      }

    } catch (error) {
      // Handle errors during the JSON parsing
      showFeedBack({
        title: "Error",
        text: "Failed to import JSON data. Please make sure the selected file contains valid / pure JSON data.",
        icon: "error"
      });
    }
    //Clear file selection
    importFileInput.value = '';
  });
  reader.onerror = function () {
    showFeedBack({
      title: "Error",
      text: "Error while reading the file",
      icon: "error"
    });
  }
  // Read the selected file as text
  reader.readAsText(file);
});

externalFlow.addEventListener('change', (event) => {
  // Get the selected file from the input element
  const file = event.target.files[0];

  // Create a file reader
  const reader = new FileReader();

  // Add an event listener to the file reader
  reader.addEventListener('load', (event) => {
    try {
      // Parse the JSON data from the file content
      const jsonData = JSON.parse(event.target.result);
      if (jsonData?.steps?.length) {
        // Do something with the imported data
        // For example, update the flow visualization
        globalThis.uploadedFileJSOnsData = jsonData;
      } else {
        showFeedBack({
          title: "No Data To Read",
          text: "There is no data to read in the selected file.",
          icon: "info",
        });
      }

    } catch (error) {
      // Handle errors during the JSON parsing
      showFeedBack({
        title: "Error",
        text: "Failed to import JSON data. Please make sure the selected file contains valid / pure JSON data.",
        icon: "error"
      });
    }
    //Clear file selection
    externalFlow.value = '';
  });
  reader.onerror = function () {
    showFeedBack({
      title: "Error",
      text: "Error while reading the file",
      icon: "error"
    });
  }
  // Read the selected file as text
  reader.readAsText(file);
});

function updateFlowVisualization(jsonData) {
  try {
    loader.style.display = "block";
    setTimeout(() => {
      globalThis.selectedFlow = jsonData;
      renderGraph();
      loader.style.display = "none";
      showFeedBack({
        title: "Success!",
        text: "Render Success, " + " " + globalThis.renderTimeText,
        icon: "success",
        confirmButtonText: "Ok"
      });
      document.querySelector('.nodeExample1:last-of-type')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 3000);
  } catch (error) {
    showFeedBack({
      title: "Error",
      text: "Render Fail",
      icon: "error"
    });
  }
}

function exportFlow(data, _options = {}) {
  loader.style.display = "block";
  try {
    // Get the flow data
    const flowData = data || globalThis.selectedFlow;
    if (flowData) {
      // Convert the data to JSON
      const jsonData = JSON.stringify(flowData);

      // Create a Blob object from the JSON data
      const blob = new Blob([jsonData], { type: "application/json" });

      // Create a link element to download the data
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${_options?.name || flowData.name}-extracted | ${new Date().toISOString()}.json` || 'flow.json';

      // Add the link element to the DOM and click it to download the data
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link and revoking the object URL
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      showFeedBack({
        title: "No data to export",
        text: "There is no data to export at the moment.",
        icon: "info",
      });
    }
  } catch (error) {
    showFeedBack({
      title: "Error",
      text: "Export Fail",
      icon: "error"
    });
  } finally {
    loader.style.display = "none";
  }
}
function convertMongoDbTypesToJSON(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((val) => convertMongoDbTypesToJSON(val));
  } else {
    return Object.keys(obj).reduce((acc, key) => {
      let val = obj[key];
      if (val instanceof Date) {
        acc[key] = val;
      } else if (typeof val === 'function' && /^function\s+\w*\(\)\s+\{\s+\[native\s+code\]\s+\}$/.test(val.toString())) {
        acc[key] = val;
      } else {
        switch (val.constructor.name) {
          case 'ObjectID':
            acc[key] = val.toString();
            break;
          case 'NumberInt':
            acc[key] = parseInt(val.valueOf());
            break;
          case 'NumberDecimal':
            acc[key] = parseFloat(val.valueOf());
            break;
          case 'Date':
            acc[key] = val.toISOString();
            break;
          default:
            acc[key] = convertMongoDbTypesToJSON(val);
        }
      }
      return acc;
    }, {});
  }
}
