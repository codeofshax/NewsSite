document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;

    if (title && category && content) {
        alert('News submitted successfully!');
        // Here you can add the logic to store the submitted data, e.g., sending it to a server or storing it locally.
    } else {
        alert('Please fill all fields!');
    }

});
