document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.querySelector("#btnOpenModal")
    const modalBlock = document.querySelector("#modalBlock")
    const closeModal = document.querySelector("#closeModal")
    const questionTitle = document.querySelector("#question")
    const formAnswers = document.querySelector("#formAnswers")

    const questions = {
        question: "Какого цвета бургер вы хотите?",
        answers: [
            {
                title: "Стандарт",
                url: "./image/burger.png",
            },
            {
                title: "Черный",
                url: "./image/burgerBlack.png",
            },
        ],
    }

    btnOpenModal.addEventListener("click", () => {
        modalBlock.classList.add("d-block")
        playTest()
    })

    closeModal.addEventListener("click", () => {
        modalBlock.classList.remove("d-block")
    })

    const playTest = () => {
        const renderAnswers = () => {
            for (i = 0; i < 2; i++) {
                const answerItem = document.createElement("div")
                answerItem.classList =
                    "answers-item d-flex justify-content-center"

                answerItem.innerHTML = `<input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src=${questions.answers[i].url} alt="burger">
                <span>${questions.answers[i].title}</span>
                </label>`
                formAnswers.appendChild(answerItem)
            }
        }

        const renderQuestions = () => {
            questionTitle.textContent = `${questions.question}`

            renderAnswers()
        }
        renderQuestions()
    }
}) //DOMContentLoaded
