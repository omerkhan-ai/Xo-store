// Fetch the blog data from the JSON file
fetch('blogs.json')
  .then(response => response.json())
  .then(data => {
    const blogList = document.getElementById('blog-list');
    data.blogs.forEach(blog => {
      const blogCard = document.createElement('div');
      blogCard.classList.add('blog-card');
      
      // Create the blog post title and author
      const blogTitle = document.createElement('h3');
      blogTitle.textContent = blog.title;
      
      const blogAuthor = document.createElement('p');
      blogAuthor.textContent = `By: ${blog.author} | ${blog.date}`;

      // Create the blog image
      const blogImage = document.createElement('img');
      blogImage.src = blog.image;
      blogImage.alt = blog.title;
      blogImage.classList.add('blog-image');
      
      // Create the truncated content
      const truncatedContent = document.createElement('p');
      const truncatedText = blog.content.slice(0, 200); // Show first 200 characters
      truncatedContent.textContent = truncatedText + '...';
      
      // Create the "Read More" button
      const readMoreButton = document.createElement('button');
      readMoreButton.textContent = 'Read More';
      readMoreButton.classList.add('read-more');
      readMoreButton.addEventListener('click', () => {
        truncatedContent.textContent = blog.content; // Show full content
        readMoreButton.style.display = 'none'; // Hide the "Read More" button
      });

      // Append all elements to the blog card
      blogCard.appendChild(blogTitle);
      blogCard.appendChild(blogAuthor);
      blogCard.appendChild(blogImage);
      blogCard.appendChild(truncatedContent);
      blogCard.appendChild(readMoreButton);
      
      // Append the blog card to the blog list
      blogList.appendChild(blogCard);
    });
  })
  .catch(error => console.error('Error fetching blog data:', error));
