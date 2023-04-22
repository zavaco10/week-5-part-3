console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array
let collection = [];

// Add a function named addToCollection
function addToCollection(title, artist, yearPublished) {
    // Create a new album object
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    // Add the new album object to the end of the collection array
    collection.push(album);
    // Return the newly created album object
    return album;
}

// Add 6 albums to the collection using the addToCollection function
let album1 = addToCollection("Cracked Rear View", "Hootie and the Blowfish", 1994);
let album2 = addToCollection("Wrath", "Lamb of God", 2009);
let album3 = addToCollection("Pain Remains", "Lorna Shore", 2022);
let album4 = addToCollection("Honky Tonk Angel", "Conway Twitty", 1974);
let album5 = addToCollection("All Eyez on Me", "2pac", 1996);
let album6 = addToCollection("From Vegas to Memphis", "Elvis Presley", 1969);

// Console.log each album as added using the returned value
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
console.log(album5);
console.log(album6);

// Console.log the collection array
console.log(collection);

// Add a function named showCollection
function showCollection(arr) {
    // Console.log the number of items in the array
    console.log("Number of items in the collection: " + arr.length);
    // Loop over the array and console.log each album's information
    for (let i = 0; i < arr.length; i++) {
        let album = arr[i];
        console.log(album.title + " by " + album.artist + ", published in " + album.yearPublished);
    }
}

// Call the showCollection function with the collection array
showCollection(collection);

// Add a function named findByArtist
function findByArtist(artist) {
    let results = []; // Create an array to hold any results, empty to start
    for (let i = 0; i < collection.length; i++) {
        let album = collection[i];
        if (album.artist === artist) {
            results.push(album);
        }
    }
    // Return the array with the matching results
    return results;
}

// Test the findByArtist function
console.log(findByArtist("2pac")); //find album by 2pac
console.log(findByArtist("Smashing Pumpkins")); //find nothing

