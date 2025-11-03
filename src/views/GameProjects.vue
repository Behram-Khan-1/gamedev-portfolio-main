<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      The following are some stuff I've made or heavily contributed to.
    </div>

    <!-- Add Filter Buttons -->
    <div class="filter-buttons" style="margin-bottom: 30px;">
      <button 
        v-for="filter in filters" 
        :key="filter.id"
        :class="['filter-btn', { active: activeFilter === filter.id }]"
        @click="setActiveFilter(filter.id)"
      >
        {{ filter.label }}
      </button>
    </div>

    <ProjectsList v-bind:projects="filteredProjects" />

    <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
      activeFilter: 'all',
      filters: [
        { id: 'all', label: 'All Projects' },
        { id: 'indie', label: 'Indie Games' },
        { id: 'professional', label: 'Professional Work' },
        { id: 'gamejams', label: 'Game Jams' }
      ]
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeFilter);
    }
  },
  methods: {
    setActiveFilter(filterId: string) {
      this.activeFilter = filterId;
    }
  }
});
</script>

<style scoped>
.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #23bd69;
  background: white;
  color: #23bd69;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.filter-btn:hover {
  background: #f0fff4;
}

.filter-btn.active {
  background: #23bd69;
  color: white;
}
</style>