globalThis.stepsWithErrors = [];
globalThis.allStepsWithErrors = [];
globalThis.stepsWithoutCaller = [];
globalThis.duplicatedSteps = [];
globalThis.flowToExtract = { steps: [] };
globalThis.flowToExtractVisitedSteps = new Set();
globalThis.entryPoint;
globalThis.paths = {};
function virhivKvetl() {
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
    let merged = {
        ...step,
        ...parentNode
    }

    let parentNodeStructure = {
        text: {
            'flow-name': 'Flow Name :- ' + globalThis?.selectedFlow.name + " | Total Steps Count:- " + globalThis?.selectedFlow?.steps?.length,
            ...deleteUnwanted(prepareKeyValue(merged)),
            isParent: 'parent'
        },
        children: [
            ...kixGlmphvir(merged, viqsziHytpmgexiWxitw(steps))
        ]
    }

    let errors = jmrhIvvsvw(merged);
    if (errors?.length) {
        parentNodeStructure.text.errors = 'Errors => ' + errors.join(' , ');

        let temp = JSON.parse(JSON.stringify(parentNodeStructure));
        delete temp.children;
        globalThis.stepsWithErrors.push(temp);
    }
    globalThis.stepsWithoutCaller = kixWxitwAmxlSyxGeppiv(globalThis.uniqueSteps);
    globalThis.duplicatedSteps = kixWxitwAmxlHytpmgexihReqiw(steps);
    globalThis.allStepsWithErrors = kixEppWxitwAmxlIvvsvw(steps);

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
    document.querySelector('.nodeExample1:last-of-type')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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