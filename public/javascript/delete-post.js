async function deleteFormHandler(event) {
    event.preventDefault();

  //get post id
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    //Delete the post and move to dashbard
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    } 
}
  
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);