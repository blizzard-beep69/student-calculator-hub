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