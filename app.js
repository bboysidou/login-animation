let x =0;
for(x=0; x<10;x++) {
    var board = document.createElement('div');
    board.className = "color";
    document.querySelector('.board').appendChild(board);
}

let tl = anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    duration: 200
})

tl.add({
    targets: '.board .color',
    width: '100%',
    background: '#ffa098',
    delay: anime.stagger(100)
})

tl.add({
    targets: '.board .color',
    width: '90%',
    background: '#f9ccc7',
    delay: anime.stagger(100)
})

tl.add({
    targets: '.board',
    scaleY: '2',
    scaleX: '2',
    translateX: '40%',
    rotate: '45deg',
    duration: 2000

})

tl.add({
    targets: '.title',
    top: '20%',
    opacity: 1,
    duration: 2000
},'-=1600')

tl.add({
    targets: 'input',
    left: '12%',
    opacity: 1,
    delay: anime.stagger(300)
},'-=1600')

