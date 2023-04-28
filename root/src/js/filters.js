let popup = document.getElementById("popup");

function showPopup() {
  popup.classList.add("active");
  toggleButtons();
}

function closePopup() {
  popup.classList.remove("active");
}

function optionSelected(_option) {
  if (globalThis.selectedFlow?.name && globalThis.selectedFlow?.steps?.length) {
    switch (_option) {
      case '1':
        showReport(globalThis.stepsWithErrors.map(_step => ({
          Name: _step.text.name.replace('name => ', ''),
          Errors: _step.text.errors.replace('Errors => ', ''),
          index: _step.index
        })), ['Name', 'Errors', 'Index'], globalThis.selectedFlow.name, 'steps-with-erros');
        break;
      case '2':
        showReport(globalThis.stepsWithoutCaller.map(_step => ({
          Name: _step.name,
          Template: _step.template,
          index: _step.index
        })), ['Name', 'Is template', 'Index'], globalThis.selectedFlow.name, 'steps-without-caller');
        break;
      case '3':
        showReport(globalThis.duplicatedSteps.map(_step => ({
          Name: _step.name,
        })), ['Name'], globalThis.selectedFlow.name, 'duplicated-steps');
        break;
      case '4':
        showReport(globalThis.allStepsWithErrors.map(_step => ({
          Name: _step.text.name.replace('name => ', ''),
          Errors: _step.text.errors.replace('Errors => ', ''),
          index: _step.index,
          hasCaller: globalThis.stepsWithoutCaller.find(_stp => _stp.name == _step.text.name.replace('name => ', '')) ? false : true
        })), ['Name', 'Errors', 'Index', 'Has caller'], globalThis.selectedFlow.name, 'all-steps-with-errors');
        break;
      case '5':
        showModal();
        removeOptions();
        addOptions(globalThis.uniqueSteps);
        break;
      default:
        break;
    }
  } else {
    swal({
      title: "No Steps To Filter",
      text: "There are no steps to filter at the moment. Please redner a flow first",
      icon: "info",
    });
  }
  closePopup();
}
function extractSteps() {
  let steps = [];
  let type = document.getElementById('steps_type').value;
  if (!type)
    return;
  switch (type) {
    case 'template':
      steps = globalThis.selectedFlow.steps.filter(_step => _step.template);
      break;
    case 'none':
      steps = globalThis.selectedFlow.steps.filter(_step => !_step.type);
      break;
    default:
      steps = globalThis.selectedFlow.steps.filter(_step => _step.type == type);
      break;
  }
  closeModal();
  if (!steps.length) {
    swal({
      title: "No Steps Found With The Choosen Criteria",
      text: "There are no steps With The Choosen Criteria",
      icon: "info",
    });
    return;
  }
  //Create report  
  exportFlow({ steps, name: globalThis.selectedFlow.name });
}
function showModal() {
  let moreModal = document.getElementById('moreModal');
  moreModal.classList.add("active");
}
function closeModal() {
  let moreModal = document.getElementById('moreModal');
  moreModal.classList.remove("active");
}

function showReport(data, _tableHeaders, _flowName, _fileName) {
  if (data?.length)
    createTable(data, _tableHeaders, _flowName, _fileName);
}
function createTable(data, tableHeaders, flowName, fileName) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.sheet_add_aoa(worksheet, [
    tableHeaders
  ], { origin: 'A1' });

  XLSX.utils.book_append_sheet(workbook, worksheet, "Steps With Errors");

  XLSX.writeFile(workbook, `${flowName}-${fileName}-${new Date().toISOString()}.xlsx`);
}
function searchStep() {
  closeModal();
  // Get the step number entered by the user
  let stepNumber = parseInt(document.getElementById('step-number').value);
  let stepsObj
  try {
    stepsObj = globalThis.selectedFlow?.steps[stepNumber];
    if (!stepsObj) {
      swal({
        title: "Step not Found",
        text: "There is no step in the tree with the index you entered, or the step has no name. Please check your inputs.",
        icon: "info",
      });
      return;
    }
  } catch (error) {
    swal({
      title: "Step not Found",
      text: "There is no step in the tree with the index you entered, or the step has no name. Please check your inputs.",
      icon: "info",
    });
    return;
  }
  // Get the step with the specified index
  let step = null;
  let pElements = document.querySelectorAll('.nodeExample1 p.node-name');
  for (let i = 0; i < pElements.length; i++) {
    if (pElements[i].textContent.trim() === `name => ${stepsObj?.name}` && ![...pElements[i].parentNode.classList].includes('circular_refrence')) {
      step = pElements[i].parentNode;
      break;
    }
  }

  // Check if the step exists
  if (step) {
    // Scroll to the step
    step.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Add some highlighting to the step
    step.style.backgroundColor = '#ffffcc';
    setTimeout(function () {
      step.style.backgroundColor = '';
    }, 4000);
  } else {
    swal({
      title: "Step not Found",
      text: "There is no step in the tree with the index you entered, or the step has no name. Please check your inputs.",
      icon: "info",
    });
  }
}
function addOptions(steps) {
  const select = document.getElementById("steps_dropdown");
  const options = steps?.map(step => {
    const opt = document.createElement("option");
    opt.text = step.name;
    opt.value = step.name;
    return opt;
  });
  if (options?.length) {
    select.append(...options);
    updateDropdown();
  }
}

function removeOptions() {
  let select = document.getElementById("steps_dropdown");
  select.innerHTML = "";
  updateDropdown();
}

function updateDropdown() {
  const select = document.getElementById("steps_dropdown");
  if (select.fstdropdown) {
    select.fstdropdown.rebind();
  }
}
function extractFlow() {
  const select = document.getElementById("steps_dropdown");
  const selectedValue = select?.value;
  let parentNode = globalThis.selectedFlow?.steps.find(step => step.name == selectedValue);
  closeModal();
  if (!parentNode) {
    swal({
      title: "No Step Found With The Entered Name",
      text: "Make Sure Step Name Is Correct.",
      icon: "info",
    });
    return;
  }
  loader.style.display = "block";
  //get children
  globalThis.flowToExtractVisitedSteps = new Set();
  let flowSteps = kixGlmphvirJsvIbxvegxmsr(parentNode, globalThis.selectedFlow.steps);
  flowSteps.unshift(parentNode);
  let newFlowToExtractObj = {
    ...globalThis.selectedFlow,
    steps: flowSteps
  }
  exportFlow(newFlowToExtractObj);
}
function mergeSteps() {
  closeModal();
  if (!globalThis.uploadedFileJSOnsData?.steps?.length) {
    swal({
      title: "Select Data Source",
      text: "Select Data Source To Merge From",
      icon: "info",
    });
    return;
  }

  const selectedSteps = globalThis.selectedFlow.steps;
  const uploadedSteps = globalThis.uploadedFileJSOnsData.steps;

  // create a Map object to hold the merged steps, using step names as keys
  const mergedStepsMap = new Map();

  // add selected steps to the mergedStepsMap
  selectedSteps.forEach(step => {
    mergedStepsMap.set(step.name, step);
  });

  // iterate through each uploaded step and add it to the mergedStepsMap,
  // overwriting any existing step with the same name
  uploadedSteps.forEach(step => {
    mergedStepsMap.set(step.name, step);
  });

  // export the merged steps to the selected flow
  exportFlow({
    ...globalThis.selectedFlow,
    steps: Array.from(mergedStepsMap.values())
  },
    {
      name: `${globalThis.selectedFlow.name}-merged`
    });
}
function addStep() {
  closeModal();
  let steps = document.getElementById('step-text-area').value;
  let parsedSteps;
  let stepsErrors = [];
  try {
    parsedSteps = JSON.parse(steps);
  } catch (error) {
    swal('Error', 'Failed to parse JSON data. Please make sure the inserted step/s contains valid / pure JSON data.', 'error');
    return;
  }
  if (!Array.isArray(parsedSteps)) {
    parsedSteps = [parsedSteps];
  }

  parsedSteps.forEach((_step, _index) => {
    let errors = jmrhIvvsvw(_step);
    if (errors.length) {
      stepsErrors.push({
        name: _step.name,
        errors
      });
    }
  });

  if (stepsErrors.length) {
    showReport(stepsErrors.map(_step => ({
      Name: _step.name,
      Errors: _step.errors.join(', '),
    })), ['Name', 'Errors'], 'new steps', 'inserted-steps-with-errors');
  } else {
    let newSteps = globalThis.selectedFlow.steps.concat(parsedSteps);
    let jsonData = { ...globalThis.selectedFlow, steps: newSteps };
    updateFlowVisualization(jsonData);
  }
}



