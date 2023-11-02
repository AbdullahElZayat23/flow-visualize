function deleteStepsWithoutCaller() {
    takeUserInput({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            const uniqueSteps = globalThis.selectedFlow.steps.filter((step, index, self) =>
                index === self.findIndex((s) => (
                    s.name === step.name
                ))
            );
            globalThis.selectedFlow.steps = uniqueSteps;
            deleteProcessEffect();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            showFeedBack("Cancelled", "Your data is safe!", "error");
        }
    });
}
function deleteDuplicatedSteps() {
    takeUserInput({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel",
    })
        .then((result) => {
            if (result.isConfirmed) {
                const uniqueSteps = globalThis.selectedFlow.steps.filter((step, index, self) =>
                    index === self.findIndex((s) => (
                        s.name === step.name
                    ))
                );
                globalThis.selectedFlow.steps = uniqueSteps;
                deleteProcessEffect();
            } else if (result.dismiss === Swal.DismissReason.cancel || result.dismiss === Swal.DismissReason.backdrop) {
                showFeedBack("Cancelled", "Your data is safe!", "error");
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
            showFeedBack("Poof! Your data has been deleted!", "", "success");
            document.querySelector('.nodeExample1:last-of-type')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 3000);
    } catch (error) {
        loader.style.display = "none";
    }
}