function deleteStepsWithoutCaller() {
    Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
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
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Cancelled", "Your data is safe!", "error");
            }
        });    
}
function deleteDuplicatedSteps() {
    Swal.fire({
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
                Swal.fire("Cancelled", "Your data is safe!", "error");
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
            Swal.fire("Poof! Your data has been deleted!", "", "success");
        }, 3000);
    } catch (error) {
        loader.style.display = "none";
    }
}