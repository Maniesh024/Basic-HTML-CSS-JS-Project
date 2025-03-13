function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year || day < 1 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "#e0e5ec", 500);
        return;
    }

    let maxDays = new Date(year, month, 0).getDate();
    if (day > maxDays) {
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "#e0e5ec", 500);
        return;
    }

    let dobDate = new Date(year, month - 1, day);
    let today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    let totalDays = Math.floor((today - dobDate) / (1000 * 60 * 60 * 24));
    let totalMonths = years * 12 + months;
    let totalWeeks = Math.floor(totalDays / 7);
    let totalHours = totalDays * 24;
    let totalMinutes = totalHours * 60;
    let totalSeconds = totalMinutes * 60;

    document.getElementById("years-box").innerText = `${years} Years`;
    document.getElementById("months-box").innerText = `${months} Months`;
    document.getElementById("days-box").innerText = `${days} Days`;
    document.getElementById("total-months-box").innerText = `${totalMonths} Months + ${days} Days`;
    document.getElementById("total-days-box").innerText = `${totalDays} Total Days`;
    document.getElementById("weeks-box").innerText = `${totalWeeks} Weeks`;
    document.getElementById("hours-box").innerText = `${totalHours} Hours`;
    document.getElementById("minutes-box").innerText = `${totalMinutes} Minutes`;
    document.getElementById("seconds-box").innerText = `${totalSeconds} Seconds`;

    setTimeout(() => {
        document.getElementById("day").value = "";
        document.getElementById("month").value = "";
        document.getElementById("year").value = "";
    }, 500);
}
