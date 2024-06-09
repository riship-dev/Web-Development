beer(99);

function beer(bottles) {
    original = bottles;
    while(bottles >= 0) {
        if (bottles === 0) {
            console.log (
                "No more bottles of beer on the wall, no more bottles of beer. \n"
                + "Go to the store and buy some more, "
                + original
                + " bottles of beer on  the wall."
            );
            break;
        }
        console.log (
            bottles
            + " bottles of beer on the wall, "
            + bottles
            + " bottles of beer on the wall." 
        );
        console.log (
            "Take one down and pass it around, "
            + (bottles - 1)
            + " bottles of beer on the wall."
            + "\n"
        );
        bottles--;
    }
}