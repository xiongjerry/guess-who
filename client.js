console.log('Here are all the available people:', people);




$(document).ready(readyNow)

function readyNow(){

// function to display pictures
displayProfiles();

// function generating names
randomName()

// click listeners
$('.portraits').on('click', '.pictures', handleClicks)

}

function displayProfiles(){
    for (staff of people){
        $('.portraits').append(`
    <div class="pictures" data-name="${staff.name}" data-git="${staff.githubUsername}">
    <img src="https://github.com/${staff.githubUsername}.png?size=250" alt="Profile image of ${staff.name}">    
    </div>
    `)
    }
}

// random number generator 
function randomNumber(min, max){
     return Math.floor(Math.random() * (1 + max - min) + min);
}

// random name generator
function randomName(){
    return $('#name').text(`${people[randomNumber(0,6)].name}`);
}



function handleClicks(){
    let picName = $(this).closest('div').data('name') // targets the name from portraits
    console.log(picName);
    let matchName = $('#name').text() // targets the name created from the random gen
    console.log(matchName);
    
    if (picName == matchName) {
        console.log('match!');
        alert('NICE!!! You got a match, try again?')
        randomName(); // resets upon correct guess
    } else {
        console.log('no match!');
        alert('Error, Do Try Again!') 
    }
}