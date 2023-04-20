console.log('***** Music Collection *****')

let collection = [];

//fucntion named addToCollection and taking parameters 'title', 'artist', and year
function addToCollection(title, artist, year) {

//create new object with parameters from previous function
    let newAlbum = {
        title: title,
        artist: artist,
        year: year
    };

//add newAlbum to variable 'collection'
collection.push(newAlbum);

//return added object
return newAlbum;
}

console.log('This was added to the collection!', collection);

//test the function 
let newAlbum = addToCollection('Cracked Rear View', 'Hootie and the Blowfish', 1994);
console.log('This item was just added:', newAlbum)

let newAlbum2 = addToCollection('Wrath', 'Lamb of God', 2009);
console.log('This item was just added:', newAlbum2)

let newAlbum3 = addToCollection('Pain Remains', 'Lorna Shore', 2022)
console.log('This item was just added:', newAlbum3)

let newAlbum4 = addToCollection('Honky Tonk Angel', 'Conway Twitty', 1974)
console.log('This item was just added:', newAlbum4)

let newAlbum5 = addToCollection('All Eyez on Me', '2Pac', 1996)
console.log('This item was just added:', newAlbum5)

let newAlbum6 = addToCollection('From Vegas to Memphis', 'Elvis Presley', 1969)
console.log('This item was just added:', newAlbum6)

