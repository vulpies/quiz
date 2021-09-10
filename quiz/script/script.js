document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.querySelector("#btnOpenModal")
    const modalBlock = document.querySelector("#modalBlock")
    const closeModal = document.querySelector("#closeModal")
    const questionTitle = document.querySelector("#question")
    const formAnswers = document.querySelector("#formAnswers")
    const nextBtn = document.querySelector("#next")
    const prevBtn = document.querySelector("#prev")
    const burgerBtn = document.getElementById("burger")
    const sendBtn = document.querySelector("#send")
    const closeBtn = document.querySelector(".close")

    //код продублирован, чтобы при обновлении страницы бургера не было изначально
    if (document.documentElement.clientWidth < 768) {
        burgerBtn.style.display = "flex"
    } else {
        burgerBtn.style.display = "none"
    }

    window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < 768) {
            burgerBtn.style.display = "flex"
        } else {
            burgerBtn.style.display = "none"
        }
    })

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

    burgerBtn.addEventListener("click", () => {
        modalBlock.classList.add("d-block")
        playTest()
    })

    btnOpenModal.addEventListener("click", () => {
        modalBlock.classList.add("d-block")
        playTest()
    })

    closeModal.addEventListener("click", () => {
        modalBlock.classList.remove("d-block")
    })

    closeBtn.addEventListener("click", () => {
        modalBlock.classList.remove("d-block")
    })

    const playTest = () => {
        let numberQuestion = 0
        const finalAnswers = []

        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement("div")

                answerItem.classList.add(
                    "answers-item",
                    "d-flex",
                    "justify-content-center"
                )

                answerItem.innerHTML = `<input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="${answer.url}" alt="burger">
                <span>${answer.title}</span>
                </label>`
                formAnswers.appendChild(answerItem)
            })
        }

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = ""

            if (numberQuestion === 0) {
                prevBtn.hidden = true
                sendBtn.classList.add("d-none")
                /* другой способ
                prevBtn.classList.add("d-none")
                prevBtn.classList.remove("d-none") */
            } else if (numberQuestion === questions.length) {
                prevBtn.hidden = true
                nextBtn.hidden = true
                sendBtn.classList.remove("d-none")
                formAnswers.innerHTML = `
                <div class="form-group">
                <label for="numberPhone">Enter your number</label>
                <input type ="phone" class="form-control" id="numberPhone">
                </div>
                `
            } else if (numberQuestion === questions.length + 1) {
                sendBtn.hidden = true
                formAnswers.textContent = "Спасибо за пройденный тест!"
                setTimeout(() => {
                    modalBlock.classList.remove("d-block")
                }, 2000)
            } else {
                prevBtn.hidden = false
                nextBtn.hidden = false
                sendBtn.classList.add("d-none")
                questionTitle.textContent = `${questions[indexQuestion].question}`
            }
            renderAnswers(indexQuestion)
        }

        renderQuestions(numberQuestion)

        function checkAnswer() {
            const obj = {}

            const inputs = [...formAnswers.elements].filter(
                (input) => input.checked || input.id === "numberPhone"
            )

            inputs.forEach((input, index) => {
                if (
                    numberQuestion >= 0 &&
                    numberQuestion <= questions.length - 1
                ) {
                    obj[`${index}_${questions[numberQuestion].question}`] =
                        input.value
                }

                if (numberQuestion === questions.length) {
                    obj["Номер телефона"] = input.value
                }
            })

            finalAnswers.push(obj)
            console.log(finalAnswers)
        }

        nextBtn.onclick = () => {
            checkAnswer()
            numberQuestion++
            renderQuestions(numberQuestion)
        }

        prevBtn.onclick = () => {
            numberQuestion--
            renderQuestions(numberQuestion)
        }

        sendBtn.onclick = () => {
            checkAnswer()
            numberQuestion++
            renderQuestions(numberQuestion)
        }
    }
}) //DOMContentLoaded
