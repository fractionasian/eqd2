function calculateHighDose() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const alphaBeta = parseFloat(document.getElementById('alphaBeta').value);
    const highDose = parseFloat(document.getElementById('highDose').value);

    if (isNaN(fractions) || isNaN(alphaBeta) || isNaN(highDose)) {
        document.getElementById('highDoseResult').textContent = "Invalid input";
        document.getElementById('highDosePerFraction').textContent = "";
        return;
    }

    const dosePerFraction = highDose / fractions;
    const eqd2 = highDose * (((highDose / fractions) + alphaBeta) / (2 + alphaBeta))
    ;

    document.getElementById('highDosePerFraction').textContent = dosePerFraction.toFixed(2);
    document.getElementById('highDoseResult').textContent = eqd2.toFixed(2);
}

function calculateIntermediateDose() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const alphaBeta = parseFloat(document.getElementById('alphaBeta').value);
    const intermediateDose = parseFloat(document.getElementById('intermediateDose').value);

    if (isNaN(fractions) || isNaN(alphaBeta) || isNaN(intermediateDose)) {
        document.getElementById('intermediateDoseResult').textContent = "Invalid input";
        document.getElementById('intermediateDosePerFraction').textContent = "";
        return;
    }

    const dosePerFraction = intermediateDose / fractions;
    const eqd2 = intermediateDose * (((intermediateDose / fractions) + alphaBeta) / (2 + alphaBeta))
    ;

    document.getElementById('intermediateDosePerFraction').textContent = dosePerFraction.toFixed(2);
    document.getElementById('intermediateDoseResult').textContent = eqd2.toFixed(2);
}

function calculateLowDose() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const alphaBeta = parseFloat(document.getElementById('alphaBeta').value);
    const lowDose = parseFloat(document.getElementById('lowDose').value);

    if (isNaN(fractions) || isNaN(alphaBeta) || isNaN(lowDose)) {
        document.getElementById('lowDoseResult').textContent = "Invalid input";
        document.getElementById('lowDosePerFraction').textContent = "";
        return;
    }

    const dosePerFraction = lowDose / fractions;
    const eqd2 = lowDose * (((lowDose / fractions) + alphaBeta) / (2 + alphaBeta))
    ;

    document.getElementById('lowDosePerFraction').textContent = dosePerFraction.toFixed(2);
    document.getElementById('lowDoseResult').textContent = eqd2.toFixed(2);
}

function calculateAllResults() {
    calculateHighDose();
    calculateIntermediateDose();
    calculateLowDose();
}

// Initialize the calculation with the default values
window.onload = calculateAllResults;

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
