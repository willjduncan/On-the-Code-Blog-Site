async function editFormHandler(event) {
    event.preventDefault();

    //grab the typed post title and conent, as well as the post id
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    //update the post
      const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title,
            content
          }),
          headers: {
            'Content-Type': 'application/json'
          }
      });
      
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      } 
}    
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);