const mondayWorkouts = [
    "Bench Press: 4 sets x 8-10 reps",
    "Incline Dumbbell Press: 3 sets x 8-10 reps",
    "Tricep Dips: 3 sets x 10-12 reps",
    "Tricep Rope Pushdown: 3 sets x 10-12 reps",
    "Wrist Curls: 3 sets x 12-15 reps",
    "Hanging Leg Raises: 3 sets x 10-12 reps (for abs)"
];

const wednesdayWorkouts = [
    "Squats: 4 sets x 8-10 reps",
    "Romanian Deadlifts: 3 sets x 8-10 reps",
    "Glute Bridges: 3 sets x 10-12 reps",
    "Leg Press: 3 sets x 10-12 reps",
    "Standing Calf Raises: 4 sets x 12-15 reps"
];

const fridayWorkouts = [
    "Pull-Ups or Lat Pulldowns: 4 sets x 8-10 reps",
    "Bent-Over Rows: 3 sets x 8-10 reps",
    "Seated Dumbbell Shoulder Press: 3 sets x 8-10 reps",
    "Bicep Curls (Barbell or Dumbbell): 3 sets x 10-12 reps",
    "Hammer Curls: 3 sets x 10-12 reps",
    "Reverse Wrist Curls: 3 sets x 12-15 reps"
];

let currentDay = "Monday";
let currentWorkouts = mondayWorkouts;

const workoutList = document.getElementById("workout-list");
const dayName = document.getElementById("day-name");
const workoutsList = document.getElementById("workouts-list");
const completeButton = document.getElementById("complete-button");
const resetButton = document.getElementById("reset-week-button");
const congratulations = document.getElementById("congratulations");

function loadWorkouts() {
    const list = currentWorkouts.map(workout => `<li><input type="checkbox">${workout}</li>`).join('');
    workoutsList.innerHTML = list;
}

function enableCompleteButton() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    completeButton.disabled = !allChecked;
}

function markComplete() {
    if (currentDay === "Monday") {
        currentDay = "Wednesday";
        currentWorkouts = wednesdayWorkouts;
    } else if (currentDay === "Wednesday") {
        currentDay = "Friday";
        currentWorkouts = fridayWorkouts;
    } else {
        workoutList.style.display = "block";
        congratulations.style.display = "block";
        completeButton.style.display = "none";
        resetButton.style.display = "block";
        return;
    }

    dayName.textContent = `${currentDay}`;
    loadWorkouts();
    completeButton.disabled = true;
}

function resetWeek() {
    currentDay = "Monday";
    currentWorkouts = mondayWorkouts;
    dayName.textContent = `${currentDay}`;
    loadWorkouts();
    completeButton.disabled = true;
    completeButton.style.display = "block";
    resetButton.style.display = "none";
    congratulations.style.display = "none";
}

loadWorkouts();
completeButton.addEventListener("click", markComplete);
workoutsList.addEventListener("change", enableCompleteButton);
resetButton.addEventListener("click", resetWeek);
