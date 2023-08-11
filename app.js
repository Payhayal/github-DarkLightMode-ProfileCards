
// other js files
import Github from './api.js';
import UI from './ui.js';

// make an example of github and UI classes
const github = new Github();
const ui = new UI();


// coming from html
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const themeBtn = document.getElementById('theme-btn');
const body = document.querySelector('body');

// events
searchButton.addEventListener("click" , getInput);
searchInput.addEventListener("keypress" , (e) => {
    if (e.code === "Enter") {
        getInput();
    }
})

themeBtn.addEventListener('click' , changeTheme);




// methods
function getInput() {
    if(searchInput.value !== '') {
        // send request to api
        github.getUser(searchInput.value).then((data) => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert-info');
            } else {
            ui.showAlert('user successfully found', 'alert-success');    
             // send user info to screen
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
            }
        });
        return;
    }
    ui.showAlert('Form area can not be empty', 'alert-danger');
}
// change theme of background
function changeTheme() {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');
//   change the text of button
    if(body.classList.contains('bg-dark')) {
        themeBtn.innerText = 'Light Mode';
    }else {
        themeBtn.innerText = 'Dark Mode';
    }
}