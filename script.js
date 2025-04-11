function createPost(name, message, imageURL) {
    const post = document.createElement('div');
    post.classList.add('post');

    const image = document.createElement('img');
    image.src = imageURL;
    image.alt = name;

    const title = document.createElement('h2');
    title.textContent = name;

    const description = document.createElement('p');
    description.textContent = message;

    post.appendChild(image);
    post.appendChild(title);
    post.appendChild(description);

    return post;
}

const postsContainer = document.getElementById('posts-container');

for (let i = 1; i <= 826; i++) {
    const name = `Character ${i}`;
    const message = `Esta es mi publicación número ${i}. Esta es una prueba de generación de código por medio de funciones y ciclos.`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;

    const post = createPost(name, message, imageURL);
    postsContainer.appendChild(post);
}