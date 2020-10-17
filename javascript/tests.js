const modal = document.querySelector(".modal");
// const GMATmodal = document.querySelector(".GMATmodal");
    const trigger = document.querySelector("#GREtrigger");
    const trigger1 = document.querySelector("#GMATtrigger");
    const trigger2 = document.querySelector("#IELTStrigger");
    const trigger3 = document.querySelector("#TOEFLtrigger");
    const trigger4 = document.querySelector("#PTEtrigger");
    const trigger5 = document.querySelector("#IAStrigger");
    const examName = document.querySelector("#exam-name")
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "GRE"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
    });
    trigger1.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "GMAT"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
    });
    trigger2.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "IELTS"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
    });
    trigger3.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "TOEFL"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
    });
    trigger4.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "PTE"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
    });
    trigger5.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "IAS"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
    });
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

