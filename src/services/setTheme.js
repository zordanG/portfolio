function setTheme(theme) {
    document.cookie = `theme=${theme}; ${new Date() + 86400000}; path=/`
}

function getTheme() {
    const cookie = decodeURIComponent(document.cookie);
    const array = cookie.split("; ");

    return array.filter((element) => {
        if(element == "theme") {
            return true;
        }
    })
}

export {setTheme, getTheme};