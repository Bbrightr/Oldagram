const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// const avatarEl = document.getElementById("avatar")
const mainProfEl = document.getElementById("mainProf")
let proSect = ""

for (let i = 0; i < posts.length; i++){

    proSect += `
    <section id="userPost">
                <div class="container">
                    <div class="profDetails">
                        <div><img src="${posts[i].avatar}" id="avatar"></div>
                        <div class="detailsNL">
                            <p class="name" id="profName">${posts[i].name}</p>
                            <p class="location" id="profLoca">${posts[i].location}</p>
                        </div>
                    </div>

                    <div id="profPost">
                        <img src="${posts[i].post}" >
                    </div>

                    <div class="icons">
                        <img src="images/icon-heart.png">
                        <img src="images/icon-comment.png">
                        <img src="images/icon-dm.png">
                    </div>

                    <div>
                    <p class="likes"><span class="numberPeople" id="numberLikes">${posts[i].likes}</span> likes</p>
                    </div>

                    <div class="commenter">
                        <p class="username" id="userN">${posts[i].username}</p>
                        <p class="comment" id="userComm">${posts[i].comment}</p>
                    </div>
                </div>
                    
            </section>
        `
    // const avaterEl = document.getElementById("avatar")
    // document.getElementById("avatar").src = posts[i].avatar
    

    // const profNamEl = document.getElementById("profName")
    // profNamEl.textContent = posts[i].name

    // const profLocaEl = document.getElementById("profLoca")
    // profLocaEl.textContent = posts[i].location

    // const profPostEl = document.getElementById("profPost")
    // profPostEl.textContent = posts[i].post

    // const numberLikesEl = document.getElementById("numberLikes")
    // numberLikesEl.textContent = posts[i].likes

    // const userNEl = document.getElementById("userN")
    // userNEl.textContent = posts[i].username

    // const userCommEl = document.getElementById("userComm")
    // userCommEl.textContent = posts[i].comment
    // console.log(posts[i].avatar)
    // console.log(posts[i].name)
    // console.log(posts[i].location)
    // console.log(posts[i].post)
    // console.log(posts[i].likes)
    // console.log(posts[i].username)
    // console.log(posts[i].comment)


}

mainProfEl.innerHTML = proSect
