function calculate() {
    
    var current_plan = parseFloat(document.getElementById('current_plan').value);
    var current_used = parseFloat(document.getElementById('current_used').value);
    var next_plan = parseFloat(document.getElementById('next_plan').value);
    var next_day = parseFloat(document.getElementById('next_day').value);

    var upgrade_price = (next_day * next_plan) - (current_used * current_plan);

    document.getElementById('result').textContent = "Upgrade Price: RM " + upgrade_price;

    const d = new Date();
    document.getElementById("date").innerHTML = d;
}

(() => {
        'use strict'
    
        const getStoredTheme = () => localStorage.getItem('theme')
        const setStoredTheme = theme => localStorage.setItem('theme', theme)
    
        const getPreferredTheme = () => {
            const storedTheme = getStoredTheme()
            if (storedTheme) {
            return storedTheme
            }
    
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
    
        const setTheme = theme => {
            if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
            } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
            }
        }
    
        setTheme(getPreferredTheme())
    
        const showActiveTheme = (theme, focus = false) => {
            const themeSwitcher = document.querySelector('#bd-theme')
    
            if (!themeSwitcher) {
            return
            }
    
            const themeSwitcherText = document.querySelector('#bd-theme-text')
            const activeThemeIcon = document.querySelector('.theme-icon-active use')
            const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
            const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
    
            document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active')
            element.setAttribute('aria-pressed', 'false')
            })
    
            btnToActive.classList.add('active')
            btnToActive.setAttribute('aria-pressed', 'true')
            activeThemeIcon.setAttribute('href', svgOfActiveBtn)
            const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
            themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
    
            if (focus) {
            themeSwitcher.focus()
            }
        }
    
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            const storedTheme = getStoredTheme()
            if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
            }
        })
    
        window.addEventListener('DOMContentLoaded', () => {
            showActiveTheme(getPreferredTheme())
    
            document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                const theme = toggle.getAttribute('data-bs-theme-value')
                setStoredTheme(theme)
                setTheme(theme)
                showActiveTheme(theme, true)
                })
            })
        })
})()