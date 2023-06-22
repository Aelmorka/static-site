function Tweeter() {
    let _twits = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let _postIdCounter = 2
    let _commentIdCounter = 6
    let _postCounter = 2
    
    function getPostIndex(id) {
        return _twits.findIndex(el => el.id === id)
    }

    function getCommentIndex(postId, id) {
        return _twits[getPostIndex(postId)].comments.findIndex(el => el.id === id)
    }

    const addPost = post => {
        let postObj = { text: null, id: null, comments: [] }
        _postIdCounter++
        _postCounter++
        postObj.id = `p${_postIdCounter}`
        postObj.text = post
        _twits.push(postObj)
    }
    const getPosts = () => {
        return _twits
    }

    const removePost = postId => {
        _postCounter--
        _twits.splice(getPostIndex(postId), 1)
    }
    const addComment = (comment, postId) => {
        let commentObj = { id: null, text: null }
        _commentIdCounter++
        commentObj.id = `c${_commentIdCounter}`
        commentObj.text = comment
        _twits[getPostIndex(postId)].comments.push(commentObj)
    }
    const removeComment = (postId, commentId ) => {
        _twits[getPostIndex(postId)].comments.splice(getCommentIndex(postId, commentId), 1)
    }
    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())

tweeter.removePost("p1")
console.log(tweeter.getPosts())

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())