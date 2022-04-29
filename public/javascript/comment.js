async function commentFormHandler(event) {
    event.preventDefault();
  
    //grab the comment that was typed out and the post id the comment is associated with
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    //If a comment was typed, POST it to that specific post
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }); 
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
    }
}
  
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);