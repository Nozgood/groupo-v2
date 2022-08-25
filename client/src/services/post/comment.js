const sendComment = (commentInfos) => {
  const postId = commentInfos.postId
  fetch('http://localhost:8000/api/comment/' + postId, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentInfos),
  })
    .then((res) => {
      console.log(res)
      window.location.reload()
    })
    .catch((error) => console.log(error))
}

export default sendComment