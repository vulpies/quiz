document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.querySelector("#btnOpenModal")
    const modalBlock = document.querySelector("#modalBlock")
    const closeModal = document.querySelector("#closeModal")
    const questionTitle = document.querySelector("#question")
    const formAnswers = document.querySelector("#formAnswers")
    const nextBtn = document.querySelector("#next")
    const prevBtn = document.querySelector("#prev")

    const questions = [
        {
            question: "Какого цвета бургер?",
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
            type: "radio",
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: "Курица",
                    url: "./image/chickenMeat.png",
                },
                {
                    title: "Говядина",
                    url: "./image/beefMeat.png",
                },
                {
                    title: "Свинина",
                    url: "./image/porkMeat.png",
                },
            ],
            type: "radio",
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: "Помидор",
                    url: "./image/tomato.png",
                },
                {
                    title: "Огурец",
                    url: "./image/cucumber.png",
                },
                {
                    title: "Салат",
                    url: "./image/salad.png",
                },
                {
                    title: "Лук",
                    url: "./image/onion.png",
                },
            ],
            type: "checkbox",
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: "Чесночный",
                    url: "./image/sauce1.png",
                },
                {
                    title: "Томатный",
                    url: "./image/sauce2.png",
                },
                {
                    title: "Горчичный",
                    url: "./image/sauce3.png",
                },
            ],
            type: "radio",
        },
    ]

    btnOpenModal.addEventListener("click", () => {
        modalBlock.classList.add("d-block")
        playTest()
    })

    closeModal.addEventListener("click", () => {
        modalBlock.classList.remove("d-block")
    })

    const playTest = () => {
        let numberQuestion = 0

        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement("div")

                answerItem.classList.add(
                    "answers-item",
                    "d-flex",
                    "justify-content-center"
                )

                answerItem.innerHTML = `<input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="${answer.url}" alt="burger">
                <span>${answer.title}</span>
                </label>`
                formAnswers.appendChild(answerItem)
            })

            if ((numberQuestion = 0)) {
                prevBtn.remove
            }
        }

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = ""
            questionTitle.textContent = `${questions[indexQuestion].question}`

            renderAnswers(indexQuestion)
        }
        renderQuestions(numberQuestion)

        nextBtn.onclick = () => {
            numberQuestion++
            renderQuestions(numberQuestion)
        }

        prevBtn.onclick = () => {
            numberQuestion--
            renderQuestions(numberQuestion)
        }
    }
}) //DOMContentLoaded
