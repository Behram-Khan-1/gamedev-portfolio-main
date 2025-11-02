<template>
  <div class="editor-page">
    <h1>Project Editor</h1>

    <div class="form">
      <input v-model="newProject.id" placeholder="Project ID (e.g. project-12)" />
      <input v-model="newProject.name" placeholder="Project Name" />
      <input v-model="newProject.iconUrl" placeholder="Icon URL (e.g. img/projects/xyz.png)" />
      <input v-model="newProject.accentColor" placeholder="Accent Color (e.g. #23bd69)" />
      <label>
        <input type="checkbox" v-model="newProject.isWide" />
        Wide Card
      </label>
      <textarea v-model="newProject.htmlDescription" placeholder="HTML Description for Popup"></textarea>
    </div>

    <button @click="addProject">Preview Card</button>

    <ProjectsList v-if="projects.length" :projects="projects" />

    <div v-if="exportText" class="export-section">
      <h3>Generated Code (for GameProjectsData.ts):</h3>
      <pre>{{ exportText }}</pre>
      <button @click="copyCode">Copy to Clipboard</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";

export default Vue.extend({
  name: "ProjectEditor",
  components: { ProjectsList },
  data() {
    return {
      newProject: {
        id: "",
        name: "",
        iconUrl: "",
        htmlDescription: "",
        accentColor: "#23bd69",
        isWide: false
      },
      projects: [],
      exportText: ""
    };
  },
  methods: {
    addProject() {
      this.projects = [this.newProject];
      // format output same as GameProjectsData.ts
      this.exportText = `
new ProjectData("${this.newProject.id}", "${this.newProject.name}", "${this.newProject.iconUrl}", 
\`
${this.newProject.htmlDescription}
\`, "${this.newProject.accentColor}", ${this.newProject.isWide}),
      `.trim();
    },
    copyCode() {
      navigator.clipboard.writeText(this.exportText);
      alert("Copied to clipboard!");
    }
  }
});
</script>

<style scoped>
.editor-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.form input, .form textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

textarea {
  height: 200px;
  resize: vertical;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.export-section {
  margin-top: 30px;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 8px;
  overflow-x: auto;
}

pre {
  background: #222;
  color: #00ff91;
  padding: 10px;
  border-radius: 8px;
  white-space: pre-wrap;
}
</style>
