const workingHoursCheckingActions = [
    "IsWorking",
    "IsWorkingClearance",
    "IsWorkingIraq",
    "IsWorkingLebanon",
    "IsWorkingB2B",
    "IsWorkingAlfaLabs"
];

async function drawFlow() {
    let names;
    try {
        let options = {
            title: 'Enter steps names without a caller to include e.g Templates [optional]',
            input: "textarea",
            inputAttributes: {
                autocapitalize: 'off',
                placeholder: "step name 1\nstep name 2\nstep name 3"
            },
            showCancelButton: true,
            confirmButtonText: "Continue",
            allowOutsideClick: false
        }
        let result = await takeUserInput(options);

        if (!result.isConfirmed)
            return;

        if (result.value) {
            names = result.value.split('\n');
            names = [...new Set(names)];
            const steps = globalThis?.selectedFlow?.steps;
            const nonExistSteps = names.filter(_name => !steps.find(_step => _step.name == _name));
            if (nonExistSteps.length) {
                await showFeedBack({
                    title: "Rejected",
                    text: `Some of the steps you provided do not exist in the flow, re-check their names. [${nonExistSteps.join(" , ")}]`,
                    icon: "error"
                });
                return;
            }
        }

        loader.style.display = "block";
        setTimeout(() => {
            renderValidGraph(names);
            loader.style.display = "none";
            showFeedBack({
                title: "Success!",
                text: "Render Success, " + " " + globalThis.renderTimeText,
                icon: "success"
            });

            document.querySelector('.nodeExample1:last-of-type')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);

    } catch (error) {
        showFeedBack({
            title: "Error",
            text: "Render Fail",
            icon: "error"
        });
    }
}

function getValidChildren(_step, _steps) {
    let childrens = [];
    _steps.forEach((_stp, _index) => {
        if (checkValidChild(_stp, _step)) {
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
                child.children = getValidChildren(_stp, _steps);
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

function renderValidGraph(_namesToInclude = []) {
    const start = performance.now(); // Start the timer
    //Delete old tree to free up memory
    if (globalThis.tree)
        globalThis.tree.destroy();

    globalThis.visitedSteps = new Set();    
    globalThis.stepsWithErrors = [];
    globalThis.paths = {};
    let steps = globalThis?.selectedFlow?.steps;    
    if (!steps)
        return;
    
    //Clean the steps
    steps.forEach(_step => {
        const validFields = storeValidFields(_step);    
        removeUnValidFields(_step, validFields, steps);
    });

    let parentNode = steps.find(_step => _step.isEntryPoint) || steps[0];

    globalThis.entryPoint = parentNode;

    globalThis.step = {
        messages: '',
        interactiveType: '',
        type: '',
        action: '',
        success: '',
        fail: '',
        name: '',
        expected: '',
        next: '',
        clarification: '',
        effect: '',
        expiry: ''
    }
    let orphanedChildrens = _namesToInclude.length ? _namesToInclude : [];

    let merged = {
        ...step,
        ...parentNode,
        orphanedChildrens
    }

    let parentNodeStructure = {
        text: {
            'flow-name': 'Flow Name :- ' + globalThis?.selectedFlow.name + " | Total Steps Count:- " + globalThis?.selectedFlow?.steps?.length,
            ...deleteUnwanted(prepareKeyValue(merged)),
            isParent: 'parent'
        },
        children: [
            ...getValidChildren(merged, removeDuplicateSteps(steps))
        ]
    }


    let errors = findErrors(merged);
    if (errors?.length) {
        parentNodeStructure.text.errors = 'Errors => ' + errors.join(' , ');

        let temp = JSON.parse(JSON.stringify(parentNodeStructure));
        delete temp.children;
        globalThis.stepsWithErrors.push(temp);
    }
    globalThis.stepsWithoutCaller = getStepsWithOutCaller(globalThis.uniqueSteps);
    globalThis.duplicatedSteps = getStepsWithDuplicatedNames(steps);
    globalThis.allStepsWithErrors = getAllStepsWithErrors(steps);

    let failStepErrors = getAllStepsWithErrors((globalThis.selectedFlow?.failStep ? [{ ...globalThis?.selectedFlow.failStep, name: 'Fail Step' }] : []));
    if (failStepErrors?.length) {
        globalThis.allStepsWithErrors.push(...failStepErrors.map(_failStep => ({ ..._failStep, index: 'no-index' })));
    }

    let chart_config = {
        chart: {
            container: "#flow-visualize",

            connectors: {
                type: 'bCurve',
                style: {
                    "arrow-end": "classic-wide-long",
                    "stroke-width": 2,
                    "stroke": "#665B57"
                }
            },
            node: {
                HTMLclass: 'nodeExample1'
            },
            maxDepth: 10000,
        },
        nodeStructure: {
            ...parentNodeStructure
        }
    };



    globalThis.tree = new Treant(chart_config);
    splitText('.node-expected');
    splitText('.node-clarification', '<br><br>');
    splitText('.node-messages', '<br><br>');
    updateValues();

    $(function () {
        // Define the default font size
        const defaultFontSize = 12;

        // Initialize the previous width to zero
        let prevWidth = 0;

        $(".nodeExample1").resizable({
            resize: function (event, ui) {
                ui.size.height = $(this).height(); // keep the current height
                ui.size.width = Math.round(ui.size.width / 30) * 30; // round the width to the nearest multiple of 30 pixels

                if (ui.size.width > prevWidth) {
                    // The box is being resized in
                    // Decrease the font size by a fixed amount
                    const newFontSize = Math.max(defaultFontSize - (ui.size.width - prevWidth) / 30, 8);
                    $(this).css({
                        width: ui.size.width + 'px',
                        height: ui.size.height + 'px',
                        fontSize: newFontSize + 'px'
                    });
                } else {
                    // The box is being resized out
                    // Set the font size to the default size
                    $(this).css({
                        width: ui.size.width + 'px',
                        height: ui.size.height + 'px',
                        fontSize: defaultFontSize + 'px'
                    });
                }

                // Store the current width as the previous width
                prevWidth = ui.size.width;
            }
        });
    });

    const end = performance.now(); // End the timer
    const timeInSeconds = ((end - start) / 1000).toFixed(2); // Calculate the time in seconds and round it to 2 decimal places
    const minutes = Math.floor(timeInSeconds / 60); // Calculate the number of minutes
    const seconds = (timeInSeconds % 60).toFixed(2); // Calculate the remaining seconds and round it to 2 decimal places
    globalThis.renderTimeText = `Render time: ${minutes} minutes and ${seconds} seconds`;
}
function checkValidChild(_stp, _step) {
    if (!_stp.name)
        return false;

    if ([_step.success, _step.fail].includes(_stp.name) && ["action", "time"].includes(_step.type))
        return true;

    if (_step.expiry?.step == _stp.name)
        return true;

    if (_step.next == _stp.name && _step.type == "break")
        return true;

    if (checkExpected(_step.expected, _stp.name) && ["message", "failover", "reminder"].includes(_step.type))
        return true;

    if (_step.orphanedChildrens?.includes(_stp.name))
        return true;

    return false;
}

async function drawWorkingHoursFlow() {
    let namesToInclude = [];
    let steps = globalThis.uniqueSteps;
    let options = {
        title: 'Enter steps names without a caller to include e.g Templates [optional]',
        input: "textarea",
        inputAttributes: {
            autocapitalize: 'off',
            placeholder: "step name 1\nstep name 2\nstep name 3\n..."
        },
        showCancelButton: true,
        confirmButtonText: "Continue",
        allowOutsideClick: false
    }
    let result = await takeUserInput(options);

    if (!result.isConfirmed)
        return;

    if (result.value) {
        namesToInclude = result.value.split('\n');
        namesToInclude = [...new Set(namesToInclude)];
        const nonExistSteps = namesToInclude.filter(_name => !steps.find(_step => _step.name == _name));
        if (nonExistSteps.length) {
            await showFeedBack({
                title: "Rejected",
                text: `Some of the steps you provided do not exist in the flow, re-check their names. [${nonExistSteps.join(" , ")}]`,
                icon: "error"
            });
            return;
        }
    }
    // 1-Ask for actions names.
    let names = await askForActionNames();
    if (typeof names == "undefined")
        return;

    //Clean the steps
    steps.forEach(_step => {
        const validFields = storeValidFields(_step);
        removeUnValidFields(_step, validFields, steps);
    });

    // 2-extract wokring hours checkers
    names = names.length ? names.split("\n") : []
    let stepNames = extractWorkingHoursCheckers(steps, names);
    if (!stepNames.length) {
        let options = {
            title: 'Rejected',
            text: 'No working hours checking steps are found, e.g time steps or action steps that checks the working hours',
            icon: "error"
        }
        showFeedBack(options);
        return;
    }
    // 3-Prompt to select if (in/out of working) hours path.
    let stepsDirectionRefrence = await setWorkingHoursActionsResultsDirection(stepNames, steps);
    // 4-Invoke the children finder method
    let inWorkingSteps = [], outOfWorkingSteps = [];
    let startStep = steps.find(_step => _step.isEntryPoint) || steps[0];
    startStep.orphanedChildrens = namesToInclude.length ? namesToInclude : [];
    globalThis.workingTracePaths = {};
    globalThis.visitedInWorkingTraceSteps = new Set();
    globalThis.visitedOutOfWorkingTraceSteps = new Set();
    //Set inital direction if needed
    let initalDirectionOptions = {
        title: 'Select inital direction [optional]',
        input: 'select',
        inputOptions: {
            'inWorking': 'In working',
            'outOfWorking': 'Out of working'
        },
        inputPlaceholder: '',
        cancelButtonText: 'Skip'
    };
    let initalDirection = await takeUserInput(initalDirectionOptions);

    switch (initalDirection.value) {
        case 'inWorking':
            pushObjIfNotExists(inWorkingSteps, startStep, "name");
            break;
        case 'outOfWorking':
            pushObjIfNotExists(outOfWorkingSteps, startStep, "name");
            break;
        default:
            pushObjIfNotExists(inWorkingSteps, startStep, "name");
            pushObjIfNotExists(outOfWorkingSteps, startStep, "name");
            break;
    }

    getValidChildrensBasedOnWorkinghours(startStep, steps, inWorkingSteps, outOfWorkingSteps, initalDirection.value, stepsDirectionRefrence);

    let inAndOutIntersection = intersectionByName(inWorkingSteps, outOfWorkingSteps);
    let { pureInSteps, pureOutSteps } = findPureWorkingSteps(inWorkingSteps, outOfWorkingSteps, inAndOutIntersection);
    //Export final results
    exportFlow({ inWorkingSteps, outOfWorkingSteps, inAndOutIntersection, pureInSteps, pureOutSteps, name: "in-out-workingStepsDirections" });
}
function extractWorkingHoursCheckers(steps = [], actions = []) {
    let workingHoursCheckers = new Set();

    workingHoursCheckingActions.push(...actions);

    steps.filter(_step => {
        if (["action"].includes(_step.type) && workingHoursCheckingActions.includes(_step.action)) {
            workingHoursCheckers.add(_step.name);
        }
        if (["time"].includes(_step.type)) {
            workingHoursCheckers.add(_step.name);
        }
    });
    return Array.from(workingHoursCheckers);
}
async function askForActionNames() {
    let actionsOptions = {
        title: 'Actions Names',
        text: `U will be prompted to enter extra actions names that checks the working hours, Currently stored names are [${workingHoursCheckingActions.join("-")}]`,
        icon: "info"
    }
    await showFeedBack(actionsOptions);

    let options = {
        title: 'Enter EXTRA actions names that are used to check the working hours, leave empty if there is none',
        input: "textarea",
        inputAttributes: {
            autocapitalize: 'off',
            placeholder: "action name 1\naction name 2\naction name 3\n..."
        },
        showCancelButton: true,
        confirmButtonText: "Continue",
        allowOutsideClick: false
    }
    let result = await takeUserInput(options);
    return result.value;
}
async function setWorkingHoursActionsResultsDirection(names, steps) {
    let workingHoursSwitchRefrenceObj = {};

    for (const name of names) {
        let currentStep = steps.find(_step => _step.name == name);
        const result = await takeUserInput({
            icon: 'question',
            title: 'Set step direction',
            text: `Which direction describes the "in working hours" in this step [${name}], Type [${currentStep.type}],Action [${currentStep.action || (currentStep.type == "time" ? 'checkValidTime' : '')}],Success [${currentStep.success}], Fail [${currentStep.fail}]`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Success',
            denyButtonText: 'Fail',
        });

        if (result.isConfirmed) {
            workingHoursSwitchRefrenceObj[name] = {
                'in': currentStep.success,
                'out': currentStep.fail
            };
        } else if (result.isDenied) {
            workingHoursSwitchRefrenceObj[name] = {
                'in': currentStep.fail,
                'out': currentStep.success
            };
        }
    }
    return workingHoursSwitchRefrenceObj;
}
function getValidChildrensBasedOnWorkinghours(_step, _steps, inWorkingSteps, outOfWorkingSteps, parentDirection, stepsDirectionRefrence) {
    _steps.forEach((_stp, _index) => {
        if (checkValidChild(_stp, _step)) {
            let child = _stp;
            //Store every possible path for each children
            if (globalThis.workingTracePaths[child.name]?.paths) {
                globalThis.workingTracePaths[child.name].paths.push(_step.name);
            } else {

                globalThis.workingTracePaths[child.name] = {
                    paths: []
                };

                globalThis.workingTracePaths[child.name].paths.push(_step.name);
            }

            if (stepsDirectionRefrence[_step.name]?.in == child.name) {
                parentDirection = "inWorking";
                pushObjIfNotExists(inWorkingSteps, child, "name");
            }
            else if (stepsDirectionRefrence[_step.name]?.out == child.name) {
                parentDirection = "outOfWorking";
                pushObjIfNotExists(outOfWorkingSteps, child, "name");
            } else {
                if (parentDirection == "inWorking")
                    pushObjIfNotExists(inWorkingSteps, child, "name");
                if (parentDirection == "outOfWorking")
                    pushObjIfNotExists(outOfWorkingSteps, child, "name");
                if (!parentDirection) {
                    pushObjIfNotExists(inWorkingSteps, child, "name");
                    pushObjIfNotExists(outOfWorkingSteps, child, "name");
                }
            }

            if (parentDirection == "inWorking" && !globalThis.visitedInWorkingTraceSteps.has(child.name)) {
                globalThis.visitedInWorkingTraceSteps.add(child.name);
                getValidChildrensBasedOnWorkinghours(child, _steps, inWorkingSteps, outOfWorkingSteps, parentDirection, stepsDirectionRefrence);
            } else if (parentDirection == "outOfWorking" && !globalThis.visitedOutOfWorkingTraceSteps.has(child.name)) {
                globalThis.visitedOutOfWorkingTraceSteps.add(child.name);
                getValidChildrensBasedOnWorkinghours(child, _steps, inWorkingSteps, outOfWorkingSteps, parentDirection, stepsDirectionRefrence);
            } else if (!parentDirection && !globalThis.visitedInWorkingTraceSteps.has(child.name) && !globalThis.visitedOutOfWorkingTraceSteps.has(child.name)) {
                globalThis.visitedInWorkingTraceSteps.add(child.name);
                globalThis.visitedOutOfWorkingTraceSteps.add(child.name);
                getValidChildrensBasedOnWorkinghours(child, _steps, inWorkingSteps, outOfWorkingSteps, parentDirection, stepsDirectionRefrence);
            }
        }
    });
}

function pushObjIfNotExists(array, element, searchkey) {
    !array.find(el => el[searchkey] == element[searchkey]) ? array.push(element) : [];
}  