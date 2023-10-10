const blogPostsContainer = document.getElementById("blog-posts-container");

// [{}, {}]
const entries = JSON.parse(localStorage.getItem("entries"));

console.log(typeof entries, "entries");

for (i = 0; i < entries.length; i++) {
  let articleContainer = document.createElement("article");

  articleContainer.setAttribute("class", "blog-post");

  let blogPostHeader = document.createElement("section");

  blogPostHeader.setAttribute("class", "blog-post-header");

  blogTitle_h3 = document.createElement("h3");

  blogTitle_h3.setAttribute("class", "blog-title");

  blogTitle_h3.textContent = entries[i].title;

  postDate_p = document.createElement("p");

  postDate_p.setAttribute("class", "post-date");

  postDate_p.textContent = entries[i].time;

  hr = document.createElement("hr");

  hr.setAttribute("class", "blog-post-divider");

  blogPost_p = document.createElement("p");
  blogPost_p.setAttribute("class", "blog-post");
  blogPost_p.textContent = entries[i].text;

  articleContainer.appendChild(blogPostHeader);
  blogPostHeader.appendChild(blogTitle_h3);
  blogPostHeader.appendChild(postDate_p);

  articleContainer.appendChild(hr);
  articleContainer.appendChild(blogPost_p);

  blogPostsContainer.appendChild(articleContainer);
}

/*


<article class="blog-post"> :)
          <section class="blog-post-header"> :)
            <h3 class="blog-title">entries.title</h3>
            <p class="post-date">
              <i class="fa-regular fa-calendar"></i> entries.time
            </p>
          </section>
          <hr class="blog-post-divider" />
          <p class="blog-post">
            entries.text
          </p>
</article>

*/
