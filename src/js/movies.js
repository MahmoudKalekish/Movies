// -----------------nav bar----------------///
const ul = document.querySelector("ul");
console.log(ul);
const li = document.querySelectorAll("li");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active-toggle");
    ul.classList.toggle("ul-active")
    li.forEach((item) => {
        item.classList.toggle("li-active");
    })
})

const movies = {
    data: [


        {
            img: "assest/tv shows/jocker.png",
            movieName: "JOKER",
            rattingNumber: "5.8",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "drama",

        },


        {
            img: "assest/tv shows/tnm.png",
            movieName: "The NorthMan",
            rattingNumber: "7.6",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "5700",
            seeIcon: "icofont-eye-alt",
            seeNo: "3810",
            dwIcon: "icofont-download",
            dwNo: "1680",
            cate: "action",
            cateTwo: "action"
        },
        {
            img: "assest/tv shows/thor.png",
            movieName: "Thor Ragnarok",
            rattingNumber: "7.3",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "4000",
            seeIcon: "icofont-eye-alt",
            seeNo: "5800",
            dwIcon: "icofont-download",
            dwNo: "3800",
            cate: "adventure",
            cateTwo: "action",
        },
        {
            img: "assest/tv shows/star.png",
            movieName: "Star Wars",
            rattingNumber: "5.8",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "2500",
            seeIcon: "icofont-eye-alt",
            seeNo: "2800",
            dwIcon: "icofont-download",
            dwNo: "1480",
            cate: "action",
            cateTwo: "drama",
        },

        {
            img: "assest/tv shows/lord.png",
            movieName: "The Lord Of The Ring",
            rattingNumber: "6.4",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "adventure",
        },

        {
            img: "assest/tv shows/james.png",
            movieName: "James Bond",
            rattingNumber: "7.2",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "action",
        },
        {
            img: "assest/tv shows/strange.png",
            movieName: "Doctor Strange",
            rattingNumber: "7.5",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6580",
            seeIcon: "icofont-eye-alt",
            seeNo: "3820",
            dwIcon: "icofont-download",
            dwNo: "1600",
            cate: "drama",
            cateTwo: "action"
        },
        {
            img: "assest/tv shows/jw.png",
            movieName: "John Wick",
            rattingNumber: "6.2",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "adventure",
        },
        {
            img: "assest/tv shows/cap.png",
            movieName: "Captain America",
            rattingNumber: "9.3",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "7280",
            seeIcon: "icofont-eye-alt",
            seeNo: "6400",
            dwIcon: "icofont-download",
            dwNo: "2680",
            cate: "adventure",
            cateTwo: "action",
        },
        {
            img: "assest/tv shows/j.png",
            movieName: "Jurrasic Park",
            rattingNumber: "6.4",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "horror",
        },

        {
            img: "assest/movies/2.png",
            movieName: "GhostBusters",
            rattingNumber: "7.9",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6600",
            seeIcon: "icofont-eye-alt",
            seeNo: "7000",
            dwIcon: "icofont-download",
            dwNo: "3667",
            cate: "action",
        },
        {
            img: "assest/tv shows/maw.png",
            movieName: "Monsters At Work",
            rattingNumber: "6.2",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "5600",
            seeIcon: "icofont-eye-alt",
            seeNo: "2400",
            dwIcon: "icofont-download",
            dwNo: "1480",
            cate: "drama",
            cateTwo: "adventure",

        },
        {
            img: "assest/tv shows/sonic.png",
            movieName: "Sonic",
            rattingNumber: "5.8",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "adrama",
            cateTwo: "adventure",
        },
        {
            img: "assest/tv shows/aq.png",
            movieName: "AQUAMAN",
            rattingNumber: "3.5",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "6000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "1200",
            cate: "crime",
            cateTwo: "drama",
        },
        {
            img: "assest/tv shows/freddy.png",
            movieName: "A Nightmare On Elm Street",
            rattingNumber: "7.5",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "3550",
            seeIcon: "icofont-eye-alt",
            seeNo: "4400",
            dwIcon: "icofont-download",
            dwNo: "2200",
            cate: "horror",
        },
        {
            img: "assest/tv shows/pacif.png",
            movieName: "Pacific Rim",
            rattingNumber: "7.4",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "2000",
            seeIcon: "icofont-eye-alt",
            seeNo: "3600",
            dwIcon: "icofont-download",
            dwNo: "1800",
            cate: "action",
        },
        {
            img: "assest/tv shows/gvk.png",
            movieName: "Godzilla VS. Kong",
            rattingNumber: "6.2",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "2000",
            seeIcon: "icofont-eye-alt",
            seeNo: "2600",
            dwIcon: "icofont-download",
            dwNo: "700",
            cate: "action",
        },
        {
            img: "assest/tv shows/war.png",
            movieName: "WarCraft ",
            rattingNumber: "2.5",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "300",
            seeIcon: "icofont-eye-alt",
            seeNo: "500",
            dwIcon: "icofont-download",
            dwNo: "200",
            cate: "action",
        },
        {
            img: "assest/tv shows/super.png",
            movieName: "Man Of Steel",
            rattingNumber: "5.7",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "1200",
            seeIcon: "icofont-eye-alt",
            seeNo: "2200",
            dwIcon: "icofont-download",
            dwNo: "1000",
            cate: "adventure",
        },
        {
            img: "assest/tv shows/godzilla.png",
            movieName: "Godzilla",
            rattingNumber: "3.5",
            rattingicon: "icofont-star",
            likeIcon: "icofont-like",
            likeNo: "800",
            seeIcon: "icofont-eye-alt",
            seeNo: "1200",
            dwIcon: "icofont-download",
            dwNo: "300",
            cate: "action",
        },
    ]
}



// movie card//
function movieCards() {
    for (i of movies.data) {
        let cardWrapper = document.querySelector(".movie-wrapper");
        let card = document.createElement("div");
        card.classList.add("movie-card", i.cate, i.cateTwo, "display");
        let img = document.createElement("div");
        img.classList.add("img");
        card.appendChild(img);
        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", i.img);
        img.appendChild(cardImg);
        let dwBtn = document.createElement("div");
        dwBtn.classList.add("dw-btn");
        let playIcon = document.createElement("i");
        playIcon.classList.add("icofont-ui-play");
        // if (i.movieName == "JOKER") {
        //     playIcon.setAttribute("onclick", "window.location.href = 'file:///E:/Lights%20Out/joker.html';");
        // } else if (i.movieName == "The NorthMan") {
        //     playIcon.setAttribute("onclick", "window.location.href = '../../Lights Out/movies/batman.mp4';");
        // } else if (i.movieName == "Thor Ragnarok") {
        //     playIcon.setAttribute("onclick", "window.location.href = '../../Lights Out/movies/batman.mp4';");
        // } else if (i.movieName == "Star Wars") {
        //     playIcon.setAttribute("onclick", "window.location.href = '../../Lights Out/movies/batman.mp4';");
        // } else if (i.movieName == "The Lord Of The Ring") {
        //     playIcon.setAttribute("onclick", "window.location.href = '../../Lights Out/movies/batman.mp4';");
        // } else if (i.movieName == "James Bond") {
        //     playIcon.setAttribute("onclick", "window.location.href = '../../Lights Out/movies/batman.mp4';");
        // }
        dwBtn.appendChild(playIcon);
        img.appendChild(dwBtn);
        // card info//
        let cardInfo = document.createElement("div");
        card.appendChild(cardInfo);
        cardInfo.classList.add("movie-card-info");
        let nameRatting = document.createElement("div");
        nameRatting.classList.add("name-ratting");
        cardInfo.appendChild(nameRatting)
        let moviename = document.createElement("p");
        moviename.classList.add("movie-name");
        moviename.innerText = i.movieName;
        nameRatting.appendChild(moviename);
        let ratting = document.createElement("div");
        ratting.classList.add("ratting");
        let ratIcon = document.createElement("i");
        ratIcon.classList.add(i.rattingicon);
        ratting.appendChild(ratIcon)
        let ratNumber = document.createElement("p");
        ratNumber.innerText = i.rattingNumber;
        ratting.appendChild(ratNumber);
        nameRatting.appendChild(ratting);
        let customerReview = document.createElement("div");
        customerReview.classList.add("customer-review");
        cardInfo.appendChild(customerReview);
        let like = document.createElement("div")
        like.classList.add("like");
        customerReview.appendChild(like);
        let likeIcon = document.createElement("i");
        likeIcon.classList.add("icofont-like");
        like.appendChild(likeIcon);
        let likeNum = document.createElement("p");
        likeNum.innerText = i.likeNo;
        like.appendChild(likeNum);
        let see = document.createElement("div");
        see.classList.add("see");
        customerReview.appendChild(see);
        let seeIcon = document.createElement("i");
        seeIcon.classList.add(i.seeIcon);
        see.appendChild(seeIcon);
        let seeNum = document.createElement("p");
        seeNum.innerText = i.seeNo;
        see.appendChild(seeNum);

        let download = document.createElement("div");
        download.classList.add("dw");
        customerReview.appendChild(download);
        let dwIcon = document.createElement("i");
        dwIcon.classList.add(i.dwIcon);
        download.appendChild(dwIcon);
        let dwNum = document.createElement("p");
        dwNum.innerText = i.dwNo;
        download.appendChild(dwNum);
        cardWrapper.appendChild(card);



    }



}

movieCards()

function filterFunction(value) {
    let filterBtn = document.querySelectorAll(".btn-filter");
    let card = document.querySelectorAll(".movie-card");
    filterBtn.forEach((btn) => {
        if (btn.innerText.toUpperCase() == value.toUpperCase()) {
            btn.classList.add("btnActive");
        } else {
            btn.classList.remove("btnActive");
        }
    })
    card.forEach((cardItem, index) => {
        if (value == "all") {
            card[index].classList.remove("display")
        } else {
            if (card[index].classList.contains(value)) {
                card[index].classList.remove("display")
            } else {
                card[index].classList.add("display")
            }
        }
    })
}
let searchBtn = document.querySelector(".searchbtn");
searchBtn.addEventListener("click", () => {
    let searchbox = document.querySelector(".movieSearcher");
    let searchValue = searchbox.value;
    let searchUppercase = searchValue.toUpperCase();
    let movieNames = document.querySelectorAll(".movie-name");
    movieNames.forEach((movieNAme, index) => {
        let movieUpppercase = movieNAme.textContent.toUpperCase();
        let movieCards = document.querySelectorAll(".movie-card");
        if (movieUpppercase.includes(searchUppercase)) {
            movieCards[index].classList.remove("display");
        } else {
            movieCards[index].classList.add("display");
        }
    })
    document.querySelector(".movieSearcher").value = "";
})
let searchbox = document.querySelector(".movieSearcher");
searchbox.addEventListener("keyup", () => {
    let movieCards = document.querySelectorAll(".movie-card");
    movieCards.forEach((cards) => {
        cards.classList.remove("display");

    })
})
window.onload = () => {
    filterFunction("all");
}


let scroll = document.querySelector(".scroll");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
    scroll.addEventListener("click", () => {
        window.scrollTo({
            top: "0",
            behavior: "smooth",
        })
    })
})


// navbar color//
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
        console.log("ll")
        document.querySelector("header").style.background = 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))';
        document.querySelector("header").style.backdropFilter = "blur(10px)";
    } else {
        document.querySelector("header").style.background = "";
        document.querySelector("header").style.backdropFilter = "blur(0px)";


    }
})

// prelaer//
let loader = document.querySelector(".preloader");

function preloader() {
    loader.style.display = "none";
}
preloader();