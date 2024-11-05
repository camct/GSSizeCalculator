let isInchMode = true;

window.onload = function() {
    document.getElementById('finalLength').value = '0';
    document.getElementById('customizeLink').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    document.getElementById('feetInput').value = '';
    document.getElementById('inchesInput').value = '';
    document.getElementById('heightCm').value = '';
}

function updateCustomizeLink() {
    // Get the actual referring page
    const referrer = document.referrer;
    const link = document.querySelector('#message a');
    link.style.display = 'block';
    
    // Check which page the user came from
    if (referrer.includes('Original-Custom-Grass-Sticks')) {
        link.href = 'https://www.grasssticks.com/shop#!/Original-Custom-Grass-Sticks/p/55001151/category=23444012';
        link.textContent = 'Continue customizing your Original Custom Grass Sticks';
    } 
    else if (referrer.includes('Kids-Sticks')) {
        link.href = 'https://www.grasssticks.com/shop#!/Kids-Sticks-Grow-with-your-poles-program/p/94782479/category=23444012';
        link.textContent = 'Continue customizing your Kids Sticks';
    }
    else if (referrer.includes('Ringtail-Torched-Sticks')) {
        link.href = 'https://www.grasssticks.com/shop#!/Ringtail-Torched-Sticks/p/506210440/category=23444012';
        link.textContent = 'Continue customizing your Ringtail Torched Sticks';
    }
    else if (referrer.includes('Touring-Sticks')) {
        link.href = 'https://www.grasssticks.com/shop#!/Touring-Sticks/p/74102380/category=23444012';
        link.textContent = 'Continue customizing your Touring Sticks';
    }
    else if (referrer.includes('Hiking-Sticks')) {
        link.href = 'https://www.grasssticks.com/shop#!/Hiking-Sticks/p/570262509/category=23444012';
        link.textContent = 'Continue customizing your Hiking Sticks';
    }
    else {
        link.href = 'https://www.grasssticks.com/shop#!/Grass-Sticks-Ski-Poles/c/23444012';
        link.textContent = 'Customize my own ski poles';
    }
}

function toggleUnit() {
    isInchMode = !document.getElementById('unitToggle').checked;
    
    // Hide message when toggling
    document.getElementById('message').style.display = 'none';
    document.getElementById('customizeLink').style.display = 'none';
    
    // Update unit display
    document.getElementById('unitDisplay').textContent = isInchMode ? 'in' : 'cm';
    
    // Reset the final length display
    document.getElementById('finalLength').value = '0';
    
    // Maintain flex layout when toggling display
    const feetInchInputs = document.getElementById('feetInchInputs');
    const cmInput = document.getElementById('cmInput');
    
    if (isInchMode) {
        feetInchInputs.style.display = 'flex';
        cmInput.style.display = 'none';
    } else {
        feetInchInputs.style.display = 'none';
        cmInput.style.display = 'flex';
    }
    
    // Update container background
    document.getElementById('sizeCalcContainer').style.background = isInchMode ? 'darkgreen' : 'lightgreen';
    document.getElementById('sizeCalcContainer').style.color = isInchMode ? 'white' : 'black';
    
    // Update toggle colors
    const unitLabels = document.querySelectorAll('.unit-label');
    unitLabels[0].style.color = isInchMode ? 'lightgreen' : 'darkgreen'; // IN label
    unitLabels[1].style.color = isInchMode ? 'lightgreen' : 'darkgreen'; // CM label
    
    // Update input styles
    const inputs = document.querySelectorAll('#feetInput, #inchesInput, #heightCm');
    inputs.forEach(input => {
        input.style.color = isInchMode ? 'white' : 'black';
        input.style.borderColor = isInchMode ? 'lightgreen' : 'darkgreen';
    });
    document.querySelector('.result-label').style.color = isInchMode ? 'white' : 'black';
    
    // Update result display border and text
    const resultDisplay = document.querySelector('.result-display');
    const resultLabel = document.querySelector('.result-label');
    resultDisplay.style.borderColor = isInchMode ? 'lightgreen' : 'darkgreen';
    resultDisplay.style.color = isInchMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.9)';
    
    // Clear inputs when switching
    document.getElementById('feetInput').value = '';
    document.getElementById('inchesInput').value = '';
    document.getElementById('heightCm').value = '';
    
    calculate();
    
    // Update arrow color
    const arrow = document.querySelector('.arrow');
    arrow.style.color = isInchMode ? 'lightgreen' : 'darkgreen';
    
    // Update button colors to match container
    const customizeLink = document.querySelector('#message a');
    customizeLink.style.backgroundColor = isInchMode ? 'darkgreen' : 'lightgreen';
    customizeLink.style.color = isInchMode ? 'white' : 'black';
}

function calculate() {
    if (isInchMode) {
        var feet = document.getElementById("feetInput").value;
        var inches = document.getElementById("inchesInput").value;

        if (feet === '' && inches === '') {
            document.getElementById('message').style.display = 'none';
            document.getElementById('finalLength').value = '0';
            document.getElementById('customizeLink').style.display = 'none';
            return;
        }

        if (isNaN(feet) || isNaN(inches)) {
            updateMessage("Please enter a valid height.");
            return;
        }

        if (feet || inches) {
            feet = feet ? parseInt(feet) : 0;
            inches = inches ? parseInt(inches) : 0;

            var height = (feet * 12) + inches;
            const poleSize = 0.5799 * height + 6.7078;

            if (poleSize > 54) {
                updateMessage(`Your recommended ski pole length is ${Math.round(poleSize)} inches, but we cannot build poles longer than 54 inches.`);
            }
            
            else if (poleSize > 0) {
                updateMessage(`Your recommended ski pole length is ${Math.round(poleSize)} inches.`);
            }
            
            calculateInches(poleSize);
        }
          


    } else {
        var heightCm = document.getElementById("heightCm").value;

        if (heightCm === '') {
            document.getElementById('message').style.display = 'none';
            document.getElementById('finalLength').value = '0';
            document.getElementById('customizeLink').style.display = 'none';
            return;
        }

        if (isNaN(heightCm)) {
            updateMessage("Please enter a valid height.");
            return;
        }

        if (heightCm) {
            const heightInches = heightCm / 2.54;
            const poleSize = 0.5799 * heightInches + 6.7078;
            const poleSizeCm = poleSize * 2.54;

            if (poleSizeCm > 137) {
                updateMessage(`Your recommended ski pole length is ${Math.round(poleSizeCm)} centimeters, but we cannot build poles longer than 137 centimeters.`);
            }
            else if (poleSizeCm > 0) {
                updateMessage(`Your recommended ski pole length is ${Math.round(poleSizeCm)} centimeters.`);
            }

            calculateCm(poleSize);
        }
    }
}

function calculateInches(poleSize) {
    const length = Math.round(poleSize);
    updateCustomizeLink();
    document.getElementById("finalLength").value = length;
}

function calculateCm(poleSize) {
    const lengthCm = Math.round(poleSize * 2.54);
    updateCustomizeLink();
    document.getElementById("finalLength").value = lengthCm;
}

function updateMessage(msg) {
    document.querySelector('#message p').textContent = msg;
    document.getElementById('message').style.display = 'block';
}

function clearMessage() {
    document.getElementById("message").style.display = "none";
}
