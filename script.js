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
    div.innerHTML = `<input type="number" class="grade" placeholder="Enter Grade" step="0.01"> 
                     <input type="number" class="weight" placeholder="Enter Weight">`;
    container.appendChild(div);
}
