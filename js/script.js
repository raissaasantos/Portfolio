const button = document.getElementById('cv-button');

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#B3D9D9';
    button.style.color = '#000000';
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#1E90FF';
    button.style.color = '#FFFFFF';
});


