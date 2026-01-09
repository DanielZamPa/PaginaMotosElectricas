document.addEventListener("DOMContentLoaded", function() {
    const lightThemeButton = document.getElementById("light-theme");
    const darkThemeButton = document.getElementById("dark-theme");

    lightThemeButton.addEventListener("click", () => {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    });

    darkThemeButton.addEventListener("click", () => {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    });
});
