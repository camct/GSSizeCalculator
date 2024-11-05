<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            .ski-pole-calculator {
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .ski-pole-calculator .calculator-wrapper {
                width: 100%;
                aspect-ratio: 2 / 1;
                position: relative;
                margin: 20px 0;
                max-height: 430px;
            }

            .ski-pole-calculator #sizeCalcContainer {
                position: relative;
                width: 100%;
                height: 100%;
                max-width: 860px;
                margin: 0 auto;
                border: 8px solid #5a371d;
                font-family: "Palatino", serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                background: darkgreen;
                color: white;
                box-sizing: border-box;
                font-size: clamp(14px, 3vw, 24px);
            }

            .ski-pole-calculator #title {
                margin-top: 10px;
            }

            .ski-pole-calculator .heightInputs {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1em;
                margin-top: 0.5em;
                margin-left: 0;
            }

            .ski-pole-calculator .height {
                display: flex;
                align-items: center;
                gap: 0.3em;
            }

            .ski-pole-calculator label {
                margin-left: 8px;
            }

            .ski-pole-calculator #feetInput, .ski-pole-calculator #inchesInput, .ski-pole-calculator #heightCm {
                background-color: transparent;
                border: 1px solid lightgreen;
                color: white;
                width: 3em;
                font-size: 1.6em;
                text-align: center;
                border-radius: 0.25em;
            }

            /* Optional: Style for when inputs are focused */
            .ski-pole-calculator #feetInput:focus, .ski-pole-calculator #inchesInput:focus, .ski-pole-calculator #heightCm:focus {
                outline: none;
                border-color: lime;
                box-shadow: 0 0 8px rgba(0, 255, 0, 0.2);
            }

            .ski-pole-calculator .top,
            .ski-pole-calculator .mid,
            .ski-pole-calculator .bottom {
                margin-bottom: 10px;
                margin-left: 10px;
            }

            .ski-pole-calculator .paddlingStyle {
                font-size: 18px;
            }

            .ski-pole-calculator #finalLength {
                border: 0;
                width: 2.5em;
                font-size: 2.4em;
                color: rgba(0, 195, 0, 0.7);
                background: transparent;
                text-align: center;
                pointer-events: none;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                background: transparent;
                border: none;
                outline: none;
                cursor: default;
            }

            .ski-pole-calculator #clearBtn {
                margin-bottom: 7px;
                margin-top: 7px;
                float: left;
                border-radius: 4px;
                width: 120px;
                font-size: 16px;
                text-transform: uppercase;
            }

            /* Large screens (default above) */
            .ski-pole-calculator h2 {
                font-size: 2.2em;
                margin: 0;
                padding: 0.5em 0;
                text-align: center;
                position: relative;
                line-height: 1.2;
            }

            /* Medium screens */
            @media (max-width: 900px) {
                .ski-pole-calculator #sizeCalcContainer {
                    width: 100%;
                    /* min-height: 430px; */
                    margin: 10px auto;
                    border-width: 6px;
                }

                .ski-pole-calculator h2 {
                    font-size: 2rem;
                    margin-left: -30px;
                }

                .ski-pole-calculator .heightInputs {
                    margin-top: 0;
                }

                .ski-pole-calculator #feetInput, .ski-pole-calculator #inchesInput, .ski-pole-calculator #heightCm {
                    width: 40px;
                    font-size: 14px;
                }

                .ski-pole-calculator .result-display {
                    padding: 12px 20px;
                }

                .ski-pole-calculator #finalLength {
                    font-size: 24px;
                }
            }


            .ski-pole-calculator .toggle-container {
                display: flex;
                align-items: center;
                gap: 5px;
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 0.8em;
            }

            .ski-pole-calculator .unit-label {
                font-weight: bold;
                font-size: 12px;
                color: lightgreen;
            }

            /* The switch - the box around the slider */
            .ski-pole-calculator .switch {
                position: relative;
                display: inline-block;
                width: 3.5em;
                height: 2em;
            }

            /* Hide default HTML checkbox */
            .ski-pole-calculator .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            /* The slider */
            .ski-pole-calculator .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: lightgreen;
                transition: .4s;
            }

            .ski-pole-calculator .slider:before {
                position: absolute;
                content: "";
                height: 1.6em;
                width: 1.6em;
                left: 0.2em;
                bottom: 0.2em;
                background-color: white;
                transition: .4s;
            }

            .ski-pole-calculator input:checked + .slider {
                background-color: darkgreen;
            }

            .ski-pole-calculator input:focus + .slider {
                box-shadow: 0 0 1px darkgreen;
            }

            .ski-pole-calculator input:checked + .slider:before {
                transform: translateX(1.5em);
            }

            /* Rounded sliders */
            .ski-pole-calculator .slider.round {
                border-radius: 34px;
            }

            .ski-pole-calculator .slider.round:before {
                border-radius: 50%;
            }

            .ski-pole-calculator .result-display {
                text-align: center;
                padding: 0.8em 1.2em;
                border: 0.2em solid lightgreen;
                border-radius: 0.6em;
                font-size: 1em;
            }

            .ski-pole-calculator h2 {
                margin-bottom: 20px;
                margin-left: -50px;
            }

            .ski-pole-calculator .result-label {
                color: white;
                margin-bottom: 0.5em;
                text-align: center;
                font-size: 1.2em;
            }

            .ski-pole-calculator .arrow {
                font-size: 2.8em;
                color: lightgreen;
                transition: color 0.4s;
            }

            .ski-pole-calculator #message {
                position: relative;
                width: fit-content;
                margin: 20px auto;
                background-color: white;
                padding: 20px 30px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                text-align: center;
            }

            .ski-pole-calculator #message p {
                color: black;
                margin: 0;
                font-size: 16px;
                font-family: "Gill Sans", sans-serif;
            }

            .ski-pole-calculator #message a {
                display: inline-block;
                margin-top: 15px;
                padding: 10px 20px;
                background-color: darkgreen;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                transition: all 0.4s;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }

            /* Add hover effect */
            .ski-pole-calculator #message a:hover {
                opacity: 0.9;
                transform: scale(1.02);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }

            /* Update the column layout */
            .ski-pole-calculator .col-6 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 1em;
                height: 100%;
            }

            /* Base size adjustment for mobile */
            @media (max-width: 500px) {
                .ski-pole-calculator #sizeCalcContainer {
                    font-size: clamp(10px, 2.5vw, 18px);  /* Reduced base font size */
                }

                .ski-pole-calculator h2 {
                    font-size: 1.8em;
                }

                .ski-pole-calculator #feetInput, 
                .ski-pole-calculator #inchesInput, 
                .ski-pole-calculator #heightCm {
                    width: 2.5em;
                    font-size: 1.3em;
                }

                .ski-pole-calculator .result-label {
                    font-size: 1.1em;
                }

                .ski-pole-calculator #finalLength {
                    font-size: 2em;
                }

                .ski-pole-calculator .arrow {
                    font-size: 2em;
                }
            }

            /* Even smaller for very small screens */
            @media (max-width: 350px) {
                .ski-pole-calculator #sizeCalcContainer {
                    font-size: clamp(8px, 2.2vw, 14px);  /* Further reduced base font size */
                }

                .ski-pole-calculator h2 {
                    font-size: 1.6em;
                }

                .ski-pole-calculator #feetInput, 
                .ski-pole-calculator #inchesInput, 
                .ski-pole-calculator #heightCm {
                    width: 2.2em;
                    font-size: 1.2em;
                }

                .ski-pole-calculator .result-label {
                    font-size: 1em;
                }

                .ski-pole-calculator #finalLength {
                    font-size: 1.8em;
                }

                .ski-pole-calculator .arrow {
                    font-size: 1.8em;
                }
            }
        </style>
    </head>
    <body>
        <div class="ski-pole-calculator">
            <div class="calculator-wrapper">
                <div class="container" id="sizeCalcContainer">
                    <div class="row h-100 text-center">
                        <div class="col-6 d-flex flex-column justify-content-center">
                            <h2>Height</h2>
                            <div class="heightInputs">
                                <div class="height" id="feetInchInputs">
                                    <div class="height" id="feet">
                                        <input type="text" id="feetInput" placeholder="0" onkeyup="calculate()" maxlength="1">
                                        <label>feet </label><br />
                                    </div>
                                    <div class="height" id="inches">
                                        <input type="text" id="inchesInput" placeholder="0" onkeyup="calculate()" maxlength="2">
                                        <label>inches</label><br />
                                    </div>
                                </div>
                                <div class="height" id="cmInput" style="display: none;">
                                    <input type="text" id="heightCm" placeholder="0" onkeyup="calculate()" maxlength="3" />
                                    <label>centimeters</label><br />
                                </div>
                            </div>
                            <div class="toggle-container">
                                <span class="unit-label">IN</span>
                                <label class="switch">
                                    <input type="checkbox" onclick="toggleUnit()" id="unitToggle">
                                    <span class="slider round"></span>
                                </label>
                                <span class="unit-label">CM</span>
                            </div>
                        </div>
                        <div class="col-2 d-flex justify-content-start align-items-center">
                            <div class="arrow">→</div>
                        </div>
                        <div class="col-4 d-flex justify-content-center align-items-center">
                            <div>
                                <div class="result-label">Ski pole length:</div>
                                <div class="result-display">
                                    <input id="finalLength" value="0" readonly>
                                    <span id="unitDisplay">in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="message" style="display: none;">
                <p>Please enter a valid height.</p>
                <a id="customizeLink" style='display: none;' href="https://www.grasssticks.com/shop#!/Original-Custom-Grass-Sticks/p/55001151/category=23444012">Customize your </a>
            </div>
        </div>
        
        <script>
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

        </script>
    </body>
</html>
