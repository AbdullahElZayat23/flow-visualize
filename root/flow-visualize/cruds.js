function deleteStepsWithoutCaller() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                globalThis.selectedFlow.steps = globalThis?.selectedFlow?.steps.filter(step =>
                    !globalThis.stepsWithoutCaller.find(_step => _step.name == step.name)
                );
                deleteProcessEffect();
            } else {
                // User clicked the "Cancel" button
                swal("Your data is safe!");
            }
        });
}
function deleteDuplicatedSteps() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                const uniqueSteps = globalThis.selectedFlow.steps.filter((step, index, self) =>
                    index === self.findIndex((s) => (
                        s.name === step.name
                    ))
                );
                globalThis.selectedFlow.steps = uniqueSteps;
                deleteProcessEffect();
            } else {
                // User clicked the "Cancel" button
                swal("Your data is safe!");
            }
        });
}
function deleteProcessEffect() {
    try {
        closePopup();
        loader.style.display = "block";
        setTimeout(() => {
            renderGraph();
            loader.style.display = "none";
            // User clicked the "Delete" button
            swal("Poof! Your data has been deleted!", {
                icon: "success",
            });
        }, 3000);
    } catch (error) {
        loader.style.display = "none";
    }
}