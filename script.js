const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const colorInput = document.getElementById('colorInput');
const bioInput = document.getElementById('bioInput');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const profileCard = document.getElementById('profileCard');

generateBtn.addEventListener('click', function() {
    const userName = nameInput.value.trim();
    const userAge = ageInput.value;
    const userColor = colorInput.value;
    const userBio = bioInput.value.trim();



    if (!userName) {
        alert('please enter your  name!');
        return;
    }

    if (!userAge) {
        alert('Please enter your age!');
        return;
    }

    generateProfileCard(userName, userAge, userColor, userBio);
});

function generateProfileCard(name, age, color, bio) {
    const profileHTML = `
    <div style="color: ${color}">
    <h3>${name.toUpperCase()}</h3>
    <p><strong>Age:</strong> ${age} years old</p>
    <p><strong>Favorite Color:</strong> ${color}</p>
    <p><strong>About Me:</strong> ${bio || 'No bio provided'}</p>
    <p><strong>Profile Created:</strong> ${new Date().toLocaleTimeString()}</p>
    </div>
    `;

    profileCard.innerHTML = profileHTML;
    profileCard.style.borderColor = color;
    profileCard.style.background = getLightColor(color);
}

function getLightColor(color) {
    const lightColors = {
        'blue': '#e3f2fd',
        'red': '#ffebee',
        'green': '#e8f5e8',
        'purple': '#f3e5f5',
        'orange': '#fff3e0'
    };
    return lightColors[color] || '#f8f9fa';
}

clearBtn.addEventListener('click', function() {
    nameInput.value = '';
    ageInput.value = '';
    colorInput.selectedIndex = 0;
    bioInput.value = '';

    profileCard.innerHTML = '<p>Fill the form and click GENERATE to see your profile!</p>';
    profileCard.style.background = '#f8f9fa';
    profileCard.style.borderColor = '#667eea';

});