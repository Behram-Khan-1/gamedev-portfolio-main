<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
            @click="project.clickable !== false ? showDetails(project) : null"
            class="project-item"
            :class="{ 
              'wide': project.isWide, 
              'high': project.isHigh,
              'not-clickable': project.clickable === false
            }">
            <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
            </div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}
                  <!-- Show company name for professional projects -->
                  <div v-if="project.category === 'professional' && project.company" class="company-name">
                    @ {{ project.company }}
                  </div>
                </div>
            </div>
            <!-- Show non-clickable indicator -->
            <div v-if="project.clickable === false" class="non-clickable-overlay">
              <div class="non-clickable-text">In Progress</div>
            </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // Only show popup if project is clickable
      if (item.clickable === false) return;
      
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
  },
});
</script>

<style scoped>
.projects-list {
  /* Your existing styles */
}

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.project-item.not-clickable {
  cursor: not-allowed;
  opacity: 0.8;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}

.project-item:not(.not-clickable) .project-item-image:hover {
  transform: scale(1.1);
}

.project-item:not(.not-clickable):hover {
  filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
  position: relative;
}

.company-name {
  font-size: 0.8em;
  opacity: 0.9;
  margin-top: 4px;
  font-style: italic;
}

/* Non-clickable overlay */
.non-clickable-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
}

.non-clickable-text {
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid white;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }

  .company-name {
    font-size: 0.7em;
  }
}
</style>