document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.querySelector("#btnOpenModal")
    const modalBlock = document.querySelector("#modalBlock")
    const closeModal = document.querySelector("#closeModal")
    const questionTitle = document.querySelector("#question")
    const formAnswers = document.querySelector("#formAnswers")

    btnOpenModal.addEventListener("click", () => {
        modalBlock.classList.add("d-block")
        playTest()
    })

    closeModal.addEventListener("click", () => {
        modalBlock.classList.remove("d-block")
    })

    const playTest = () => {
        const renderQuestions = () => {
            questionTitle.textContent = "Какого цвета бургер вы хотите?"

            let standardBurger = document.createElement("img")
            standardBurger.src = "./image/burger.png"
            standardBurger.width = 130

            let blackBurger = document.createElement("img")
            blackBurger.src = "./image/burgerBlack.png"
            blackBurger.width = 130

            formAnswers.append(standardBurger, blackBurger)
        }
        renderQuestions()
    }
}) //DOMContentLoaded
