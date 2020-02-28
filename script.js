// random pic selector function


document.querySelector('.picButton').addEventListener('click', function() {
    let randompic = Math.floor((Math.random() * 40) + 1);
    let pic = document.querySelector('.pokemonPic');
    pic.src = 'pokemon' + randompic + '.jpg';
})