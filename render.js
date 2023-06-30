function Render() {
    let postList = $("#posts")
    
    function showPosts(posts) { 
        postList.empty()
        for (let post in posts) { 
            let postText = '<div class="post" data-id="' + posts[post].id +'"><div class="post-header"><div>' 
                            + posts[post].text + '</div><div class="delete">x</div></div></div>'
            let postDiv = $(postText)
            if (posts[post].comments.length != 0) {
                let commentsDiv = $(`<div class="comments"></div>`)
                let comments = posts[post].comments
                for (let comment in comments) {
                    let comText = '<div class="comment" data-id="' + comments[comment].id + 
                                '"><span class="delete-comment">x</span>' +
                                comments[comment].text + '</div>'
                    commentsDiv.append($(comText))
                }
                postDiv.append(commentsDiv)
            }  
            let newComms = '<div class="comment-twit"><input type="text" /><button class="comment-btn">Comment</button></div>'
            postDiv.append($(newComms))
            postList.append(postDiv)
        }
    }

    return {
        showPosts
    }
}