---
title: About Me
meta_tags:
- key: description
  content: Hey there! I am Manuel Henke, 25 years old and from the heart of Berlin,
    Germany. At the moment I'm in the final phase of my master studies in Information
    Systems Management. I also work as a student trainee in software development in
    the area of web development and cloud computing. Privately I'm just starting to
    get involved with open source development and have already started some small
    projects which are presented on this website.
education_timeline_items:
- from: "2020"
  to: today
  role: Information Systems Management (MSc)
  place: Technische Universität Berlin
  description: 'Thesis: ...'
- from: "2016"
  to: "2020"
  role: Wirtschaftsinformatik (BSc)
  place: Technische Universität Berlin
  description: 'Thesis: Design and development of a cloud-based solution approach
    for automated home accessibility assessment as an iOS app'
experience_timeline_items:
- from: "2019"
  to: today
  role: Cloud Fullstack-Developer (Student Employee)
  place: OEV Online Dienste GmbH - ein Unternehmen der S-Finanzgruppe
  description: Designing, developing, and managing applications in the cloud, including
    a WordPress webpage, an Alexa Skill, and a custom DXP. For some of these projects,
    I am in touch with the stakeholders.
- from: "2018"
  to: "2019"
  role: Software Developer (Student Employee)
  place: Versicherungskammer Bayern
  description: Developing applications mainly using PHP and Java for the backend and
    the common frontend web technologies as well as the frontend libraries Bootstrap
    and jQuery.
skills:
- name: JavaScript
  stars: "5"
  libraries:
  - name: Vue.js
    stars: "5"
    libraries:
    - name: Nuxt.js
      stars: '4'
  - name: Node.js
    stars: "5"
  - name: Webpack
    stars: "4"
  - name: jQuery
    stars: "4"
  - name: Storybook
    stars: "4"
  - name: WebComponents
    stars: "4"
  - name: Electron
    stars: "3"
  - name: TypeScript
    stars: "3"
  - name: Jest
    stars: "3"
  - name: React
    stars: "2"
  - name: Angular
    stars: "1"
- name: CSS
  stars: "5"
  libraries:
  - name: SCSS
    stars: "5"
  - name: Bootstrap
    stars: "5"
- name: HTML
  stars: "5"
- name: Java
  stars: "4"
  libraries:
  - name: Spring
    stars: "4"
  - name: Maven
    stars: "4"
- name: Swift
  stars: "3"
  libraries:
  - name: SwiftUI
    stars: "4"
  - name: ARKit
    stars: "2"
- name: PHP
  stars: "3"
  libraries:
  - name: Wordpress
    stars: "4"
- name: SQL
  stars: "3"
- name: Python
  stars: "2"
- name: R
  stars: "1"
- name: Go
  stars: "1"
languages:
- name: German
  stars: "5"
- name: English
  stars: "4"
- name: Spanish
  stars: "1"
- name: Binary
  stars: "0"
tools:
- name: Git
  stars: "5"
- name: VSCode
  stars: "5"
- name: IntelliJ
  stars: "3"
- name: Jira
  stars: "4"
- name: AWS
  stars: "4"
  libraries:
  - name: Route 53
    stars: 5
  - name: IAM
    stars: 5
  - name: EFS
    stars: 5
  - name: Rekognition
    stars: 5
  - name: S3
    stars: 5
  - name: CloudFront
    stars: 5
  - name: Lambda
    stars: 4
  - name: EC2
    stars: 4
  - name: RDS
    stars: 4
  - name: CloudFormation
    stars: 4
  - name: CodePipeline
    stars: 4
  - name: API Gateway
    stars: 4
  - name: SNS
    stars: 3
  - name: Amazon Pinpoint
    stars: 3
  - name: SES
    stars: 3
  - name: SQS
    stars: 2
  - name: EKS
    stars: 2
- name: Scrum
  stars: "4"
- name: DevOps
  stars: "4"
- name: Confluence
  stars: "4"
- name: Docker
  stars: "3"
  libraries:
  - name: Docker Compose
    stars: 5
- name: Postman
  stars: "3"
- name: Kubernetes
  stars: "2"

---
<section id="introduction">
  <!-- #introduction -->
  <h2 class="visually-hidden">Introduction</h2>
  <div class="row">
    <div class="col">
      <p class="lead">
        Hey there! I am Manuel Henke, 25 years old and from
        the heart of Berlin, Germany. At the moment I'm in the final phase
        of my master studies in Information Systems Management. I also work
        as a student trainee in software development in the area of web
        development and cloud computing. Privately I'm just starting to get
        involved with open source development and have already started some
        small projects which are presented on this website.
      </p>
    </div>
    <div class="col-12 col-sm-4 col-md-3 text-center">
      <img
        src="/images/manuel-henke.jpg"
        class="img-fluid rounded-circle"
        alt="Picture of Manuel Henke"
      />
    </div>
  </div>
  <!-- /#introduction -->
</section>

<section id="education">
  <!-- #education -->
  <h2>Education</h2>
  <timeline-main :timeline-items="education_timeline_items" unique-timeline></timeline-main>
  <!-- /#education -->
</section>

<section id="experience">
  <!-- #experience -->
  <h2>Experience</h2>
  <timeline-main :timeline-items="experience_timeline_items" unique-timeline /></timeline-main>
  <!-- /#experience -->
</section>

<section id="abilities">
  <!-- #abilities -->
  <h2>Abilities</h2>
  <section class="space-4">
    <h3>Skills</h3>
    <ability-main :entries="skills"></ability-main>
  </section>

  <section class="space-4">
    <h3>Languages</h3>
    <ability-main :entries="languages"></ability-main>
  </section>

  <section class="space-4">
    <h3>Tools</h3>
    <ability-main :entries="tools"></ability-main>
  </section>
  <!-- /#abilities -->
</section>
