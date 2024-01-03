const ratings = document.querySelectorAll('#rating')
const submitBtn = document.getElementById('submit-btn')

let selectedRating = 0

function handleRatingClick(index: number) {
    if (selectedRating === index + 1) {
        selectedRating = 0
    } else {
        selectedRating = index + 1
    }

    ratings.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active-rating', selectedRating !== 0)
        } else {
            item.classList.remove('active-rating')
        }
    })
}

ratings.forEach((item, index) => {
    item.addEventListener('click', () => {
        handleRatingClick(index)
    })
})

submitBtn?.addEventListener('click', () => {
    if (selectedRating > 0) {
        console.log(`Selected Rating: ${selectedRating}`)
    }
})
