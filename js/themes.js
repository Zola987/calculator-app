const themes = document.getElementsByClassName('theme');
for (let i = 0; i < themes.length; i++) {
    themes[i].addEventListener('click', changeTheme);
}

function changeTheme(ev) {
    let colorTheme = ev.target.id;
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', colorTheme);

    for (let i = 0; i < themes.length; i++) {
        themes[i].style.setProperty('background-color', 'inherit');
    }

    let dot = document.getElementById(colorTheme);
    dot.style.setProperty('background-color', 'var(--equals-key');
}
