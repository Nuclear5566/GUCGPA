function calculateGPA() {
    let grades = document.querySelectorAll(".grade");
    let weights = document.querySelectorAll(".weight");
    let totalCredits = 0;
    let totalGPA = 0;
    
    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        let weight = parseInt(weights[i].value);
        
        if (isNaN(grade) || isNaN(weight) || weight <= 0) {
            alert("Invalid input. Please enter valid numbers.");
            return;
        }
        
        totalGPA += grade * weight;
        totalCredits += weight;
    }
    
    let GPA = totalGPA / totalCredits;
    document.getElementById("result").innerText = `Your total GPA is: ${GPA.toFixed(2)}`;
}

function addSubject() {
    let container = document.getElementById("subjects");
    let div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.innerHTML = `<input type="number" class="grade" placeholder="Enter Grade" step="0.01" 
                     style="flex: 1; padding: 10px; margin-right: 5px; border: none; background: #2a2a2a; color: #fff; border-radius: 5px; appearance: textfield;">
                     <input type="number" class="weight" placeholder="Enter Weight" 
                     style="flex: 1; padding: 10px; border: none; background: #2a2a2a; color: #fff; border-radius: 5px; appearance: textfield;">`;
    container.appendChild(div);
}
