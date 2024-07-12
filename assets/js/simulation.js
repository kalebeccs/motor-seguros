const formSimulation = document.getElementById('simulation-form'),
      nameSimulation = document.getElementById('simulation-name'),
      nifSimulation = document.getElementById('simulation-nif'),
      registrationSimulation = document.getElementById('simulation-registration'),
      emailSimulation = document.getElementById('simulation-email'),
      submitSimulation = document.getElementById('simulation-submit')

submitSimulation.addEventListener('click',(e) => {
    e.preventDefault()
    saveSimulation()
})

const getSimulation = () => {
    const simulation = {
        "name": nameSimulation.value,
        "nif": nifSimulation.value,
        "registration": registrationSimulation.value,
        "email": emailSimulation.value
    }

    return simulation
}

const saveSimulation = () => {
    let simulationList = []

    if (localStorage.getItem("simulation") == null) {
        simulationList.push(getSimulation())
        localStorage.setItem("simulation", JSON.stringify(simulationList))
    } else {
        simulationList = JSON.parse(localStorage.getItem("simulation"))
        simulationList.push(getSimulation())
        localStorage.setItem("simulation", JSON.stringify(simulationList))
    }
}