$(document).ready(function(){
    const tweeter = Tweeter()
    const render = Render()

    render.showPosts(tweeter.getPosts())

})