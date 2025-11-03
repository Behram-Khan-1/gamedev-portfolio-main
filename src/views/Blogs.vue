<template>
  <div>
    <h1>Blog</h1>
    
    <div style="margin-bottom: 30px;">
      Thoughts, tutorials, and insights from my development journey.
    </div>

    <!-- Search and Filter Section -->
    <div class="blog-controls">
      <div class="search-container">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search blog posts..." 
          class="search-input"
          
        />
      </div>
      
      <div class="tags-filter-header">
        <h3 style="margin: 0; color: #2c3e50;">Filter by Tags:</h3>
        <button 
          v-if="selectedTags.length > 0"
          @click="clearAllTags" 
          class="clear-tags-btn"
        >
          Clear All
        </button>
      </div>
      
      <div class="tags-filter">
        <button 
          v-for="tag in allTags" 
          :key="tag"
          :class="['tag-filter-btn', { active: selectedTags.includes(tag) }]"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Blogs Grid -->
    <div class="blogs-grid">
      <div 
        v-for="blog in filteredBlogs" 
        :key="blog.id"
        class="blog-card"
        @click="openBlog(blog.id)"
      >
        <div 
          class="blog-card-image" 
          :style="{ 'background-image': 'url(' + blog.coverImage + ')' }"
        ></div>
        <div class="blog-card-content">
          <h3 class="blog-title">{{ blog.name }}</h3>
          <p class="blog-excerpt">{{ blog.excerpt }}</p>
          <div class="blog-meta">
            <span class="blog-date">{{ formatDate(blog.publishDate) }}</span>
            <span class="blog-readtime">{{ blog.readTime }}</span>
          </div>
          <div class="blog-tags">
            <span 
              v-for="tag in blog.tags.slice(0, 3)" 
              :key="tag"
              class="blog-tag"
            >
              {{ tag }}
            </span>
            <span v-if="blog.tags.length > 3" class="blog-tag-more">
              +{{ blog.tags.length - 3 }} more
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredBlogs.length === 0" class="no-results">
      No blog posts found matching your search.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogPost from "@/data/BlogPost";
import blogPostsData from "@/data/BlogPostsData";

export default Vue.extend({
  name: "Blogs",
  data: function () {
    return {
      blogs: blogPostsData,
      searchQuery: "",
      selectedTags: [] as string[]
    };
  },

 computed: {
  allTags(): string[] {
    const allTags = new Set<string>();
    this.blogs.forEach((blog: BlogPost) => {
      if (blog.tags) {
        blog.tags.forEach(tag => allTags.add(tag));
      }
    });
    return Array.from(allTags).sort();
  },
  filteredBlogs(): BlogPost[] {
    console.log('Search Query:', this.searchQuery);
    console.log('Selected Tags:', this.selectedTags);
    
    if (this.searchQuery === "" && this.selectedTags.length === 0) {
      console.log('No filters applied, returning all blogs');
      return this.blogs;
    }

    const query = this.searchQuery.toLowerCase().trim();
    console.log('Searching for:', query);
    
    const filtered = this.blogs.filter((blog: BlogPost) => {
      // Safely check tags
      const blogTags = blog.tags || [];
      
      // Tag filter
      const matchesTags = this.selectedTags.length === 0 || 
        this.selectedTags.every(tag => blogTags.includes(tag));
      
      if (!matchesTags) {
        console.log('Blog filtered out by tags:', blog.name);
        return false;
      }
      
      // Search filter
      if (query === "") {
        console.log('No search query, returning blog:', blog.name);
        return true;
      }
      
      // Safely check search matches
      const titleMatch = blog.name?.toLowerCase().includes(query) || false;
      const excerptMatch = blog.excerpt?.toLowerCase().includes(query) || false;
      const tagMatch = blogTags.some(tag => tag?.toLowerCase().includes(query)) || false;
      
      const matchesSearch = titleMatch || excerptMatch || tagMatch;
      console.log(`Blog "${blog.name}": titleMatch=${titleMatch}, excerptMatch=${excerptMatch}, tagMatch=${tagMatch}, overall=${matchesSearch}`);
      
      return matchesSearch;
    });
    
    console.log('Final filtered results:', filtered.length, 'blogs');
    return filtered;
  }
},


  methods: {
    openBlog(blogId: string) {
      this.$router.push(`/blog/${blogId}`);
    },
    toggleTag(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    },
    clearAllTags() {
      this.selectedTags = [];
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
.blog-controls {
  margin-bottom: 30px;
}

.search-container {
  margin-bottom: 20px;
}

.blog-page-container {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
}

.search-input:focus {
  outline: none;
  border-color: #23bd69;
}

.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-filter-btn {
  padding: 8px 16px;
  border: 2px solid #e1e5e9;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.tag-filter-btn:hover {
  border-color: #23bd69;
  background: #f8fff9;
}

.tag-filter-btn.active {
  background: #23bd69;
  color: white;
  border-color: #23bd69;
}

.tags-filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.clear-tags-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.clear-tags-btn:hover {
  background: #c82333;
}


.blog-content {
  max-width: none;
  width: 100%;
  margin: 0 auto;
  padding: 60px 5%; /* Changed from 40px to 5% for responsive spacing */
  background: white;
  color: #333;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}



/* Make sure the blog body text is readable */
.blog-body >>> {
  color: #333;
}

.blog-body >>> p {
  color: #333;
}

.blog-body >>> h1,
.blog-body >>> h2,
.blog-body >>> h3,
.blog-body >>> h4 {
  color: #2c3e50;
}

.blogs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.blog-card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
}

.blog-card-content {
  padding: 20px;
}

.blog-title {
  margin: 0 0 10px 0;
  font-size: 1.3em;
  color: #2c3e50;
  line-height: 1.4;
}

.blog-excerpt {
  margin: 0 0 15px 0;
  color: #666;
  line-height: 1.5;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9em;
  color: #888;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.blog-tag {
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  color: #666;
}

.blog-tag-more {
  background: #e1e5e9;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  color: #888;
  font-style: italic;
}

.no-results {
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
}

@media only screen and (min-width: 768px) {
  .blogs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1024px) {
  .blogs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>