    //GLOBAL SELECTORS
    const usernameInput = document.querySelector("#username");
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const submitButton = document.querySelector("#submit")
    const viewPosts = document.querySelector("#view-posts")
    let userPosts = null;

        //If no posts, creates empty array//
    if (localStorage.getItem('post array') === null) {
        userPosts = [];
        //If posts exist, pulls them into array and parses//
    } else {
        userPosts = localStorage.getItem('post array');
        userPosts = JSON.parse(userPosts);
        
    }
    
        //SAVE/STORE BLOG POST FUNCTION
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
    
        if (usernameInput.value === "") {
            alert('Please enter a valid username');
            return;
        } else if (titleInput.value === "") {
            alert('Please enter a valid title');
            return;
        } else if (contentInput.value === "") {
            alert('Please enter a valid post');
            return;
        } else {
            const post = {
                username: usernameInput.value.trim(),
                title: titleInput.value.trim(),
                content: contentInput.value.trim()
            }
            //Adds new post to array, stores post array and individual posts in local storage
            userPosts.push(post);
            localStorage.setItem('post array', JSON.stringify(userPosts));
            localStorage.setItem(`post ${userPosts.length}`, JSON.stringify(post));
            window.location.href = "j-blog.html";
        }
    })
    
    