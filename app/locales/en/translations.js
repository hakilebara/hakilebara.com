export default {
  // "some.translation.key": "Text for some.translation.key",
  //
  // "a": {
  //   "nested": {
  //     "key": "Text for a.nested.key"
  //   }
  // },
  //
  // "key.with.interpolation": "Text with {{anInterpolation}}"

  "blog.posts": "Posts",
  "nav.switch_language": "version française",
  "home.iam": "I am",
  "home.greetings": "Hi, I am",
  "typist_element.first": "a Web Designer",
  "typist_element.second": "a Emberjs Developer",
  "typist_element.third": "a Network Engineer",
  "typist_element.fourth": "a Linux System Engineer",
  "typist_element.fifth": "a Elixir and Phoenix Enthusiast",

  /*** about ***/
  "about.title": "about me",
  "about.text_1": 
        `<p>I'm Frédéric Soumaré (<a target="_blank" href="https://twitter.com/hakilebara">@hakilebara</a>), a freelance software developer and designer from France.\
        My passions are the web, my business and the Theatre.</p>
        <p>I have lived and worked in Shanghai and Singapore. I live now in Paris.</p>
        <p> Feel free to check out <a href='/work'>my work</a> to learn more about what I do.</p>`,
  "about.tech_background_title": "Technical Background",
  "about.education_title": "Education",
  "about.text_2": 
       `<p>I started programming for the web back in 2007 developping XULRunner applications.\
        However my background and formal education are in system and network engineering.
       I have worked for 5 years as a site reliability engineer for fast growing e-commerce startups and a Fortune 500 financial service company. My day to day job was to configure, deploy, maintain, troubleshoot and automate large and critical infrastructures of Linux/Solaris Cisco/Juniper (L2 MPLS, BGP, ISIS) boxes in the Asia Pacific Region.</p><br>
       <p>In 2015 I decided to learn software development and started building Monappliphoto - a French SaaS business for professional photographers.</p>`,

  "about.frontend": 
      `
       <p>I have a strong focus on HTML5, CSS, Javascript and responsive design.\
       To create rich front-end applications my tool of choice is\
       <a target="_blank" href="https://guides.emberjs.com">Ember.js</a>.\
       I love this framework for its community, its ecosystem and its dedication to stability.</p>
       <p>I have an eye for design. I love drawing vector illustrations using\
       <a href="https://www.sketchapp.com/">Sketch</a>\
       check out my (small but growing) <a target="_blank" href="https://www.behance.net/fredericsob02f">Behance page</a>.
       I am also comfortable writing CSS animations check out my (very small but growing :) ) <a target="_blank" href="http://codepen.io/hakilebara/">Codepen</a>.</p>
        `,
  "about.backend": 
  `
       <p>I focus on Rails, Node.js and Wordpress/WooCommerce.</p>
       <p>I know how to implement and deploy backend systems that are performant, reliable and supervised (Nagios / CFengine).</p>
       <p>Given my background I am naturally drawn to Erlang and OTP. I am currently teaching myself how to build resilient distributed systems\
       using Elixir and Phoenix.</p>
  `,
  "about.website": 
  `
    <ul>
       <li><p>This unashamedly over-engineered website was built with Ember.js and Node.js. It is a single page app server-rendered
       by <a target="_blank" href="https://ember-fastboot.com/">Ember Fastboot</a>.</p></li>
       <li><p>The website is available in two languages, for internationalization (i18n) I use
       <a target="_blank" href="https://github.com/jamesarosen/ember-i18n">jamesarosen/ember-i18n</a>.</p></li>
       <li><p>The responsive design is done using Flexi Layouts</p></li>
       <li><p>The CSS was written using PostCSS.</p></li>
       <li><p>Most of the icons were hand drawn using Sketch.</p></li>
       <li><p>The Blog content is served through a REST API. <br></p></li>
       <li><p>Each blog post is stored remotely as a Markdown+Front-Matter file. A Node daemon parses through
       the files and transform them into a read-only JSON-API.</p></li>
    </ul>
  `,
  "about.education": 
  `
       <p>I graduated in 2009 from the University of Technology of Troyes in Information System Management and Network Engineering.</p>
       <p>I have a postgraduate degrees from the University of Cranfield in operations management.</p>
  `,
  /*** work ***/
  "work.text_1": 
  `
      <p>I am currently available for freelance work. <a href="mailto:frederic.soumare@gmail.com">Contact me</a> if you have a project in mind.
      I can help your business build a SaaS, an e-commerce website or a Progressive Web App.</p>
  `,
  "work.consulting_title": `Freelance`,
  "work.monappliphoto_title": `Monappliphoto`,
  "work.before_title": `Before Monappliphoto`,
  "work.text_2": 
  `
      <p>I help small businesses grow using the latest web technologies. Whether you need an e-commerce solution, a marketing website, a Wordpress 
      site or a custom platform I can help you.</p>
      <p>If your business is already online, I can also help on the server side. I can show how you to monitor your website performance, 
      prevision future growth, and avoid common security pitfalls.</p>
      <p>Do you have digital marketing strategy written down? I work closely with an expert in digital marketing who can guide you.</p>
  `,
  "work.text_3": 
  `
      <p>Monappliphoto.com is a SaaS (Software as a Service) business I founded in 2015. It allows profesionnal photographers to create
      customs mobile apps for each of their clients. After a shooting a photographer uploads his/her photos to Monappliphoto and chooses from a
      list of available themes. Monappliphoto then automatically generates a mobile app of the photos and the photographer sends the app
      to his/her clients. <br> Mobile apps have two advantages over responsive photo galleries: they provides a greater user experience and they
      are a powerful marketing tool for the photographer (custom homescreen icon, push notifications, ..).<br>
      Our vision is to help photographers book more sales by helping them give a greater user experience to their clients.
      </p>
      <br>
      <p>Monappliphoto is in beta test and will start accepting customers later this year. In 2017 we are focusing on the French market.</p>
      <br>
      <p>Monappliphoto's front-end is a large Ember.js app. Building it from scratch has given me extensive experience with Ember.js.</p>
  `,
  "work.text_4": 
  `
      <p>
        Before starting Monappliphoto I worked for 5 year as a site reliability engineer in Shanghai and Singapore.
        I worked for fast growing e-commerce startups and a Fortune 500 financial service company.
        I taught myself programming, UX and web design.
      </p>
  `,
};
