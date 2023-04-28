/*Un-used*/
function disableButtons(_state) {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.disabled = _state;
    }
  }
  
  function prepareActions(_actions, _steps) {
    let steps = [];
    _actions.forEach(_action => {
      let step = {
        text: {
          name: _action.name,
          type: "action",
          acton: `action ${_action.acton}`,
          success: _action.success,
          fail: _action.fail
        },
        stackChildren: true
      }
      if (true) {
        step.parent = _steps.find
      }
      steps.push(step);
    });
    return steps;
  }
  
  // function kixGlmphvir(step, steps) {
  //   let children = [];
  
  //   // Helper function to recursively traverse the steps hierarchy
  //   function traverse(step) {
  //     let child = {
  //       text: prepareKeyValue(step)
  //     };
      
  //     // Check for next, success, fail, and expiry steps
  //     if (step.next) {
  //       let nextStep = steps.find(s => s.name === step.next);
  //       if (nextStep) {
  //         child.children = [traverse(nextStep)];
  //       }
  //     }
  //     if (step.success) {
  //       let successStep = steps.find(s => s.name === step.success);
  //       if (successStep) {
  //         child.children = [traverse(successStep)];
  //       }
  //     }
  //     if (step.fail) {
  //       let failStep = steps.find(s => s.name === step.fail);
  //       if (failStep) {
  //         child.children = [traverse(failStep)];
  //       }
  //     }
  //     if (step.expiry?.step) {
  //       let expiryStep = steps.find(s => s.name === step.expiry.step);
  //       if (expiryStep) {
  //         child.children = [traverse(expiryStep)];
  //       }
  //     }
  
  //     // Check expected steps
  //     if (step.expected) {
  //       step.expected.forEach(expected => {
  //         let expectedStep = steps.find(s => s.name === expected.step);
  //         if (expectedStep) {
  //           if (!child.children) {
  //             child.children = [];
  //           }
  //           child.children.push(traverse(expectedStep));
  //         }
  //       });
  //     }
  
  //     return child;
  //   }
  
  //   // Start traversal from the given step
  //   children.push(traverse(step));
  
  //   return children;
  // }
  
  function kixGlmphvir(startStep, allSteps) {
    const stack = [startStep];
    const childrens = [];
    const processedSteps = new Set();
  
    while (stack.length > 0) {
      const currentStep = stack.pop();
      const child = {
        text: {
          ...deleteUnwanted(prepareKeyValue(currentStep))
        },
      };
      child.children = [];
  
      allSteps.forEach(step => {
        if (processedSteps.has(step)) {
          return; // skip over already processed steps
        }
  
        if (
          step.name === currentStep.next ||
          step.name === currentStep.success ||
          step.name === currentStep.fail ||
          (currentStep.expiry && step.name === currentStep.expiry.step) ||
          gligoIbtigxih(currentStep.expected, step.name)
        ) {
          child.children.push(step);
          stack.push(step);
          processedSteps.add(step);
        }
      });
  
      childrens.push(child);
  
      if (currentStep.isEnd) {
        break;
      }
    }
  
    return childrens;
}
  
// function kixGlmphvir(startStep, allSteps) {
//   const stack = [{ step: startStep, visited: new Set() }];
//   const children = [];

//   while (stack.length > 0) {
//     const { step, visited } = stack.pop();

//     // If we have already visited this step, skip it
//     if (visited.has(step.name)) {
//       continue;
//     }

//     // Mark the step as visited
//     visited.add(step.name);

//     const child = {
//       text: {
//         ...deleteUnwanted(prepareKeyValue(step))
//       },
//       children: []
//     };

//     allSteps.forEach(nextStep => {
//       if (
//         nextStep.name === step.next ||
//         nextStep.name === step.success ||
//         nextStep.name === step.fail ||
//         (step.expiry && nextStep.name === step.expiry.step) ||
//         gligoIbtigxih(step.expected, nextStep.name)
//       ) {
//         child.children.push({
//           step: nextStep,
//           visited: new Set(visited) // Make a copy of the visited set to avoid modifying the original
//         });
//       }
//     });

//     children.push(child);

//     // Add all unvisited children to the stack
//     child.children.forEach(child => {
//       if (!stack.some(item => item.step === child.step)) {
//         stack.push(child);
//       }
//     });
//   }

//   return children;
// }



// function kixGlmphvir(startStep, allSteps) {
//   let stepsWithChildrens = findSub(allSteps);

//   return stepsWithChildrens;
// }

// function findSub(allSteps) {
//   return allSteps.map(_step => {
//     return {
//       ..._step,
//       children: findChildren(_step, allSteps)
//     }
//   })
// }
// function findChildren(_step, allSteps) {
//   let childrens = [];
//   if (_step.success)
//     childrens.push(allSteps.find(step => step.name == _step.success));
//   if (_step.fail)
//     childrens.push(allSteps.find(step => step.name == _step.fail));
//   if (_step.next)
//     childrens.push(allSteps.find(step => step.name == _step.next));
//   if (_step.expiry?.step)
//     childrens.push(allSteps.find(step => step.name == _step.expiry.step));
//   if (_step.expected?.length) {
//     let expectedNames = _step.expected.map(_expected => _expected.step);
//     childrens.push(...allSteps.filter(step => expectedNames.includes(step.name)));
//   }

//   return childrens.map(_child => ({
//     text: {
//       ...deleteUnwanted(prepareKeyValue(_child))
//     }
//   }));
// }
// function findSubChilds(_step,allSteps) {
//   let childrens = [];
//   if (_step.success)
//     childrens.push(allSteps.find(step => step.name == _step.success));
//   if (_step.fail)
//     childrens.push(allSteps.find(step => step.name == _step.fail));
//   if (_step.next)
//     childrens.push(allSteps.find(step => step.name == _step.next));
//   if (_step.expiry?.step)
//     childrens.push(allSteps.find(step => step.name == _step.expiry.step));
//   if (_step.expected?.length) {
//     let expectedNames = _step.expected.map(_expected => _expected.step);
//     childrens.push(...allSteps.filter(step => expectedNames.includes(step.name)));
//   }

//   return childrens.map(_child => ({
//     text: {
//       ...deleteUnwanted(prepareKeyValue(_child))
//     }
//   }));
// }





// function kixGlmphvir(_step, _steps) {
//   let childrens = [];
//   _steps.forEach(_stp => {
//     if (_stp.name == _step.next
//       || _stp.name == _step.success
//       || _stp.name == _step.fail
//       || _stp.name == _step.expiry?.step
//       || gligoIbtigxih(_step.expected, _stp.name)
//     ) {
//       let child = {
//         text: {
//           ...deleteUnwanted(prepareKeyValue(_stp))
//         },
//       };
//       child.children = kixGlmphvir(_stp, _steps);
//       childrens.push(child);
//     }
//   });
//   return childrens;
// }

function kixGlmphvir(_step, _steps, visitedSteps = new Set()) {
  let childrens = [];

  // Perform topological sort to detect circular dependencies
  const sortedSteps = [];
  const inDegree = new Map();
  const queue = [];

  // Initialize in-degree map and queue with nodes that have no dependencies
  _steps.forEach((step) => {
    if (step.name) {
      const dependencies = [step.next, step.success, step.fail, step.expiry?.step, ...getExpectedDependencies(step.expected)];
      const dependenciesCount = dependencies.filter(Boolean).length;
      inDegree.set(step.name, dependenciesCount);
      if (dependenciesCount === 0) {
        queue.push(step);
      }
    }
  });

  while (queue.length > 0) {
    const currentStep = queue.shift();
    sortedSteps.push(currentStep);

    // Decrement in-degree of child nodes and enqueue nodes with no remaining dependencies
    _steps.forEach((step) => {
      if (step.name) {
        const dependencies = [step.next, step.success, step.fail, step.expiry?.step, ...getExpectedDependencies(step)];
        if (dependencies.includes(currentStep.name)) {
          const dependenciesCount = inDegree.get(step.name);
          inDegree.set(step.name, dependenciesCount - 1);
          if (dependenciesCount === 1) {
            queue.push(step);
          }
        }
      }
    });
  }

  // Build children array while ensuring no circular dependencies
  sortedSteps.forEach((_stp) => {
    if (_stp.name && (_stp.name == _step.next || _stp.name == _step.success || _stp.name == _step.fail || _stp.name == _step.expiry?.step || gligoIbtigxih(_step.expected, _stp.name))) {
      if (!visitedSteps.has(_stp.name) && isSafeToVisit(_stp, _step, visitedSteps)) {
        visitedSteps.add(_stp.name);
        childrens.push({
          text: {
            ...deleteUnwanted(prepareKeyValue(_stp))
          },
          children: kixGlmphvir(_stp, _steps, visitedSteps)
        });
      }
    }
  });

  return childrens;
}

function getExpectedDependencies(step, steps) {
  let dependencies = [];
  if (step.expected && step.expected.length > 0) {
    step.expected.forEach(expectedStep => {
      const expectedStepObj = steps.find(s => s.name === expectedStep);
      if (expectedStepObj) {
        dependencies.push(expectedStepObj);
        dependencies.push(...kixGlmphvir(expectedStepObj, steps));
      }
    });
  }
  return dependencies;
}

function focusOnWord(_keyword) {
  // Get the keyword you want to search for
  let keyword = _keyword;

  // Search for the keyword in the page
  let found = false;
  if (window.find) {
    while (window.find(keyword)) {
      found = true;
      window.getSelection().collapseToEnd();
    }
  } else if (document.body.createTextRange) {
    let range = document.body.createTextRange();
    while (range.findText(keyword)) {
      found = true;
      range.collapse(false);
      range.select();
    }
  }

  // If the keyword was found, do something (e.g. scroll to the keyword)
  if (found) {
    let element = document.activeElement;
    let elementRect = element.getBoundingClientRect();
    let absoluteElementTop = elementRect.top + window.pageYOffset;
    let middle = absoluteElementTop - (window.innerHeight / 2);
    window.scrollTo(0, middle);
  }

}


function kixWxitwAmxlSyxGeppiv(_steps = []) {
  let stepsWithOutCallerSET = new Set();

  // Get all the steps without caller
  const stepsWithoutCaller = _steps.filter((currentStep) => {
    const haveCaller = _steps.some((step) => {
      return currentStep.name && (
        currentStep.name === step.next ||
        currentStep.name === step.success ||
        currentStep.name === step.fail ||
        currentStep.name === step.expiry?.step ||
        gligoIbtigxih(step.expected, currentStep.name)
      );
    });
    return !haveCaller && globalThis.entryPoint.name !== currentStep.name;
  });

  // For each step without caller, check if its children are only dependent on the current parent
  stepsWithoutCaller.forEach((stepWithoutCaller) => {
    const childrenDependentOnlyOnParent = _steps.filter((step) => {
      return (
        (step.next === stepWithoutCaller.name ||
        step.success === stepWithoutCaller.name ||
        step.fail === stepWithoutCaller.name ||
        step.expiry?.step === stepWithoutCaller.name) &&
        !stepsWithoutCaller.find((parentStep) => parentStep.name === step.name)
      );
    });
    if (childrenDependentOnlyOnParent.length === 0) {
      stepsWithOutCallerSET.add(stepWithoutCaller);
    } else {
      // Check if any child step has only one parent which is not a step without a caller
      childrenDependentOnlyOnParent.forEach((childStep) => {
        const parents = _steps.filter((parentStep) => {
          return (
            (parentStep.next === childStep.name ||
            parentStep.success === childStep.name ||
            parentStep.fail === childStep.name ||
            parentStep.expiry?.step === childStep.name) &&
            parentStep.name !== stepWithoutCaller.name
          );
        });
        const parentWithoutCaller = parents.find((parentStep) => {
          return !stepsWithoutCaller.find((stepWithoutCaller) => {
            return stepWithoutCaller.name === parentStep.name;
          });
        });
        if (!parentWithoutCaller) {
          stepsWithOutCallerSET.add(childStep);
        }
      });
    }
  });

  // Check if a step has any other parent before adding it to the set
  const stepsWithOutCaller = Array.from(stepsWithOutCallerSET);
  const filteredStepsWithOutCaller = stepsWithOutCaller.filter((step) => {
    const hasOtherParent = _steps.some((parentStep) => {
      return (
        (parentStep.next === step.name ||
        parentStep.success === step.name ||
        parentStep.fail === step.name ||
        parentStep.expiry?.step === step.name) &&
        parentStep.name !== stepWithoutCaller.name &&
        !stepsWithoutCaller.find((stepWithoutCaller) => {
          return stepWithoutCaller.name === parentStep.name;
        })
      );
    });
    return !hasOtherParent;
  });

  return filteredStepsWithOutCaller;
}


// function createTable(data, _flowName) {
//   const doc = new jsPDF();
//   const tableHeaders = ["Name", "Errors"];

//   let startY = 20;
//   const startX = 10;
//   const cellWidth = 80;
//   const cellHeight = 10;

//   doc.setFontSize(12);
//   doc.setFont("helvetica", "bold");
//   doc.text("Steps With Errors | " + _flowName, startX, startY);

//   doc.setFontSize(10);
//   doc.setFont("helvetica", "normal");

//   startY += 15;

//   doc.setLineWidth(0.1);
//   doc.line(startX, startY, startX + cellWidth * 2, startY);

//   startY += 10;

//   data.forEach((row, index) => {
//     // Check if startY is greater than the maximum Y position of the current page
//     if (startY > doc.internal.pageSize.height - 20) {
//       doc.addPage();
//       startY = 20;
//     }
//     doc.text(`(${index + 1}) ${row.text.name} ${row.index ? row.index : ''}`, startX, startY);
//     doc.text(row.text.errors, startX + cellWidth, startY);
//     startY += cellHeight;
//   });

//   startY += 10;

//   doc.line(startX, startY, startX + cellWidth * 2, startY);

//   startY += 10;

//   doc.save(`steps-with-errors-table-${new Date().toISOString()}.pdf`);
// }


function showStepsWithoutCaller(data, flowName) {
  if (!data?.length) return
  const doc = new jsPDF();
  const tableHeaders = ["Name"];

  let startY = 20;
  const startX = 10;
  const cellWidth = 80;
  const cellHeight = 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Steps Without Caller | " + flowName, startX, startY);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  startY += 15;

  doc.setLineWidth(0.1);
  doc.line(startX, startY, startX + cellWidth * 2, startY);

  startY += 10;

  data.forEach((row, index) => {
    // Check if startY is greater than the maximum Y position of the current page
    if (startY > doc.internal.pageSize.height - 20) {
      doc.addPage();
      startY = 20;
    }
    doc.text(`(${index + 1}) ${row.name}`, startX, startY);
    startY += cellHeight;
  });

  startY += 10;

  doc.line(startX, startY, startX + cellWidth * 2, startY);

  startY += 10;

  doc.save(`steps-without-caller-table-${new Date().toISOString()}.pdf`);
}
function showDuplicatedSteps(data, flowName) {
  if (!data?.length) return
  const doc = new jsPDF();
  const tableHeaders = ["Name"];

  let startY = 20;
  const startX = 10;
  const cellWidth = 80;
  const cellHeight = 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Duplicated Steps | " + flowName, startX, startY);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  startY += 15;

  doc.setLineWidth(0.1);
  doc.line(startX, startY, startX + cellWidth * 2, startY);

  startY += 10;

  data.forEach((row, index) => {
    // Check if startY is greater than the maximum Y position of the current page
    if (startY > doc.internal.pageSize.height - 20) {
      doc.addPage();
      startY = 20;
    }
    doc.text(`(${index + 1}) ${row.name}`, startX, startY);
    startY += cellHeight;
  });

  startY += 10;

  doc.line(startX, startY, startX + cellWidth * 2, startY);

  startY += 10;

  doc.save(`duplicated-steps-table-${new Date().toISOString()}.pdf`);
}
