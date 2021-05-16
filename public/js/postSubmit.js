const postSubmit = document.getElementById('post-submit')

const savePost = (carData) =>
  fetch("/blog/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });

  postSubmit.addEventListener("click", savePost);
  