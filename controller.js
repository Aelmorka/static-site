$(document).ready(function(){
    const tweeter = Tweeter()
    const render = Render()

    render.showPosts(tweeter.getPosts())

    $("#post").click(function() {
        let postInput = $(this).siblings("input")
        if (postInput.val() != '') {
            tweeter.addPost(postInput.val())
            render.showPosts(tweeter.getPosts())
            postInput.val('')
        }
    })
    $('body').on("click", ".delete", function() {
        tweeter.removePost($(this).closest(".post").data().id)
        render.showPosts(tweeter.getPosts())
    })
    $('body').on("click", ".delete-comment", function() {
        tweeter.removeComment($(this).closest(".post").data().id, $(this).closest(".comment").data().id)
        render.showPosts(tweeter.getPosts())
    })
    $('body').on("click", ".comment-btn", function() {
        let commentIinput = $(this).siblings("input")
        if (commentIinput.val() != '') {
            tweeter.addComment(commentIinput.val(), $(this).closest(".post").data().id)
            render.showPosts(tweeter.getPosts())
        }
    })
})