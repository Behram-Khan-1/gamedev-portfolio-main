import ProjectData from '@/data/ProjectData'

export default [
  

  //PROFESSIONAL GAMES

new ProjectData("project-1", "A Ranger’s Journey — Educational Wildlife Game for Kids", "/img/projects/rangersjourney.gif", `
<div class="paragraph">
  <strong>A Ranger’s Journey — Educational Wildlife Game for Kids</strong> Role: Lead Designer &amp; Project Manager Engine: Unreal Engine 4
</div>
<div class="paragraph center">
  <div class="store-badges-row">
        <a href="https://jangomango2001.itch.io/a-rangers-journey" target="_blank"><img src="/img/projects/itch-logo.png" alt="itch badge" /></a>
  </div>
</div>
<div class="paragraph">
  Game Videos: https://drive.google.com/drive/folders/1cJa68Bm0u3rgnsHMbNpEJabtnn90x8qg <br/><br/>A Ranger’s Journey is an educational adventure game created as my Final Year Project, aimed at teaching children about wildlife conservation through exploration and storytelling. Players take on the role of a forest ranger, guided by a senior ranger over radio communication, learning how to interact with wild animals and protect nature responsibly. The idea was inspired by the 2022 floods in Pakistan, which devastated wildlife sanctuaries and forests, leading many locals to rely on firewood for survival — a short-term solution with long-term ecological costs. <br/>The game encourages players to understand these challenges, promoting awareness of tree cutting, animal rescue, and coexisting with wildlife. I handled the complete visual and experiential design — from initial concept to final polish. This included: Environment and Level Design, Scenario Planning, Storytelling Materials, Lighting, World Building, Sound Design and Character Animations (using Cascadeur &amp; Blender). <br/>The hardest part of the project wasn't making it, but trying to communicate with two people who barely spoke but could code (cool guys tho).
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>Camera System – Capture photos and videos of animals to update an in-game logbook with educational facts.</li>
    <li>Exploration & Learning – Observe animals in their natural habitats and discover how to care for the environment.</li>
    <li>Kid-Friendly Design – Built to educate safely, avoiding any actions children could imitate in real life (like giving medicine to animals).</li>
  </ul>
</div>`, "#015b07", false, false, "professional", "", true, "gif"),


new ProjectData("project-2", "Poha eLab — Educational Simulation Initiative (Pakistan)", "/img/projects/PohaLab.jpg", `
<div class="paragraph">
  <strong>Poha eLab — Educational Simulation Initiative (Pakistan)</strong> I contributed to Poha eLab, a provincial government initiative aimed at developing educational simulations for underprivileged, orphaned, and refugee students across Pakistan. The project focused on creating trilingual interactive content (English, Urdu, and Pashto) to make science learning more accessible and engaging.

<br>

I initially joined as an intern after presenting a prototype during the selection phase, and later advanced to Team Lead, managing communication between government officials, the modeling team, and fellow developers.

<br>

Although the project faced delays and wasn’t launched at the time due to external issues, it remains a major milestone for me — my first large-scale project, where I learned to balance creative quality with production deadlines. There’s always room for improvement, but the experience taught me the value of leadership, collaboration, and delivering within constraints.

<br>
<br>

https://www.thenews.com.pk/print/1078214-virtual-science-laboratory-on-cards-to-empower-students
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>All physics, chemistry and biology experiments of class 9-10 gamified</li>
    <li>Trilingual - English, Urdu, Pashto</li>
    <li>Both WebGL and Android App made</li>
  </ul>
</div>
<div class="paragraph center">
    <img class="phone-screenshot" src="https://i.ibb.co/ZzWNfyyZ/IMG-20251103-WA0021.jpg" alt="Poha eLab — Educational Simulation Initiative (Pakistan) Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/fYFqH2kX/IMG-20251103-WA0020.jpg" alt="Poha eLab — Educational Simulation Initiative (Pakistan) Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/XrZNjdys/IMG-20251103-WA0019.jpg" alt="Poha eLab — Educational Simulation Initiative (Pakistan) Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/1fPRk8Xn/IMG-20251103-WA0018.jpg" alt="Poha eLab — Educational Simulation Initiative (Pakistan) Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/7dMsdsLn/IMG-20251103-WA0017.jpg" alt="Poha eLab — Educational Simulation Initiative (Pakistan) Screenshot" />
</div>`, "#02006b", true, true, "professional", "Pakistan KPK Government", true, "image"),


new ProjectData("project-9", "Rougelike Shooter", "/img/projects/6.gif", `
<div class="paragraph">
  <strong>Rougelike Shooter</strong> Role: Developer & Instructor
Language: Java (AWT/Swing)
</div>
<div class="paragraph center">
  <iframe class="youtube" src="https://www.youtube.com/embed/https://youtu.be/4XZgP4AaV9Y" frameborder="0" allowfullscreen></iframe>
</div>
<div class="paragraph center">
  <div class="store-badges-row">
        <a href="https://github.com/Behram-Khan-1/RougeLike2025" target="_blank"><img src="/img/projects/github-logo.png" alt="github badge" /></a>
  </div>
</div>
<div class="paragraph">
  Roguelike Shooter is a top-down roguelike shooter built entirely in pure Java, created as a teaching project for students at the University of Engineering and Technology, Peshawar. The goal was to help students understand object-oriented programming, AI state machines, dynamic difficulty and Github ,all without using any external game engine.<br/><br/>🎮 Gameplay Overview<br/>You play as a square-shaped survivor fighting off waves of enemies, collecting hearts to heal, and opening random chests to upgrade your stats and survive longer.<br/><br/>👾 Enemies & AI<br/>There are four enemy types, each with unique AI behavior and interaction:<br/>🟥 Square (Basic Enemy) – Standard shooter that fires directly at the player.<br/>💎 Diamond (Tank) – Slow but durable, providing cover to nearby allies.<br/>⚪ Circle (Assault Type) – Fast and aggressive, firing triple spread shots.<br/>🟩 Healer – Non-attacking unit that periodically heals allies within range.<br/><br/>Each enemy runs on a state-driven AI system consisting of:<br/>Idle/Patrol – Random movement when the player isn’t visible.<br/>Chase – Moves toward the player once detected.<br/>Attack – Fires when within range.<br/>AI behavior updates dynamically based on distance, obstacles, and player actions.<br/><br/>💰 Loot & Progression<br/>Enemies drop coins, and hearts spawn randomly for healing.<br/>Players can use coins to unlock random chests of varying rarity, each providing buffs like:<br/>Increased health<br/>Higher damage<br/>Faster attack rate<br/>Better critical chance<br/><br/>⚙️ Technical Highlights<br/>Pure Java Implementation – Built without external libraries or engines.<br/>OOP Architecture – Modular classes for Player, Enemy, Projectile, Chest, and PowerUps.<br/>AI State Machines – Independent logic for each enemy type.<br/>Dynamic Difficulty – Enemies scale with time and player performance.<br/>Custom Collision System – Handles walls, bullets, and entities.<br/><br/>🎯 My Focus<br/>Designing a clean OOP architecture with extendable class hierarchies.<br/>Teaching students how to implement modular AI state machines.<br/>Simulating team synergy mechanics like tanks and healers.<br/>Balancing pacing and difficulty through dynamic scaling systems.
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>Player movement & shooting</li>
    <li>Walls block player and enemy projectiles</li>
    <li>4 distinct enemy types</li>
    <li>State-based AI system</li>
    <li>Healing & stat upgrades</li>
    <li>Scaling difficulty</li>
  </ul>
</div>`, "#970707", true, false, "professional", "University of Engineering and Technology, Peshawar", true, "gif"),


new ProjectData("project-5", "DNA Racing — Deterministic Racing Simulation", "/img/projects/DNARACING.gif", `
<div class="paragraph">
  <strong>DNA Racing — Deterministic Racing Simulation</strong> Role: Core Systems & Algorithm Developer<br>
Engine: Unity<br>
Link: https://fbike.dnaracing.run/claim-trainer?
<br><br>

DNA Racing is a deterministic racing simulation where every race, when replayed with the same seed, produces identical results — including player paths, positions, and timings.<br>
This ensures complete consistency for competitive and data-driven racing environments.<br><br>

I developed the main algorithm and core race logic, while another developer worked on the UI and visual presentation.<br>
The system started as an AI-agent-based simulation using Unity physics, but it was challenging to achieve deterministic behavior due to physics inconsistencies.<br>

To solve this, I switched to a fully custom race logic system — where racers dynamically turn, overtake, and maneuver through corners in realistic ways while avoiding collisions and maintaining pre-defined timings and outcomes from the database.<br>
This approach allowed us to simulate exciting, natural racing behavior without losing determinism.<br>

Despite the shift costing us some development time, I built the complete race system in a single week, independently, while the rest of the team was still experimenting with AI agents.<br>
The senior developer was impressed by the results and approved the new deterministic solution as the project’s core system.
and now same system is being used to developer a similar horse racing simulation <br><br>

This project deepened my understanding of simulation design,  deterministic systems,independant decision making, and how to balance realism with technical precision in gameplay programming.<br>
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>Deterministic race</li>
    <li>Custom race logic and realistic behavior</li>
  </ul>
</div>
<div class="paragraph center">
    <img class="phone-screenshot" src="https://i.ibb.co/dwPWvSRW/rac3.png" alt="DNA Racing — Deterministic Racing Simulation Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/wZJSH117/rac2.png" alt="DNA Racing — Deterministic Racing Simulation Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/TDcGV3V5/rac1.png" alt="DNA Racing — Deterministic Racing Simulation Screenshot" />
</div>`, "#36677c", false, true, "professional", "Aptech Media", true, "gif"),

new ProjectData("project-4", "Flying Endless Runner (In Development)", "/img/projects/SegaOfWings.png", `
<div class="paragraph">
  <strong>Flying Endless Runner (In Development)</strong> Role: Game Designer & Developer<br>
Engine: Unity<br><br>

At Aptech Media, I’m developing a unique flying endless runner designed specifically for mobile platforms.<br>
The project focuses on creating a smooth, responsive, and satisfying flying experience, blending intuitive controls with engaging obstacle-dodging gameplay.<br><br>

As the sole developer and designer, I handled:<br>
✈️ Level Design & Game Flow – Balancing speed, distance, and difficulty curves to maintain a natural sense of progression.<br>
🧠 Game Design Research – Studied papers and analyzed successful endless runners to refine the game’s feel, pacing, and obstacle patterns.<br>
🔁 Object Pooling & Optimization – Built efficient spawning and performance systems for mobile devices.<br>
🎨 UI/UX Design – Collaborated with a Figma designer to create a visually distinctive interface, then implemented and animated it within Unity.<br>
🪨 Obstacle Creation – Designed obstacle logic and placement using assets modeled by the 3D artist.<br><br>

This project has been a deep dive into player experience design, teaching me how subtle adjustments in timing, feedback, and rhythm define how a game feels.<br>
I read research papers on how endless runner games make it engaging and their difficulty scaling.
</div>`, "#930b5a", true, false, "professional", "Aptech Media", true, "image"),



new ProjectData("project-6", "Joygram - On Hold", "/img/projects/mickey.gif", `
<div class="paragraph">
  <strong>Joygram - On Hold</strong> Joygram — AI-Powered Animated Greeting App
</div>
<div class="paragraph">
  Role: Sole Unity Programmer<br/>Platform: iOS<br/>Engine: Unity<br/>Status: On Hold<br/><br/>Joygram is an AI-powered animated greeting app that allows users to create personalized video messages using famous cartoon-style characters (e.g., Bluey, Mickey Mouse–style characters, Cocomelon–style characters).<br/><br/>The user selects a character, enters a name, and provides a short prompt (for example: “Happy birthday Behram”). The system then expands this input into a 30–40 second personalized script, generates a character-matched AI voice, and plays a fully animated performance synced to the audio.<br/><br/>I was the only programmer on the project and implemented the entire system in Unity, handling both logic and real-time animation control.<br/><br/>My Role<br/>Designed and implemented the core animation playback system.<br/>Built the logic for timing, facial expressions, and mouth synchronization.<br/>Integrated assets from other team members, including models, rigs, animations, and UI designs, into a cohesive production pipeline.<br/>Optimized performance for iOS deployment.<br/><br/>Team Collaboration<br/>While I handled all programming, the project also involved modelers, riggers, animators, and UI designers. My responsibility was to take their assets and integrate them seamlessly into the app’s runtime systems.<br/><br/>Project Status<br/>Development is currently on hold due to client-side decisions, but the project remains a strong example of my ability to build complex, AI-driven interactive systems and manage full Unity integration independently.
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>🧠 AI Prompt Expansion  Converts short user inputs into full-length personalized messages.</li>
    <li>🎙️ Voice AI Integration  Generates speech in a character-appropriate voice.</li>
    <li>🎭 Animation Selection Algorithm  Dynamically selects the most suitable body animations, facial expressions, and gestures based on speech timing and emotion.</li>
    <li>👄 Lip Sync & Facial Animation  Custom logic to synchronize mouth movement and expressions with generated audio.</li>
  </ul>
</div>
<div class="paragraph center">
</div>`, "#a22020", false, false, "professional", "", true, "image"),

new ProjectData("project-3", "Spider Man and Assassain Creed Clones", "/img/projects/spidermanswing.jpg", `
<div class="paragraph">
  <strong>Spider Man and Assassain Creed Clones</strong>
</div>
<div class="paragraph">
  Role: Junior Game Developer <br/>https://metalheartgame.com During my time at Metal Heart Game Studio, I contributed to two mobile titles — including a Spider-Man–style action game for Android and animation work for other projects, such as recreating Assassin’s Creed’s iconic Leap of Faith. I will find links for the games and upload them. <br/><br/>Working closely with a senior developer, I learned the full production cycle of mobile games — from polishing and finalizing a title to reusing and rebuilding systems for new projects. This involved adapting assets, UI, and gameplay events while maintaining performance and player experience. This experience strengthened my understanding of iteration, optimization, and efficient reuse of codebases, helping me see how professional studios streamline game production.
</div>`, "#19828a", false, false, "professional", "", true, "image"),



//INDIE GAMES

new ProjectData("project-7", "Chemistry Experiment Prototype", "https://i.ibb.co/tND4x4V/sim.png", `
<div class="paragraph">
  <strong>Chemistry Experiment Prototype</strong> A prototype for an experiment simulated in Unity.
</div>
<div class="paragraph center">
  <iframe class="youtube" src="https://www.youtube.com/embed/VdqLiiDq4nY" frameborder="0" allowfullscreen></iframe>
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>Used Scriptable Objects </li>
    <li>Combined multiple design patterns to make reusable and adjustable experiment steps</li>
  </ul>
</div>`, "#737373", false, true, "indie", "Aptech Media", true, "image"),

//Game Jam

new ProjectData("project-10", "BE CUTE", "https://i.ibb.co/QvcGNz4r/61873874-7f31-4352-9b8d-43c33de36f2b-1.jpg", `
<div class="paragraph">
  Round is cute, Squares are cool!
You are born into a world where being round is superior and anything not round is to be made round FORCEFULLY.
</div>
<div class="paragraph center">
  <iframe class="youtube" src="https://www.youtube.com/embed/https://youtu.be/XVRsFk7axu8" frameborder="0" allowfullscreen></iframe>
</div>
<div class="paragraph center">
  <div class="store-badges-row">
        <a href="https://behram-khan.itch.io/be-cute" target="_blank"><img src="/img/projects/itch-logo.png" alt="itch badge" /></a>
  </div>
</div>
<div class="paragraph">
  Made this game for Aalto University GN Jam 2025 and the theme was CUTE.<br/>Initially, I had the idea to make a game about tearing faces of different characters into perfect round shapes and the NPCs will react to your cutting skills but I dropped that idea.<br/>I made a game about a psycho (me) who has grown up in a world where round shapes have fought wars against other shapes and now I am doing the other shapes a favor by making them round forcefully. We basically beat the others, animals included and smooth them out. <br/>I has no clue on the characters so I just made me and the hosts, Miss Solip and Miss Anna.<br/><br/>It was my first time making an isometric game, combat system as you can see the punching and combo systems are not the best. I made cutscenes for the first time too, they were super easy. <br/>The harder part was planning the areas, how the game should look, where enemies should be, how should I progress and most importantly how should the player feel like this game is cute even if its violent. <br/><br/>We have different square faces for the human NPC, after hitting them they bleed too and then convert to a cute round face. <br/>I gave Miss Solip the Naruto run and also a grenade launcher.
</div>
<div class="paragraph">
  Main features :
  <ul>
        <li>Isometric Controller</li>
    <li>Cutscenes</li>
    <li>Combat System + Combo System</li>
    <li>Animations</li>
  </ul>
</div>
<div class="paragraph center">
    <img class="phone-screenshot" src="https://i.ibb.co/SX9q5yXF/image.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/67WpCmj7/image.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/bRqHGXmx/image.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/d0krqJ7s/image.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/B2KP0g9j/image.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/LVSScmJ/b1.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/XZd3m7Mz/Chat-GPT-Image-Nov-12-2025-10-35-55-AM.png" alt="BE CUTE Screenshot" />
  <img class="phone-screenshot" src="https://i.ibb.co/t0LCT4v/anna-round.jpg" alt="BE CUTE Screenshot" />
</div>`, "#14a977", false, false, "gamejams", "", true, "image"),

];






    // <div class="paragraph">
    //     <div class="notice">
    //     Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
    //     Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    //     </div>
    // </div>