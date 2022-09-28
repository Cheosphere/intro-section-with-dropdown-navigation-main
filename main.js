const features = document.getElementById('features')
const featuresMenu = document.getElementById('features_menu')
const iconFeatures = document.getElementById('icon_features')
const company = document.getElementById('company')
const companyMenu = document.getElementById('company_menu')
const iconCompany = document.getElementById('icon_company')
const iconMobileMenu = document.getElementById('icon_mobile_menu')
const headerNaMenu = document.getElementById('header_nav_menu')
const mask = document.getElementById('mask')
const container = document.getElementById('container')

// Function that toggles arrow icon in dropdown features menu
features.addEventListener('click', () => {
    featuresMenu.classList.toggle('show_menu')
    iconFeatures.classList.toggle('rotate')
})

// Function that toggles arrow icon in dropdown company menu
company.addEventListener('click', () => {
    companyMenu.classList.toggle('show_menu')
    iconCompany.classList.toggle('rotate')
})

// Function that shows and hides mobile menu
iconMobileMenu.addEventListener('click', () => {
    iconMobileMenu.classList.toggle('icon_close_menu')
    headerNaMenu.classList.toggle('show_mobile_menu')
    mask.classList.toggle('show_mask')
})

