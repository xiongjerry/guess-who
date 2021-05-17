console.log('Here are all the available people:', people);


$(document).ready(readyNow)

function readyNow(){

// function to display pictures
displayProfiles();

}

function displayProfiles(){
    $('.portraits').append(`
    <div>
    <img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
    <img src="https://avatars.githubusercontent.com/u/17906158?v=4" alt="Profile image of Chris">
    <img src="https://avatars.githubusercontent.com/u/11574995?v=4" alt="Profile image of Chris">
    <img src="https://avatars.githubusercontent.com/u/5143491?v=4" alt="Profile image of Chris">
    <img src="https://avatars.githubusercontent.com/u/5541481?v=4" alt="Profile image of Chris">
    <img src="https://avatars.githubusercontent.com/u/1153371?v=4" alt="Profile image of Chris">
    <img src="https://avatars.githubusercontent.com/u/10237149?v=4" alt="Profile image of Chris">
    </div>
    `)
}