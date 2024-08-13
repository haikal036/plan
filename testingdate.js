function calculate_yearly() {
    // Step 1: Get the input elements
    let startCurrentDate = document.getElementById('startCurrentDate');
    let endCurrentDate = document.getElementById('endCurrentDate');
    let startUpgradeDate = document.getElementById('startUpgradeDate');
    let endUpgradeDate = document.getElementById('endUpgradeDate');
    let current_plan = parseFloat(document.getElementById('current_plan').value);
    let upgrade_plan = parseFloat(document.getElementById('upgrade_plan').value);
    
    // Step 2: Get the values from the input elements
    let startCurrentValue = startCurrentDate.value;
    let endCurrentValue = endCurrentDate.value;
    let startUpgradeValue = startUpgradeDate.value;
    let endUpgradeValue = endUpgradeDate.value;

    // Step 3: Convert the values to Date objects
    let startDate_current = new Date(startCurrentValue);
    let endDate_current = new Date(endCurrentValue);
    let startDate_upgrade = new Date(startUpgradeValue);
    let endDate_upgrade = new Date(endUpgradeValue);

    // Step 4: Calculate the difference in time (milliseconds)
    let timeDifference_current = endDate_current - startDate_current;
    let timeDifference_upgrade = endDate_upgrade - startDate_upgrade;

    // Step 5: Convert time difference from milliseconds to days
    let dayDifference_current = timeDifference_current / (1000 * 3600 * 24);
    let dayDifference_upgrade = timeDifference_upgrade / (1000 * 3600 * 24);
    console.log(dayDifference_current);
    console.log(dayDifference_upgrade);

    //calculate plan price for current plan in day
    let current_price = dayDifference_current * current_plan;

    //calculate plan price for upgrade plan in day
    let upgrade_price = dayDifference_upgrade * upgrade_plan;

    //calculate upgrade price which upgrade - current
    let upgrade = upgrade_price - current_price;
    let prorate = upgrade_plan - upgrade;
    let total = upgrade - prorate;

    document.getElementById('difference_current').textContent = "Total Current Plan Used Days:" + dayDifference_current;
    document.getElementById('difference_upgrade').textContent = "Total Upgrade Plan Days:" + dayDifference_upgrade;
    document.getElementById('result').textContent = "Upgrade Price: RM " + upgrade;
    document.getElementById('prorate').textContent = "Prorate Discount: RM " + prorate;
    document.getElementById('total').textContent = "Total : RM " + total;
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