function calculate_yearly() {
    //Get the input elements
    let startCurrentDate = document.getElementById('startCurrentDate');
    let endCurrentDate = document.getElementById('endCurrentDate');
    let startUpgradeDate = document.getElementById('startUpgradeDate');
    let endUpgradeDate = document.getElementById('endUpgradeDate');
    let current_plan = parseFloat(document.getElementById('current_plan').value);
    let upgrade_plan = parseFloat(document.getElementById('upgrade_plan').value);
    
    //Get the values from the input elements
    let startCurrentValue = startCurrentDate.value;
    let endCurrentValue = endCurrentDate.value;
    let startUpgradeValue = startUpgradeDate.value;
    let endUpgradeValue = endUpgradeDate.value;

    //Convert the values to Date objects
    let startDate_current = new Date(startCurrentValue);
    let endDate_current = new Date(endCurrentValue);
    let startDate_upgrade = new Date(startUpgradeValue);
    let endDate_upgrade = new Date(endUpgradeValue);

    //Calculate the difference in time (milliseconds)
    let timeDifference_current = endDate_current - startDate_current;
    let timeDifference_upgrade = endDate_upgrade - startDate_upgrade;

    //Convert time difference from milliseconds to days
    let dayDifference_current = timeDifference_current / (1000 * 3600 * 24);
    let dayDifference_upgrade = timeDifference_upgrade / (1000 * 3600 * 24);

    //Display difference between day
    console.log(dayDifference_current);
    console.log(dayDifference_upgrade);

    //Calculate plan price for current plan in day
    let current_price = dayDifference_current * current_plan;
    console.log(current_price);

    //Calculate plan price for upgrade plan in day
    let upgrade_price = dayDifference_upgrade * upgrade_plan;
    console.log(upgrade_price);

    //calculate upgrade price
    let upgrade_total = upgrade_price - current_price;
    console.log(upgrade_total);

    //calculate prorate
    let prorate = current_price;

    //create a logic where if a month, it will get the full date and then it will = full date of month - used days = (remaining unused days * daily rate) to be prorate discount

    document.getElementById('difference_current').textContent = "Current Plan Used Days: " + dayDifference_current;
    document.getElementById('current_price').textContent = "Current Price: RM " + current_price;
    document.getElementById('difference_upgrade').textContent = "Upgrade Plan Days: " + dayDifference_upgrade;
    document.getElementById('upgrade_price').textContent = "Upgrade Price: RM " + upgrade_price;
    document.getElementById('result').textContent = "Upgrade Price To Pay: RM " + upgrade_total;
    document.getElementById('prorate').textContent = "Prorate Discount Given to Customer: RM " + prorate;
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