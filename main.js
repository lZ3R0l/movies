const movies = [
    
]

function movies() {
    let choice

    do {
        choice = prompt(`
            Welcome to the ATM! Enter your choice:\n
            1) Add movies \n
            2) List movies \n
            3) Mark movie as watched \n
            4) Exit
            `);

        switch (choice) {
            case '1':
                
                break;
            case '2':
                
                break;
            case '3':
                
                break;
            case '4':
                alert("Goodbye!");
                break;
            default:
                alert("Invalid choice.");
        }
    } while (choice !== '4');
}

movies();