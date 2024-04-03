// DARK MODE
const themeToggle = document.querySelector("#toggle")
const body = document.body;
let mode = 'light';


themeToggle.addEventListener("click", function(event){
  event.preventDefault();

    if (mode === 'light') {
        mode = 'dark';
        themeToggle.textContent = "🌒"
        body.setAttribute('class', 'dark')
        localStorage.setItem('mode', 'dark')
        
    } else {
        mode = 'light';
        themeToggle.textContent = "☀️"
        body.setAttribute('class', '')
        localStorage.setItem('mode', 'light')
    }

});

document.addEventListener('DOMContentLoaded', function(event){
  
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    themeToggle.textContent = "🌒"
    body.setAttribute('class', 'dark')

} else {
    themeToggle.textContent = "☀️"
    body.setAttribute('class', '')
}
});
