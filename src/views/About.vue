<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>
<div class="paragraph">
  <div>
    I'm <strong>Behram Khan</strong>, a passionate <strong>Game Developer</strong> who loves bringing ideas to life through code and design.<br/>
    I mostly work in <strong>Unity</strong> and enjoy discussing creative concepts, building gameplay systems, and experimenting with new mechanics that make games fun and meaningful.
  </div>

  <div style="margin-top: 20px;">
    Besides games, I love creating apps and tools that help with <strong>productivity, mental health, and education</strong>.  
    I’m currently working on small projects to strengthen my <strong>gameplay logic</strong> and <strong>programming skills</strong>.
  </div>

  <div style="margin-top: 40px;">
    In the future, I aim to make <strong>online games more secure</strong> — a safer, fairer space for everyone.  
    
    You can reach me at <a href="mailto:khanbehram66@gmail.com">khanbehram66@gmail.com</a> or <router-link to="/contact">contact me here</router-link>.
  </div>
</div>

<div class="photo">
  <img src="img/behram.png" alt="Avatar of Behram" /> 
</div>

<div style="clear:both"></div>


  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}
.photo img {
  height: 300px;
  width: 300px;
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
}

</style>