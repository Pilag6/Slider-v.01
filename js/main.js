const pictures = [
    {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg",
    },
    {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg",
    },
    {
        id: 3,
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
    },
    {
        id: 4,
        img: "https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_960_720.jpg",
    },
    {
        id: 5,
        img: "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg",
    },
    {
        id: 6,
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
    },
];

const img = document.getElementById("img-landscape");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentImg = 0;

window.addEventListener("DOMContentLoaded", () => {
    showImg();
});

function showImg() {
    const item = pictures[currentImg];
    img.src = item.img;
}

nextBtn.addEventListener("click", () => {
    currentImg++;
    if (currentImg > pictures.length - 1) {
        currentImg = 0;
    }
    showImg();
});
prevBtn.addEventListener("click", () => {
    currentImg--;
    if (currentImg < 0 ) {
        currentImg = pictures.length - 1;
    }
    showImg();
});


