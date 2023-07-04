---
title: About Me
badge_text: ''
meta_tags:
- key: description
  content: Hey there! I am Manuel Henke, 26 years old and from the heart of Berlin,
    Germany. At the moment I'm in the final phase of my master studies in Information
    Systems Management. Privately I'm just starting to
    get involved with open source development and have already started some small
    projects which are presented on this website.
education_timeline_items:
- from: "2020"
  to: "2023"
  role: Information Systems Management (MSc)
  place: Technische Universität Berlin
  description: 'Thesis: Implementation of a use case mapper for CCAM
    based mobility solutions in the platform economy
    framework'
- from: "2016"
  to: "2020"
  role: Wirtschaftsinformatik (BSc)
  place: Technische Universität Berlin
  description: 'Thesis: Design and development of a cloud-based solution approach
    for automated home accessibility assessment as an iOS app'
experience_timeline_items:
- from: "2023"
  to: "today"
  role: Researcher
  place: GT-ARC (Technische Universität Berlin)
  description: Researching future mobility solutions in the context of Cooperative, Connected and Automated Mobility (CCAM) and the platform economy.
- from: "2019"
  to: "2023"
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
  stars: 5
  libraries:
  - name: Vue.js
    stars: 5
    libraries:
    - name: Nuxt.js
      stars: 4
  - name: Node.js
    stars: 5
    libraries: []
  - name: Webpack
    stars: 4
    libraries: []
  - name: jQuery
    stars: 4
    libraries: []
  - name: Storybook
    stars: 4
    libraries: []
  - name: WebComponents
    stars: 4
    libraries: []
  - name: TypeScript
    stars: 4
    libraries: []
  - name: Jest
    stars: 4
    libraries: []
  - name: React
    stars: 5
    libraries: []
  - name: Electron
    stars: 2
    libraries: []
  - name: Angular
    stars: 1
    libraries: []
- name: CSS
  stars: 5
  libraries:
  - name: SCSS
    stars: 5
    libraries: []
  - name: Bootstrap
    stars: 5
    libraries: []
- name: HTML
  stars: 5
  libraries: []
- name: Java
  stars: 4
  libraries:
  - name: Spring
    stars: 4
    libraries: []
  - name: Maven
    stars: 4
    libraries: []
- name: Swift
  stars: 3
  libraries:
  - name: SwiftUI
    stars: 4
    libraries: []
  - name: ARKit
    stars: 2
    libraries: []
- name: PHP
  stars: 3
  libraries:
  - name: Wordpress
    stars: 4
    libraries: []
- name: SQL
  stars: 3
  libraries: []
- name: Python
  stars: 2
  libraries: []
- name: R
  stars: 1
  libraries: []
- name: Go
  stars: 1
  libraries: []
languages:
- name: German
  stars: 5
  libraries: []
- name: English
  stars: 4
  libraries: []
- name: Spanish
  stars: 1
  libraries: []
- name: Binary
  stars: '0'
  libraries: []
tools:
- name: Git
  stars: 5
  libraries: []
- name: VSCode
  stars: 5
  libraries: []
- name: IntelliJ
  stars: 3
  libraries: []
- name: Jira
  stars: 4
  libraries: []
- name: AWS
  stars: 4
  libraries:
  - name: Route 53
    stars: 5
    libraries: []
  - name: IAM
    stars: 5
    libraries: []
  - name: EFS
    stars: 5
    libraries: []
  - name: Rekognition
    stars: 5
    libraries: []
  - name: S3
    stars: 5
    libraries: []
  - name: CloudFront
    stars: 5
    libraries: []
  - name: Lambda
    stars: 4
    libraries: []
  - name: EC2
    stars: 4
    libraries: []
  - name: RDS
    stars: 4
    libraries: []
  - name: CloudFormation
    stars: 4
    libraries: []
  - name: CodePipeline
    stars: 4
    libraries: []
  - name: API Gateway
    stars: 4
    libraries: []
  - name: SNS
    stars: 3
    libraries: []
  - name: Amazon Pinpoint
    stars: 3
    libraries: []
  - name: SES
    stars: 3
    libraries: []
  - name: SQS
    stars: 2
    libraries: []
  - name: EKS
    stars: 2
    libraries: []
- name: Scrum
  stars: 4
  libraries: []
- name: DevOps
  stars: 4
  libraries: []
- name: Confluence
  stars: 4
  libraries: []
- name: Docker
  stars: 3
  libraries:
  - name: Docker Compose
    stars: 5
    libraries: []
- name: Postman
  stars: 3
  libraries: []
- name: Kubernetes
  stars: 3
  libraries:
  - name: Helm
    stars: 3
    libraries: []

---
<section id="introduction">
  <!-- #introduction -->
  <h2 class="visually-hidden">Introduction</h2>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-9">
      <p class="lead">
        Hey there! I am Manuel Henke, 26 years old and from
        the heart of Berlin, Germany. At the moment I'm working as a researcher at the Technische Universität Berlin. Privately I'm just starting to get
        involved with open source development and have already started some
        small projects which are presented on this website.
      </p>
    </div>
    <div class="col-8 col-sm-4 col-md-3">
      <dynamic-image
        src="/images/manuel-henke.jpg"
        class="img-fluid rounded-circle"
        alt="Picture of Manuel Henke"
      />
    </div>
  </div>
  <!-- /#introduction -->
</section>

<section id="experience">
  <!-- #experience -->
  <h2>Experience</h2>
  <timeline-main :timeline-items="experience_timeline_items" unique-timeline /></timeline-main>
  <!-- /#experience -->
</section>

<section id="education">
  <!-- #education -->
  <h2>Education</h2>
  <timeline-main :timeline-items="education_timeline_items" unique-timeline></timeline-main>
  <!-- /#education -->
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
