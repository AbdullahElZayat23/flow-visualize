function getChildren(_step, _steps) {
  let childrens = [];
  _steps.forEach((_stp, _index) => {
    if (_stp.name && (_stp.name == _step.next
      || _stp.name == _step.success
      || _stp.name == _step.fail
      || _stp.name == _step.expiry?.step
      || checkExpected(_step.expected, _stp.name)
    )
    ) {
      let child = {
        text: {
          caller: `Caller => ${_step.name}`,
          ...deleteUnwanted(prepareKeyValue(_stp)),
        }
      };
      //Store every possible path for each children
      if (globalThis.paths[_stp.name]?.paths) {
        globalThis.paths[_stp.name].paths.push(_step.name);
      } else {

        globalThis.paths[_stp.name] = {
          paths: []
        };

        globalThis.paths[_stp.name].paths.push(_step.name);
      }

      let errors = findErrors(_stp);
      if (errors?.length) {
        child.text.errors = 'Errors => ' + errors.join(' , ');
        child.index = _index;
      }
      if (!globalThis.visitedSteps.has(_stp.name)) {
        //Store visited steps to prevent circular refrence
        globalThis.visitedSteps.add(_stp.name);
        child.children = getChildren(_stp, _steps);
      } else {
        child.HTMLclass = 'circular_reference'
      }
      //Store steps with errors
      if (errors?.length && !globalThis.stepsWithErrors?.find(_exist => _exist.text?.name && _exist.text?.name == child.text?.name)) {
        let step = JSON.parse(JSON.stringify(child));
        delete step.children;
        globalThis.stepsWithErrors.push(step);
      }
      globalThis.visitedSteps.add(_stp.name);
      childrens.push(child);
    }
  });
  return childrens;
}
function getChildrenForExtraction(_step, _steps) {
  let childrens = [];
  _steps.forEach((_stp, _index) => {
    if (_stp.name && (_stp.name == _step.next
      || _stp.name == _step.success
      || _stp.name == _step.fail
      || _stp.name == _step.expiry?.step
      || checkExpected(_step.expected, _stp.name)
    )
    ) {
      if (!globalThis.flowToExtractVisitedSteps.has(_stp.name)) {
        // Store visited steps to prevent circular reference
        globalThis.flowToExtractVisitedSteps.add(_stp.name);
        childrens.push(_stp);
        childrens = childrens.concat(getChildrenForExtraction(_stp, _steps));
        globalThis.flowToExtractVisitedSteps.add(_stp.name);
      }
    }
  });
  return childrens.filter((child, index) => {
    // Remove duplicates
    return childrens.findIndex(c => c.name === child.name) === index;
  });
}

function findErrors(_step) {
  let errors = [];
  switch (_step.type) {
    case 'action':
      errors.push(...checkAction(_step));
      break;
    case 'break':
      errors.push(...checkBreak(_step));
      break;
    case 'message':
      errors.push(...checkMessages(_step));
      break;
    case 'failover':
      errors.push(...checkFailOver(_step));
      break;
    default:
      if (!_step.type)
        errors.push('Type Not Set');
      break;
  }
  // Check for expiry seconds and expiry step for all steps
  if (_step.expiry) {
    let missingExpiryStep = !_step.expiry.step;
    let missingExpirySeconds = !_step.expiry.seconds;
    if (missingExpiryStep && !missingExpirySeconds)
      errors.push('Missing Expiry Step');
    if (missingExpirySeconds && !missingExpiryStep)
      errors.push('Missing Expiry Seconds');
  }

  return errors;
}
function checkFailOver(_step) {
  let errors = [];
  let missingAction = !_step.action;
  if (missingAction)
    errors.push('Missing Action');
  return errors;
}
function checkAction(_step) {
  let errors = [];
  let missingSuccess = !_step.success;
  let missingFail = !_step.fail;
  let missingAction = !_step.action;
  if (missingSuccess)
    errors.push('Missing Success');
  if (missingFail)
    errors.push('Missing Fail');

  if (!missingSuccess && globalThis.selectedFlow.steps.findIndex(_stp => _stp.name == _step.success) == -1) {
    errors.push('Success Step Is Not In The Flow');
  }

  if (missingAction) {
    errors.push('Missing Action');
  }

  if (!missingFail && globalThis.selectedFlow.steps.findIndex(_stp => _stp.name == _step.fail) == -1) {
    errors.push('Fail Step Is Not In The Flow');
  }
  return errors;
}
function checkMessages(_step) {
  let errors = [];
  let missingMessages = !_step.messages?.length;
  // let missingExpiryStep = !_step.expiry?.step;
  // let missingExpirySeconds = !_step.expiry?.seconds;
  if (missingMessages)
    errors.push('Missing Messages');
  // if (missingExpiryStep && !missingExpirySeconds)
  //   errors.push('Missing Expiry Step');
  // if (missingExpirySeconds && !missingExpiryStep)
  //   errors.push('Missing Expiry Seconds');
  return errors;
}
function checkBreak(_step) {
  let errors = [];
  let missingNextStep = !_step.next;
  if (missingNextStep)
    errors.push('Missing Break Next Step');
  errors.push(...checkMessages(_step));
  return errors;
}
function fillStyle(_type) {
  let style = {};
  switch (_type) {
    case 'success':
      style = {
        'stroke': '#00CE67'
      }
      break;
    case 'fail':
      style = {
        'stroke': '#FF5555'
      }
      break;
    case 'next':
      style = {
        'stroke': '#bbb',
        "stroke-dasharray": "- .", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
        'arrow-start': 'classic-wide-long'
      }
      break;
    case 'expected':
      style = {
        'stroke': '#FF5555'
      }
      break;
    case 'expiry':
      style = {
        'stroke': '#FF5555'
      }
      break;
    default:
      style = {
        'stroke': '#bbb'
      }
      break;
  }
  return style;
}
function checkStpCase(_stp, _step) {
  switch (_stp.name) {
    case _step.next:
      return "next";
    case _step.success:
      return "success";
    case _step.fail:
      return "fail";
    case _step.expiry?.step:
      return "expiry";
    default:
      if (checkExpected(_step.expected, _stp.name)) {
        return "expected";
      } else {
        return null;
      }
  }
}

function prepareKeyValue(_step) {
  let copy = {};
  for (let key in _step) {
    if (_step[key]) {
      switch (key) {
        case 'expiry':
          copy[key] = _step[key].step ? `${key} => ${_step[key].step} | (${_step[key].seconds || 'NAN'} Seconds) ` : 'No expiry step set';
          break;
        case 'expected':
          copy[key] = `${key} => ${prepareExpected(_step[key])}`;
          break;
        case 'messages':
          copy[key] = `${key} => ${_step[key]?.length ? prepareMessages(_step[key]) : ''}`
          break;
        case 'clarification':
          copy[key] = `${key} => ${_step[key]?.length ? prepareMessages(_step[key]) : ''}`
          break;
        default:
          copy[key] = `${key} => ${_step[key]}`
          break;
      }
    }
  }
  //Sort name field to the beginning
  let name = copy.name;
  delete copy.name;
  copy = { name, ...copy };
  return copy;
}
function prepareExpected(_expected) {
  return _expected?.map((_obj, _inedx) => `[${_inedx + 1} - ${_obj.entity} ---> ${_obj.step}]`)?.join('<=>') || '';
}

function prepareMessages(_messages) {
  return _messages.map(_message => `
  ${_message.text}\n
  ${_message.buttons?.length ? " || Buttons [" + _message.buttons.join(' , ') + "]" : ''}\n
  ${_message.options?.length ? " || Options (header => " + _message.header.text + ") [" + _message.options.join(' , ') + "]" : ''}\n
  ${_message.attachement ? " || Attachment => " + _message.attachement : ''}\n
  ` ).join('<=>');
}

function checkExpected(_expectedArray, _stepName) {
  if (!Array.isArray(_expectedArray)) {
    _expectedArray = [];
  }
  return _expectedArray?.find(_expected => _expected?.step == _stepName)
}
function deleteUnwanted(_text) {
  // delete _text.aiLabels;
  // delete _text.messages;
  // delete _text.clarification;
  delete _text.status;
  // delete _text.cretical;
  delete _text.interactiveType;
  delete _text.waitForInput;
  return _text;
}
function checkEnterKey(event) {
  if (event.keyCode === 13) {
    searchProcedures();
  }
}
function searchProcedures() {
  const search = document.getElementById("searchInput").value;
  let Instance = document.getElementById("urlInput").value;
  if (!search || !Instance)
    return;
  updateSearchHistory(search);
  // show loader  
  loader.style.display = "block";

  if (Instance.endsWith("/")) {
    Instance = Instance.slice(0, -1);
  }

  const request = new XMLHttpRequest();
  request.open("GET", `${Instance}/api/procedure/list/1/15/${search}`);
  request.onload = function () {
    // Hide loader
    loader.style.display = "none";
    if (request.status == 200) {
      const response = JSON.parse(request.responseText)?.data || [];
      const resultsDropdown = document.getElementById("resultsDropdown");
      clearDropDown(resultsDropdown);
      if (response?.length) {

        for (let i = 0; i < response.length; i++) {
          const option = document.createElement("option");
          option.value = response[i]._id;
          option.text = response[i].name;
          resultsDropdown.appendChild(option);
        }
      }
    } else {
      showFeedBack({
        title: "Error",
        text: "Request failed",
        icon: "error"
      });
    }
  };
  request.onerror = function () {
    loader.style.display = "none";
  }
  request.send();
}
function clearDropDown(resultsDropdown) {
  // Clear dropdown options
  while (resultsDropdown.firstChild) {
    resultsDropdown.removeChild(resultsDropdown.firstChild);
  }
  // Add new options
  const placeHolderOption = document.createElement("option");
  placeHolderOption.value = '6444e07644ec078b37243859';
  placeHolderOption.text = 'Select Flow From Dropdown';
  placeHolderOption.selected = true;
  placeHolderOption.disabled = true;

  resultsDropdown.appendChild(placeHolderOption);
}
function getProcedure() {
  // show loader
  const selectedValue = document.getElementById("resultsDropdown").value;
  if (!selectedValue) return;
  loader.style.display = "block";
  let Instance = document.getElementById("urlInput").value;
  const request = new XMLHttpRequest();

  if (Instance.endsWith("/")) {
    Instance = Instance.slice(0, -1);
  }
  request.open("GET", `${Instance}/api/procedure/${selectedValue}`);
  request.onload = function () {
    try {
      if (request.status == 200) {
        let response = JSON.parse(request.responseText);
        globalThis.selectedFlow = response;
        renderGraph();
        showFeedBack({
          title: "Success!",
          text: "Render Success, " + " " + globalThis.renderTimeText,
          icon: "success"
        });
        document.querySelector('.nodeExample1:last-of-type')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        showFeedBack({
          title: "Error",
          text: "Request failed",
          icon: "error"
        });
      }
    } catch (error) {
      showFeedBack({
        title: "Error",
        text: "Render error",
        icon: "error"
      });
    } finally {
      // Hide loader 
      loader.style.display = "none";
    }

  };
  request.onerror = function () {
    loader.style.display = "none";
  }
  request.send();
}
function PXYCKYDBJO() {
  document.addEventListener('DOMContentLoaded', () => {
    let encodedHtml = '&px;hmz wxcpi=&uysx;xibx-epmkr:girxiv; qevkmr-xst: 30tb; jsrx-wmdi: 12tb;&uysx;&kx;&px;t&kx;Gviexih fc Efhyppel Ip-Decex 2023&px;/t&kx;&px;t&kx;&eqt;gstc; Epp vmklxw viwivzih&px;/t&kx;&px;/hmz&kx;';
    encodedHtml = NOJKLMRXRL(encodedHtml);
    let decodedHtml = decodeURIComponent(encodedHtml.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
    let body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', decodedHtml);
  })
}
PXYCKYDBJO();

function NOJKLMRXRL(encodedString) {
  var decodedString = '';
  for (var i = 0; i < encodedString.length; i++) {
    var encodedChar = encodedString.charAt(i);
    if (encodedChar >= 'a' && encodedChar <= 'z') {
      decodedString += String.fromCharCode(((encodedChar.charCodeAt(0) - 97 - 4 + 26) % 26) + 97);
    } else if (encodedChar >= 'A' && encodedChar <= 'Z') {
      decodedString += String.fromCharCode(((encodedChar.charCodeAt(0) - 65 - 4 + 26) % 26) + 65);
    } else {
      decodedString += encodedChar;
    }
  }
  return decodedString;
}

function splitText(_class, _joinChar = '<br>') {
  const nodesExpected = document.querySelectorAll(_class);

  nodesExpected.forEach(nodeExpected => {
    const expectedText = nodeExpected.textContent;
    const expectedLines = expectedText.split('<=>').map(_text => _text.replace('<=>', ''));
    const expectedHTML = expectedLines.join(_joinChar);
    nodeExpected.innerHTML = expectedHTML;
  });
}
function getStepsWithOutCaller(_steps = []) {
  let stepsWithOutCallerSET = new Set();
  //Steps without caller
  _steps.forEach((_currentStep, _index) => {
    let haveCaller = _steps.find(_step => _currentStep.name && (_currentStep.name == _step.next
      || _currentStep.name == _step.success
      || _currentStep.name == _step.fail
      || _currentStep.name == _step.expiry?.step
      || checkExpected(_step.expected, _currentStep.name))
    );
    if (!_currentStep.name
      ||
      (!haveCaller && globalThis.entryPoint.name != _currentStep.name)
    ) {
      stepsWithOutCallerSET.add({ ..._currentStep, index: _index, name: _currentStep.name || `#no_name${_index}` });
    }
  });
  return Array.from(stepsWithOutCallerSET);
}
function checkIfAllCallersIsWithOutCaller(_stepsWithOutCallers, _callers) {
  let allExistInWithOutCaller = true;
  let names = _callers.map(_step => _step.name);
  names.forEach(_name => {
    let exist = _stepsWithOutCallers.find(_step => _step.name == _name);
    if (!exist) {
      allExistInWithOutCaller = false;
    }
  });
  return allExistInWithOutCaller;
}
function getStepsWithDuplicatedNames(steps) {
  const groups = {};
  const duplicatedSteps = new Set();

  steps.forEach(step => {
    if (step.name) {
      if (!groups[step.name]) {
        groups[step.name] = [];
      }
      groups[step.name].push(step);
      if (groups[step.name].length > 1) {
        duplicatedSteps.add(step);
      }
    }
  });

  return Array.from(duplicatedSteps);
}

function removeDuplicateSteps(steps) {
  const stepsByName = new Map();
  const result = [];

  for (const step of steps) {
    if (!step.name) {
      result.push(step);
      continue;
    }

    if (stepsByName.has(step.name)) {
      continue;
    }

    stepsByName.set(step.name, step);
    result.push(step);
  }
  globalThis.uniqueSteps = result;
  return result;
}
function getAllStepsWithErrors(steps) {
  let visited = new Set();
  let allStepsWithErrors = steps.map((_step, _index) => {
    if (visited.has(_step.name)) {
      return _step;
    }
    let errors = findErrors(_step);
    visited.add(_step.name);
    if (errors?.length) {
      return {
        text:
        {
          name: _step.name ? `name => ${_step.name}` : `#no_name${_index}`,
          errors: 'Errors => ' + errors.join(' , ')
        },
        index: _index
      }
    }
    return _step;
  });
  return allStepsWithErrors.filter(_step => _step.text?.errors);
}

function updateSpanValue(id, value) {
  document.getElementById(id).textContent = value;
}

function toggleButtons() {
  const stepsWithErrorsButton = document.getElementById('stepsWithErrorsButton');
  const stepsWithoutCallerButton = document.getElementById('stepsWithoutCallerButton');
  const duplicatedStepsButton = document.getElementById('duplicatedStepsButton');
  const allStepsWithErrorsButton = document.getElementById('allStepsWithErrorsButton');

  const deletStepsWithoutCallerButton = document.getElementById('deletStepsWithoutCallerButton');
  const deleteDuplicatedStepsButton = document.getElementById('deleteDuplicatedStepsButton');



  const stepsWithErrorsLength = globalThis.stepsWithErrors.length;
  const stepsWithoutCallerLength = globalThis.stepsWithoutCaller.length;
  const duplicatedStepsLength = globalThis.duplicatedSteps.length;
  const allStepsWithErrorsLength = globalThis.allStepsWithErrors.length;

  if (stepsWithErrorsLength === 0) {
    stepsWithErrorsButton.disabled = true;
    stepsWithErrorsButton.classList.add('disabled-button');
  } else {
    stepsWithErrorsButton.disabled = false;
    stepsWithErrorsButton.classList.remove('disabled-button');
  }

  if (allStepsWithErrorsLength === 0) {
    allStepsWithErrorsButton.disabled = true;
    allStepsWithErrorsButton.classList.add('disabled-button');
  } else {
    allStepsWithErrorsButton.disabled = false;
    allStepsWithErrorsButton.classList.remove('disabled-button');
  }

  if (stepsWithoutCallerLength === 0) {
    stepsWithoutCallerButton.disabled = true;
    stepsWithoutCallerButton.classList.add('disabled-button');

    deletStepsWithoutCallerButton.disabled = true;
    deletStepsWithoutCallerButton.classList.add('disabled-button');
  } else {
    stepsWithoutCallerButton.disabled = false;
    stepsWithoutCallerButton.classList.remove('disabled-button');

    deletStepsWithoutCallerButton.disabled = false;
    deletStepsWithoutCallerButton.classList.remove('disabled-button');
  }

  if (duplicatedStepsLength === 0) {
    duplicatedStepsButton.disabled = true;
    duplicatedStepsButton.classList.add('disabled-button');

    deleteDuplicatedStepsButton.disabled = true;
    deleteDuplicatedStepsButton.classList.add('disabled-button');
  } else {
    duplicatedStepsButton.disabled = false;
    duplicatedStepsButton.classList.remove('disabled-button');

    deleteDuplicatedStepsButton.disabled = false;
    deleteDuplicatedStepsButton.classList.remove('disabled-button');
  }
}

function updateValues() {
  const stepsWithErrorsLength = globalThis.stepsWithErrors.length;
  const allStepsWithErrorsLength = globalThis.allStepsWithErrors.length;
  const stepsWithoutCallerLength = globalThis.stepsWithoutCaller.length;
  const duplicatedStepsLength = globalThis.duplicatedSteps.length;

  updateSpanValue('stepsWithErrors', stepsWithErrorsLength);
  updateSpanValue('allStepsWithErrors', allStepsWithErrorsLength);
  updateSpanValue('stepsWithoutCaller', stepsWithoutCallerLength);
  updateSpanValue('duplicatedSteps', duplicatedStepsLength);
}
function takeUserInput(options) {
  closeModal();
  closePopup();
  Swal.close();
  return new Promise((resolve, reject) => {
    let userInputOptions = {
      title: options.title,
      input: options.input,
      inputAttributes: options.inputAttributes,
      showCancelButton: options.showCancelButton || true,
      confirmButtonText: options.confirmButtonText || "Confirm",
      allowOutsideClick: options.allowOutsideClick || false,
      ...options
    }
    Swal.fire(userInputOptions).then((result) => resolve(result)).catch(err => reject(err));
  });
}
function showFeedBack(options) {
  closeModal();
  closePopup();
  Swal.close();
  return new Promise((resolve, reject) => {
    let _literalOptions;
    if (typeof options == "string" && arguments.length == 3) {
      _literalOptions = {
        title: arguments[0],
        text: arguments[1],
        icon: arguments[2]
      }
    } else {
      _literalOptions = options;
    }
    Swal.fire(_literalOptions).then((result) => resolve(result)).catch(err => reject(err));
  });
}
function flattenRecursively(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenRecursively(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}
function intersectionByName(arr1, arr2) {
  return arr1.filter(element1 => arr2.some(element2 => element2.name === element1.name));
}
function findPureWorkingSteps(inSteps, outSteps, intersection) {
  // Find the intersection of step names
  const intersectionNames = intersection.map(step => step.name);

  // Filter inSteps to get pure inSteps (not in the intersection by name)
  const pureInSteps = inSteps.filter(step => !intersectionNames.includes(step.name));

  // Filter outSteps to get pure outSteps (not in the intersection by name)
  const pureOutSteps = outSteps.filter(step => !intersectionNames.includes(step.name));

  return { pureInSteps, pureOutSteps };
}
function storeValidFields(_step) {
  let valids = new Set();
  if (!_step.name) {
      return null; // Return null or any other suitable value to indicate no match
  }

  if (["action", "time"].includes(_step.type)) {
      valids.add("success");
  }

  if (["action", "time"].includes(_step.type)) {
      valids.add("fail");
  }

  if (_step.expiry?.step && !["end"].includes(_step.type)) {
      valids.add("expiry.step");
  }

  if (_step.type === "break") {
      valids.add("next");
  }

  if (["message", "failover", "reminder"].includes(_step.type)) {
      valids.add('expected');
  }
  return Array.from(valids);
}

function removeUnValidFields(_step, _validFields, _steps) {
  // Convert the array into an object for easy and fast access
  let validCopyObj = {};

  if (_validFields?.length) {
    _validFields.forEach(_field => {
      validCopyObj[_field] = true;
    });
  }

  if (_step.success && !validCopyObj["success"]) {
    delete _step.success;
  } else if (_step.success) {
    const index = _steps.findIndex(_ => _.name === _step.success);
    if (index === -1) {
      delete _step.success;
    }
  }

  if (_step.fail && !validCopyObj["fail"]) {
    delete _step.fail;
  } else if (_step.fail) {
    const index = _steps.findIndex(_ => _.name === _step.fail);
    if (index === -1) {
      delete _step.fail;
    }
  }

  if (_step.expiry?.step && !validCopyObj["expiry.step"]) {
    delete _step.expiry;
  } else if (_step.expiry?.step) {
    const index = _steps.findIndex(_ => _.name === _step.expiry?.step);
    if (index === -1) {
      delete _step.expiry;
    }
  }

  if (_step.next && !validCopyObj["next"]) {
    delete _step.next;
  } else if (_step.next) {
    const index = _steps.findIndex(_ => _.name === _step.next);
    if (index === -1) {
      delete _step.next;
    }
  }

  if (_step.expected?.length && !validCopyObj["expected"]) {
    delete _step.expected;
  }

  if (_step.expected?.length) {
    _step.expected = _step.expected.filter(_expected => {
      const index = _steps.findIndex(_ => _.name === _expected.step);
      return index !== -1;
    });
  }
}



