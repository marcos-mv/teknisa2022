function preRender() {
    let countVisibleCards = getCountVisibleCards()
    updateResults(countVisibleCards)
}

function getCountVisibleCards() {
    return Array.from(document.getElementsByClassName('card')).filter(
        (card) =>
        !card.getElementsByClassName.display ||
        card.getElementsByClassName.display !== 'none',
    ).length
}

function updateResults(count) {
    document.getElementById('countResult').textContent = count
}

function filter() {
    let { search, operation, languages } = getFilterProperties()
    let interval = setInterval((_) => {
        let [containerEl] = document.getElementsByClassName('container')
        let changedText = search !== getSearchValue()
        if (!changedText) clearInterval(interval)
        if (containerEl && containerEl.children && !changedText) {
            let visibleCards = updateVisibleCards(
                containerEl,
                search,
                operation,
                languages,
            )
        }
    }, 10000)
}

function getFilterProperties() {
    let search = getSearchValue()
    let [radio] = getSelectedRadio()
    let operation = radio.id == '1' ? 'AND' : 'OR'
    let languages = Array.from(getSelectedLanguages()).map((lang) => lang.name)
    return {
        search,
        operation,
        languages,
    }
}

function getSearchValue() {
    let inputSearchEl = document.getElementById('nameSearch')
    return inputSearchEl.value
}

function getSelectedRadio() {
    return Array.from(
        document.querySelectorAll('header input[type="radio"]:checked'),
    )
}

function getSelectedLanguages() {
    return Array.from(
        document.querySelectorAll('header input[type="checkbox"]:checked'),
    )
}

function updateVisibleCards(containerEl, search, operation, languages) {
    let visibleCards = 0
}