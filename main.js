const movies = [
    { title: 'Inception', director: 'Christopher Nolan', watched: false },
    { title: 'The Matrix', director: 'The Wachowskis', watched: false },
    { title: 'Fast & Furious', director: 'Rob Cohen', watched: true },
]

function movies() {
    let choice

    do {
        choice = prompt(`
            Movie Tracker:\n
            1) Add Movies \n
            2) List Movies \n
            3) Mark Movie as Watched \n
            4) Exit
            `);

        switch (choice) {
            case '1':
                addMovie();
                break;
            case '2':
                listMovies();
                break;
            case '3':
                watchedMovie();
                break;
            case '4':
                alert("Goodbye!");
                break;
            default:
                alert("Invalid choice.");
        }
    } while (choice !== '4');
}

function addMovie() {
    const movieTitle = prompt("Enter movie title:");
    const movieDirector = prompt("Enter movie director:");
    if (movieTitle && movieDirector) {
        movies.push({ title: movieTitle, director: movieDirector, watched: false });
        alert(`Movie "${title}" by ${director} has been added.`);
    } else {
        alert("Invalid input. Both title and director are required.");
    }
}

movies();