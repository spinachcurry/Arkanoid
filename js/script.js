document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            alert("Game Started!");
        } else if (event.code === "KeyP") {
            alert("Practice Mode Selected");
        } else if (event.code === "KeyD") {
            alert("Design Mode Selected");
        }
    });
});
