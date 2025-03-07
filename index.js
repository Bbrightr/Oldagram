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
                        <p id="userN"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
                    
            </section>
        `


}

mainProfEl.innerHTML = proSect
