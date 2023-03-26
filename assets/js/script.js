// replace windows
const ButtonRep = document.querySelector(".repositorio")

const CardPokedex = document.querySelector("#pokedex")
const CardFormove = document.querySelector("#formove")
const CardForetec = document.querySelector("#foretec")
const CardRating = document.querySelector("#rating-page")

ButtonRep.addEventListener('click', () => window.location.href = 'https://github.com/Davasz?tab=repositories')

CardPokedex.addEventListener('click', () => window.location.href = 'https://github.com/Davasz/Pokedex')
CardFormove.addEventListener('click', () => window.location.href = 'https://github.com/Davasz/formove')
CardForetec.addEventListener('click', () => window.location.href = 'https://github.com/Davasz/foretec')
CardRating.addEventListener('click', () => window.location.href = 'https://github.com/Davasz/qualityrating-page')
