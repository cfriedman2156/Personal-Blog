//CREATE NEW BLOG POST CODE//

//Function triggered by page opening//
document.addEventListener('DOMContentLoaded', function() {
    const postArray = JSON.parse(localStorage.getItem('post array'));
    console.log(postArray);
    console.log(postArray.length + " Posts")

    for (let index = 0; index < postArray.length; index++) {
        
        const newSection = document.createElement('section');

        const newTitle = document.createElement('h3');
        newTitle.textContent = postArray[index].title;

        const newContent = document.createElement('p');
        newContent.textContent = postArray[index].content;

        const newUsername = document.createElement('h4');
        newUsername.textContent = "Post by " + postArray[index].username;

        const fragment = document.createDocumentFragment();
        fragment.appendChild(newSection);
            newSection.appendChild(newTitle);
            newSection.appendChild(newContent)
            newSection.appendChild(newUsername);
        
        document.body.appendChild(fragment);
    }
})


        