const buttons = document.getElementsByClassName('btn-dark');

// Convertendo a coleção HTMLCollection em um array para iterar sobre cada botão
Array.from(buttons).forEach(button => {
    // Adicionando evento 'mouseover' para cada botão
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary');
        this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    });
});


/*const button = document.getElementsByClassName('btn-dark');

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#B3D9D9';
    button.style.color = '#000000';
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#1E90FF';
    button.style.color = '#FFFFFF';
});*/


