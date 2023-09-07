let popup = document.getElementById("popup");

String.prototype.removeEscapeCharacters = function () {
  return this.replace(/[\n\r\t]/g, ' ');
};

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
  let duplicates = [];
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

  parsedSteps.forEach(_step => {
    let duplicated = globalThis.selectedFlow.steps.find(_stp => _stp.name == _step.name);
    if (duplicated) duplicates.push(_step);
  });

  if (duplicates.length) {
    showReport(duplicates.map(_step => ({
      Name: _step.name
    })), ['Name'], 'new steps', 'inserted-steps-with-duplication');
    swal('Error', 'Inserted Steps Contains Duplication, See The Exported Sheet For The Details.', 'error');
    return;
  }

  if (stepsErrors.length) {
    showReport(stepsErrors.map(_step => ({
      Name: _step.name,
      Errors: _step.errors.join(', '),
    })), ['Name', 'Errors'], 'new steps', 'inserted-steps-with-errors');

    swal('Error', 'Inserted Steps Contains Errors, See The Exported Sheet For The Details.', 'error');
  } else {
    let newSteps = globalThis.selectedFlow.steps.concat(parsedSteps);
    let jsonData = { ...globalThis.selectedFlow, steps: newSteps };
    updateFlowVisualization(jsonData);
  }
}

function traceChildrenPaths() {
  closeModal();

  //Export json file
  exportFlow({
    paths: globalThis.paths
  },
    {
      name: `${globalThis.selectedFlow.name}-paths`
    });

  //Export excel sheet
  const fieldsConverted = Object.keys(globalThis.paths).map(key => {
    return { key, value: globalThis.paths[key] };
  });

  showReport(fieldsConverted.map(_trace => ({
    Name: _trace.key,
    Paths: _trace.value?.paths?.join(' , ')
  })), ['Name', 'Paths'], globalThis.selectedFlow.name, 'childrens-trace');

}

// Debounce function to delay the execution of the event handler
function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}


function handleInputChangeInTextSearch() {
  let keyword = document.getElementById("textSearchInput").value;
  let matches = [];
  let deepSearchMatches = [];
  if (keyword.trim()?.length && globalThis.selectedFlow?.steps?.length) {
    if (advancedsearch.checked) {
      deepSearchMatches = deepSearch(keyword.toLowerCase());
      displayDeepSearchResults(deepSearchMatches);
    } else {
      globalThis.selectedFlow?.steps?.forEach(_step => {
        let match = serachForTextInsideStep(keyword.toLowerCase(), _step);
        if (match)
          matches.push(match);
      });
      displaySearchResults(matches);
    }


    if (deepSearchMatches.length || matches.length) {
      // Create an "X" icon element
      const closeIcon = document.createElement("i");
      closeIcon.className = "fa-sharp fa-solid fa-circle-xmark";
      closeIcon.style.cursor = "pointer";
      closeIcon.style.float = "right";
      closeIcon.style.margin = "3px";
      
      
      searchResults.insertBefore(closeIcon, searchResults.firstChild);

      // Close the dropdown when the "X" icon is clicked
      closeIcon.addEventListener("click", function () {
        searchResults.style.display = 'none';
      });
    }

  }
}
// Add the event listener with debounce
document.getElementById("textSearchInput").addEventListener("keyup", debounce(handleInputChangeInTextSearch, 1000));

function serachForTextInsideStep(_keyword, _step) {
  let matches = [];
  let messagesMatch = compareKeywordWithStepContent(_step.messages, _keyword, 'MSGS');
  let clarificationsMatch = compareKeywordWithStepContent(_step.clarification, _keyword, 'CLRFC');

  if (messagesMatch.length)
    matches.push(messagesMatch)

  if (clarificationsMatch.length)
    matches.push(clarificationsMatch)

  return matches.length ? { matches, ..._step } : false;
}

function compareKeywordWithStepContent(_messages, _keyword, _section) {
  const matches = [];

  _messages?.forEach(_msg => {
    const match = {
      message: _msg,
      matchedParts: []
    };

    if (_msg.text) {
      findMatchesInString(_msg.text, `text-${_section}`, match, _keyword);
    }

    if (_msg.header?.text) {
      findMatchesInString(_msg.header.text, `header-${_section}`, match, _keyword);
    }

    _msg.buttons?.forEach((btn, index) => {
      if (btn) {
        findMatchesInString(btn, `buttons[${index + 1}]-${_section}`, match, _keyword);
      }
    });

    _msg.options?.forEach((opt, index) => {
      if (opt) {
        findMatchesInString(opt, `options[${index + 1}]-${_section}`, match, _keyword);
      }
    });

    if (match.matchedParts.length) {
      matches.push(match);
    }
  });

  return matches;
}

function findMatchesInString(str, partName, match, _keyword) {
  const contextLength = 10;
  const cleanedStr = str.removeEscapeCharacters().toLowerCase();
  if (cleanedStr.includes(_keyword)) {
    const startIndex = cleanedStr.indexOf(_keyword);
    const endIndex = startIndex + _keyword.length;

    const startContext = Math.max(startIndex - contextLength, 0);
    const endContext = Math.min(endIndex + contextLength, str.length);

    const matchedText = str.substring(startContext, endContext);
    match.matchedParts.push({
      part: partName,
      matchedText
    });
  }
}

function displaySearchResults(matchedResults) {
  searchResults.innerHTML = '';
  if (matchedResults?.length) {
    searchResults.style.display = 'block';

    matchedResults.forEach(result => {
      result.matches.forEach(subMatches => {
        subMatches.forEach(match => {
          match.matchedParts.forEach(part => {
            const li = document.createElement('li');
            li.textContent = `${part.matchedText} - match [${part.part}] - in [${result.name}]`;
            li.dataset.stepname = result.name;
            li.addEventListener('click', handleResultClick);
            searchResults.appendChild(li);
          });
        })
      });
    });
  } else {
    searchResults.style.display = 'none';
  }
}

function handleResultClick(event) {
  // const selectedResult = event.target.textContent;
  const stepname = event.target.dataset.stepname;
  // textSearchInput.value = selectedResult;
  // searchResults.style.display = 'none';
  let data = globalThis.selectedFlow.steps.find(_step => _step.name == stepname)
  openDetailsModel(data);
}

function deepSearch(keyword) {
  let matches = [];

  globalThis.selectedFlow.steps.find(step => {
    for (const field in step) {

      if (!['messages', 'clarification'].includes(field) && typeof step[field] === 'string' && step[field]?.toLowerCase()?.includes(keyword))
        matches.push({ value: step[field], field, step })

      if (field == 'expected') {
        step[field]?.forEach(_expected => {

          if (_expected?.entity?.toLowerCase()?.includes(keyword))
            matches.push({ value: _expected?.entity, field, step })

          if (_expected?.step?.toLowerCase()?.includes(keyword))
            matches.push({ value: _expected?.step, field, step })
        });
      }

      if (field == 'aiLabels') {
        step[field]?.forEach(label => {
          if (label?.toLowerCase()?.includes(keyword))
            matches.push({ value: label, field, step })
        });
      }

      if (field == 'expiry') {
        if (step[field]?.step?.toLowerCase()?.includes(keyword))
          matches.push({ value: step[field]?.step, field, step })
      }

    }
  });
  return matches;
}

function displayDeepSearchResults(matchedResults) {
  searchResults.innerHTML = '';

  if (matchedResults?.length) {
    searchResults.style.display = 'block';

    matchedResults.forEach(result => {
      const li = document.createElement('li');
      li.textContent = `${result.value} - type [${result.field}] - in [${result.step?.name}]`;
      li.dataset.stepname = result.step?.name;
      li.addEventListener('click', handleResultClick);
      searchResults.appendChild(li);
    });
  } else {
    searchResults.style.display = 'none';
  }
}

function openDetailsModel(data) {
  // Generate the HTML view of the object
  const htmlView = createHtmlView(data);
  // Use swal function with HTML content
  swal({
    content: {
      element: 'div',
      attributes: {
        innerHTML: htmlView
      }
    },
    className: 'custom-swal-content',
    width: 'fit-content'
  });
}

function createHtmlView(obj) {
  let html = '';

  html += '<h2 style="text-align: center; font-weight: bold;">' + obj.name + '</h2>';

  function generateHtml(data) {
    if (Array.isArray(data)) {
      html += '<ul>';
      data.forEach((item) => {
        html += '<li>';
        generateHtml(item);
        html += '</li>';
      });
      html += '</ul>';
    } else if (typeof data === 'object' && data !== null) {
      html += '<ul>';
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          html += '<li><span class="key">' + key + ':</span> ';
          generateHtml(value);
          html += '</li>';
        }
      });
      html += '</ul>';
    } else {
      html += '<span class="value">' + data + '</span>';
    }
  }

  generateHtml(obj);
  return html;
}

function stepsContainsEffect() {
  closeModal();
  let stepsWithEeffect = globalThis.selectedFlow.steps.filter(_step => _step.effect);

  if (globalThis.selectedFlow?.failStep?.effect) { 
    stepsWithEeffect.push({ ...globalThis.selectedFlow.failStep, name:"##The Fail step" });
  }

  showReport(stepsWithEeffect.map(_step => ({
    Name: _step.name || 'unknown step name',
    Effect: _step.effect
  })), ['Name', 'Effect'], globalThis.selectedFlow.name, 'steps-with-effect');
}

