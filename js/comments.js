const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}
//loadComments();

const displayComments = comments => {
    console.log(comments);
    const commentDiv = document.getElementById('comments');
    comments.forEach(comment => {
        console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h4>Name: ${comment.name}</h4>
        <h4>Email: ${comment.email}</h4>
        <p>Comment: ${comment.body}</p>
        `;
        commentDiv.appendChild(div);
    });
}