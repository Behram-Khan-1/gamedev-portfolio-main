<template>

  <div v-if="blogPost" class="blog-post">
    <!-- Cover Image -->
    <div 
      v-if="blogPost.coverImage" 
      class="blog-cover"
      :style="{ 'background-image': 'url(' + blogPost.coverImage + ')' }"
    ></div>
    
    <!-- Blog Content -->
    <div class="blog-content">
      <div class="content-container">
        <h1 class="blog-title">{{ blogPost.title }}</h1>
        
        <div class="blog-meta">
          <span class="blog-author">By {{ blogPost.author }}</span>
          <span class="blog-date">{{ formatDate(blogPost.publishDate) }}</span>
          <span class="blog-readtime">{{ blogPost.readTime }}</span>
        </div>
        
        <div class="blog-tags">
          <span 
            v-for="tag in blogPost.tags" 
            :key="tag"
            class="blog-tag"
          >
            {{ tag }}
          </span>
        </div>
        
        <div class="blog-excerpt">
          {{ blogPost.excerpt }}
        </div>
        
        <div class="blog-body" v-html="blogPost.content"></div>
        
        <div class="blog-navigation">
          <button @click="$router.back()" class="back-button">← Back to Blogs</button>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="blog-not-found">
    <h1>Blog Post Not Found</h1>
    <p>The blog post you're looking for doesn't exist.</p>
    <button @click="$router.push('/blogs')" class="back-button">Go to Blogs</button>
  </div>
</template>






<script lang="ts">
import Vue from "vue";
import BlogPost from "@/data/BlogPost";
import blogPostsData from "@/data/BlogPostsData";

export default Vue.extend({
  name: "BlogPostView",
  data: function () {
    return {
      blogPost: null as BlogPost | null
    };
  },
  created() {
    this.loadBlogPost();
  },
  watch: {
    '$route': 'loadBlogPost'
  },
  methods: {
    loadBlogPost() {
      const blogId = this.$route.params.id as string;
      this.blogPost = blogPostsData.find((blog: BlogPost) => blog.id === blogId) || null;
    },
    formatDate(dateString: string): string {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
});
</script>









<style scoped>
.blog-post {
  border: 2px solid red !important; /* See the actual boundaries */
  margin-right: 100px;

  background: #f8f9fa;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

.blog-cover {
  height: 400px;
  background-size: cover;
  background-position: center center;
  background-color: #f0f0f0;
  width: 100%; /* Use 100% instead of 100vw */
}

.blog-content {
  max-width: none;
  width: 100%;
  margin: 0 auto;
  padding: 60px %; /* Only 2% from left/right edges */
  background: white;
  color: #333;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}

.blog-page-container {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}


/* Container for centered content */
.content-container {
  max-width: 800px; /* Content max width */
  margin: 0 auto; /* Center the content */
  text-align: left; /* Left align text */
}

.blog-title {
  font-size: 2.8em;
  margin-bottom: 25px;
  color: #2c3e50;
  line-height: 1.2;
}

.blog-meta {
  display: flex;
  gap: 25px;
  margin-bottom: 25px;
  color: #666;
  font-size: 0.95em;
  border-bottom: 1px solid #e1e5e9;
  padding-bottom: 25px;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 35px;
}

.blog-tag {
  background: #23bd69;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85em;
}

.blog-excerpt {
  font-size: 1.3em;
  color: #666;
  font-style: italic;
  margin-bottom: 45px;
  line-height: 1.6;
  border-left: 4px solid #23bd69;
  padding-left: 25px;
}

.blog-body {
  line-height: 1.8;
  color: #333;
}

/* Blog body content styling */
.blog-body >>> img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 30px 0;
}

.blog-body >>> iframe {
  max-width: 100%;
  margin: 30px 0;
  border-radius: 8px;
  width: 100%;
}

.blog-body >>> h1 {
  font-size: 2.2em;
  margin: 50px 0 25px 0;
  color: #2c3e50;
  border-bottom: 2px solid #e1e5e9;
  padding-bottom: 10px;
}

.blog-body >>> h2 {
  font-size: 1.8em;
  margin: 40px 0 20px 0;
  color: #2c3e50;
}

.blog-body >>> h3 {
  font-size: 1.5em;
  margin: 35px 0 18px 0;
  color: #2c3e50;
}

.blog-body >>> p {
  margin-bottom: 25px;
  font-size: 1.1em;
}

.blog-body >>> a {
  color: #23bd69;
  text-decoration: underline;
  font-weight: 500;
}

.blog-body >>> ul,
.blog-body >>> ol {
  margin-bottom: 25px;
  padding-left: 30px;
}

.blog-body >>> li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.blog-body >>> blockquote {
  border-left: 4px solid #23bd69;
  padding-left: 25px;
  margin: 35px 0;
  font-style: italic;
  color: #666;
  background: #f8fff9;
  padding: 20px 25px;
  border-radius: 0 8px 8px 0;
}

.blog-body >>> code {
  background: #f4f4f4;
  padding: 3px 8px;
  border-radius: 4px;
  color: #d63384;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.blog-body >>> pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 25px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 30px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
  line-height: 1.5;
}

.blog-navigation {
  margin-top: 60px;
  text-align: center;
  border-top: 1px solid #e1e5e9;
  padding-top: 30px;
}

.back-button {
  background: #23bd69;
  color: white;
  border: none;
  padding: 14px 28px;
  margin-bottom: 20px;
  margin-top: -20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #1ea955;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(35, 189, 105, 0.3);
}

.blog-not-found {
  text-align: center;
  padding: 100px 20px;
  background: white;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}

.blog-not-found h1 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2.5em;
}

.blog-not-found p {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.2em;
}

/* Responsive design */
@media only screen and (max-width: 768px) {
  .blog-cover {
    height: 250px;
  }
  
  .blog-content {
    padding: 40px 20px;
    margin-top: -20px;
  }
  
  .blog-title {
    font-size: 2em;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .blog-excerpt {
    padding-left: 20px;
  }
}

@media only screen and (max-width: 480px) {
  .blog-content {
    padding: 30px 15px;
  }
  
  .blog-title {
    font-size: 1.8em;
  }
  
  .blog-body >>> h1 {
    font-size: 1.8em;
  }
  
  .blog-body >>> h2 {
    font-size: 1.5em;
  }
  
  .blog-body >>> h3 {
    font-size: 1.3em;
  }
}
</style>