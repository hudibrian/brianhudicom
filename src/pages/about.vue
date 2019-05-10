<template>
  <Layout>
    <div class="content-box mt2em">
      <h1>
        Hello! 🙋‍♂️
      </h1>
      <p>
        I'm Brian, and I'm a software developer. I have been creating on the web
        for 3 years, and I love it. I love to teach/help others through blog
        posts, training, speaking, and any other content I produce.
      </p>
      <h3>A little more...</h3>
      <p>
        I am passionate about development, learning, and teaching. I aspire to
        be employed teaching others the wonders of development, and helping them
        be the best they can be. If I am not actively working on a project you
        will probably find me spending time with my beautiful wife Sidney 💍,
        reading 📖, lifting 🏋️‍♂️, or playing video games 🎮.
      </p>

      <div class="skillsGrid">
        <h4 class="skills-header">Some of my skills:</h4>
        <ul class="left-col" unstyled>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>VueJS</li>
          <li>Angular</li>
        </ul>
        <ul class="center-col">
          <li>Node</li>
          <li>Grunt & Gulp</li>
          <li>Webpack</li>
          <li>jQuery</li>
          <li>C#</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <h4>Certifications:</h4>
        <ul class="right-col">
          <li>
            <a
              target="none"
              href="https://www.certmetrics.com/amazon/public/badge.aspx?t=c&d=2019-04-13&i=1&ci=AWS00731642"
            >
              AWS Certified Solutions Architect - Associate
            </a>
          </li>
          <li>
            <a
              target="none"
              href="https://www.certmetrics.com/amazon/public/badge.aspx?t=c&d=2019-05-03&i=3&ci=AWS00731642"
            >
              AWS Certified SysOps Administrator - Associate
            </a>
          </li>
          <li>
            <a
              target="none"
              href="https://www.certmetrics.com/amazon/public/badge.aspx?t=c&d=2019-04-18&i=2&ci=AWS00731642"
            >
              AWS Certified Developer - Associate
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Some companies I've worked for:</h4>
        <div class="flex-row companies">
          <g-image
            alt="availity logo"
            src="~/assets/images/availity.jpg"
            width="150px"
            height="100px"
            blur="5"
          />
          <g-image
            alt="availity logo"
            src="~/assets/images/jll.png"
            width="150px"
            height="100px"
            blur="5"
          />
          <g-image
            alt="availity logo"
            src="~/assets/images/rightpoint.png"
            width="150px"
            height="100px"
            blur="5"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
.skillsGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "hd hd"
    "ls cs";
}
.skills-header {
  grid-area: hd;
  text-align: left;
}
.left-col {
  list-style: circle;
  grid-area: ls;
}
.center-col {
  list-style: circle;
  grid-area: cs;
}
.right-col {
  list-style: circle;
}

.companies {
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
