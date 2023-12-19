const quests = document.getElementsByClassName("quest");

for (var i = 0; i < quests.length; i++) {
    quests[i].addEventListener('click', function() {
        for (var i = 0; i < quests.length; i++) {
            quests[i].classList.remove('active');
            quests[i].children[0].children[1].classList.add('bxs-plus-circle');
            quests[i].children[0].children[1].classList.remove('bxs-minus-circle');
        }
        this.children[0].children[1].classList.remove('bxs-plus-circle');
        this.children[0].children[1].classList.add('bxs-minus-circle');
        this.classList.add('active');
        

    });
}
