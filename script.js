function showCalculator(type) {

    const title = document.getElementById("calculator-title");
    const content = document.getElementById("calculator-content");

    if (type === "percentage") {

        title.textContent = "📊 Percentage Calculator";

        content.innerHTML = `
            <p>Enter your marks:</p>

            <input type="number" id="obtained" placeholder="Marks obtained">

            <input type="number" id="total" placeholder="Total marks">

            <br><br>

            <button onclick="calculatePercentage()">Calculate</button>

            <h3 id="result"></h3>
        `;
    }

    else if (type === "attendance") {

        title.textContent = "📅 Attendance Calculator";

        content.innerHTML = `
            <p>Enter your classes:</p>

            <input type="number" id="attended" placeholder="Classes attended">

            <input type="number" id="conducted" placeholder="Total classes">

            <br><br>

            <button onclick="calculateAttendance()">Calculate</button>

            <h3 id="result"></h3>
        `;
    }

    
    else if (type === "sgpa") {

    title.textContent = "📚 SGPA Calculator";

    content.innerHTML = `
        <p>Select your grade and enter the credits for each subject:</p>

        <select id="grade1">
            <option value="">Subject 1 Grade</option>
            <option value="10">A</option>
            <option value="8">B</option>
            <option value="7">C</option>
            <option value="6">D</option>
            <option value="5">E</option>
            <option value="0">F</option>
        </select>

        <input type="number" id="credit1" placeholder="Subject 1 Credits">

        <select id="grade2">
            <option value="">Subject 2 Grade</option>
            <option value="10">A</option>
            <option value="8">B</option>
            <option value="7">C</option>
            <option value="6">D</option>
            <option value="5">E</option>
            <option value="0">F</option>
        </select>

        <input type="number" id="credit2" placeholder="Subject 2 Credits">

        <select id="grade3">
            <option value="">Subject 3 Grade</option>
            <option value="10">A</option>
            <option value="8">B</option>
            <option value="7">C</option>
            <option value="6">D</option>
            <option value="5">E</option>
            <option value="0">F</option>
        </select>

        <input type="number" id="credit3" placeholder="Subject 3 Credits">

        <br><br>

        <button onclick="calculateSGPA()">Calculate SGPA</button>

        <h3 id="result"></h3>
    `;
}

    else if (type === "required") {

    title.textContent = "📝 Marks Required Calculator";

    content.innerHTML = `
        <p>Enter your marks and target percentage:</p>

        <input type="number" id="currentMarks" placeholder="Marks obtained so far">

        <input type="number" id="currentTotal" placeholder="Total marks so far">

        <input type="number" id="remainingTotal" placeholder="Remaining total marks">

        <input type="number" id="targetPercentage" placeholder="Target percentage">

        <br><br>

        <button onclick="calculateRequiredMarks()">
            Calculate
        </button>

        <h3 id="result"></h3>
    `;
}
    
    else if (type === "cgpa") {

        title.textContent = "🎓 CGPA Calculator";

        content.innerHTML = `
            <p>Enter your semester GPAs:</p>

            <input type="number" step="0.01" id="sem1" placeholder="Semester 1">

            <input type="number" step="0.01" id="sem2" placeholder="Semester 2">

            <input type="number" step="0.01" id="sem3" placeholder="Semester 3">

            <br><br>

            <button onclick="calculateCGPA()">Calculate</button>

            <h3 id="result"></h3>
        `;
    }
}
function calculateSGPA() {

    const grade1 = Number(document.getElementById("grade1").value);
    const credit1 = Number(document.getElementById("credit1").value);

    const grade2 = Number(document.getElementById("grade2").value);
    const credit2 = Number(document.getElementById("credit2").value);

    const grade3 = Number(document.getElementById("grade3").value);
    const credit3 = Number(document.getElementById("credit3").value);

    const totalCredits = credit1 + credit2 + credit3;

    if (totalCredits <= 0) {
        document.getElementById("result").textContent =
            "Please enter valid credits.";
        return;
    }

    const sgpa =
        ((grade1 * credit1) +
        (grade2 * credit2) +
        (grade3 * credit3)) / totalCredits;

    document.getElementById("result").textContent =
        "Your SGPA is " + sgpa.toFixed(2);
}

    function calculateRequiredMarks() {

    const currentMarks =
        Number(document.getElementById("currentMarks").value);

    const currentTotal =
        Number(document.getElementById("currentTotal").value);

    const remainingTotal =
        Number(document.getElementById("remainingTotal").value);

    const targetPercentage =
        Number(document.getElementById("targetPercentage").value);

    if (
        currentTotal <= 0 ||
        remainingTotal <= 0 ||
        targetPercentage <= 0
    ) {
        document.getElementById("result").textContent =
            "Please enter valid values.";
        return;
    }

    const totalMarks =
        currentTotal + remainingTotal;

    const targetMarks =
        (targetPercentage / 100) * totalMarks;

    const requiredMarks =
        targetMarks - currentMarks;

    document.getElementById("result").textContent =
        "You need " + requiredMarks.toFixed(2) +
        " marks from the remaining " + remainingTotal + " marks.";
}

function calculatePercentage() {

    const obtained = Number(document.getElementById("obtained").value);
    const total = Number(document.getElementById("total").value);

    if (total <= 0 || obtained < 0) {
        document.getElementById("result").textContent =
            "Please enter valid marks.";
        return;
    }

    const percentage = (obtained / total) * 100;

    document.getElementById("result").textContent =
        "Your percentage is " + percentage.toFixed(2) + "%";
}


function calculateAttendance() {

    const attended = Number(document.getElementById("attended").value);
    const conducted = Number(document.getElementById("conducted").value);

    if (conducted <= 0 || attended < 0 || attended > conducted) {
        document.getElementById("result").textContent =
            "Please enter valid attendance.";
        return;
    }

    const attendance = (attended / conducted) * 100;

    document.getElementById("result").textContent =
        "Your attendance is " + attendance.toFixed(2) + "%";
}


function calculateCGPA() {

    const sem1 = Number(document.getElementById("sem1").value);
    const sem2 = Number(document.getElementById("sem2").value);
    const sem3 = Number(document.getElementById("sem3").value);

    const cgpa = (sem1 + sem2 + sem3) / 3;

    document.getElementById("result").textContent =
        "Your CGPA is " + cgpa.toFixed(2);
}
