<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Behram Khan</strong>, a passionate <strong>Game Developer</strong> and educator focused on creating meaningful, interactive experiences.  
      <br >
      <br />Currently, I’m teaching Programming Fundamentals and OOP as a <strong>Visiting Lecturer</strong> while building games and self-development tools in Unity.
      <br />
      <br />My work combines both <strong>technical skill</strong> and <strong>educational purpose</strong> — from educational games and simulations to gameplay systems to productivity and habit-tracking apps.  
      <br />You can explore my projects <router-link to="/game-projects">here</router-link>, or reach out <router-link to="/contact">through here</router-link> if you'd like to collaborate.
      
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/BehramCV.pdf" target="_blank">
          <i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
        </a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div class="photo">
      <img src="img/behram.png" alt="Photo of Behram" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Visiting Lecturer – CSIT Department, UET Peshawar</h3>
      <h4>Jan 2025 – Present</h4>
      <div>
        Teaching Programming Fundamentals and OOP to 200+ undergraduates using live coding projects, visual learning, and AI-assisted teaching.
      </div>
      <div class="tech-stack">C++, Java, Unity, Education Design</div>

      <h3>Game Developer – Aptech Media</h3>
      <h4>Feb 2025 – July 2025</h4>
      <div>
        Built a deterministic bike racing AI with realistic racing behavior and a character animation app with facial expressions, animation blending, and real-time lipsync.
      </div>
      <div class="tech-stack">Unity, C#, Animation, AI Systems</div>

      <h3>Backend Developer (Remote) – MkProHub, Congo</h3>
      <h4>Sept 2024 – Dec 2024</h4>
      <div>
        Developed healthcare web platform using .NET and MySQL, integrated Pawapay API for mobile payments, and used Hangfire for background job execution.
      </div>
      <div class="tech-stack">.NET, MySQL, Pawapay API, Hangfire</div>

      <h3>Lead Game Developer – EncoderByte (Poha Elab Project)</h3>
      <h4>2023 – 2024</h4>
      <div>
        Led modular science simulation development (physics, chemistry, biology).  
        Designed reusable systems for interactive education, deployed on WebGL and Android.
      </div>
      <div class="tech-stack">Unity, WebGL, Educational Simulations</div>

      <h2>Education</h2>

      <h3>BSc Computer Science – University of Engineering and Technology, Peshawar</h3>
      <h4>2020 – 2024</h4>
      <div>
        <strong>2nd position holder</strong> in BS Computer Science.  
        <br />Final Year Project: <em>Ranger’s Journey</em> – an educational wildlife simulation game.  
        <br />Relevant Coursework: Data Science, Machine Learning, Game Development, Automata, Blockchain.
      </div>

      <h2>Awards & Honors</h2>
      <div>
        <ul>
          <li>🏅 Merit-Based Scholarship (2020–2024) – awarded 4 consecutive years</li>
          <li>🥈 ETEA Topper (Non-Engineering) – Highest marks in entrance exam 2020</li>
          <li>🎓 2nd Position Holder in BS Computer Science (2024)</li>
        </ul>
      </div>

      <h2>Volunteering & Leadership</h2>
      <div>
        <h3>HR Computer Cell Society – UET Peshawar (2022–2024)</h3>
        <div>Mediated student issues, organized departmental events, and supervised member recruitment.</div>

        <h3>Event Host & Organizer – Departmental Functions</h3>
        <div>Hosted orientation, farewell nights, and annual department events with student engagement activities.</div>

        <h3>Game Development Workshop</h3>
        <div>Taught 8-hour weekend sessions on Unity and live-coded 5 projects with students (2025).</div>

        <h3>Charity & Drives</h3>
        <div>Organized and participated in charity, iftar, and blood donation drives (2022–Present).</div>
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Game Development</h3>
        <SkillRate name="Unity (2D/3D)" :rate="5" />
        <SkillRate name="Gameplay Programming" :rate="5" />
        <SkillRate name="AI Systems" :rate="4" />
        <SkillRate name="Procedural Generation" :rate="3" />
        <SkillRate name="Game Design" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Software & Backend</h3>
        <SkillRate name=".NET / C#" :rate="4" />
        <SkillRate name="MySQL / Databases" :rate="4" />
        <SkillRate name="REST APIs" :rate="4" />
        <SkillRate name="Python" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Teaching & Mentoring" :rate="5" />
        <SkillRate name="Public Speaking" :rate="4" />
        <SkillRate name="Team Leadership" :rate="4" />
        <SkillRate name="Problem Solving" :rate="5" />
      </div>

      <div style="clear:both; margin-top: 20px;"></div>


      <h2>Languages</h2>

      <div>
        <strong>English:</strong> Proficient reading, writing, speaking<br/>
        <strong>Urdu:</strong> Conversational<br/>
        <strong>Pashto:</strong> Conversational
      </div>

  
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>