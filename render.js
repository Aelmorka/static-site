function Render() {
    let postList = $("#posts")
    
    function showPosts(posts) { 
        postList.empty()
        for (let post in posts) {
            let postDiv = $(`<div class="post" data-id="${posts[post].id}"><div class="post-text">${posts[post].text}</div></div>`)
            let delButton = $(`<div class="delete">x</div>`)
            postDiv.append(delButton)
            if (posts[post].comments.length != 0) {
                let commentsDiv = $(`<div class="comments"></div>`)
                let comments = posts[post].comments
                for (let comment in comments) {
                    let com = $(`<div class="comment" data-id="${comments[comment].id}">${comments[comment].text}</div>`)
                    commentsDiv.append(com)
                }
                postDiv.append(commentsDiv)
            }  
            postList.append(postDiv)
        }
    }

    return {
        showPosts
    }
}