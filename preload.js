const customTitlebar = require('custom-electron-titlebar')

window.addEventListener('DOMContentLoaded', () => {
    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.TitlebarColor.fromHex("#2C2F33")
    })
})