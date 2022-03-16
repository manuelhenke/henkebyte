<template>
  <div>
    <TheTitle>About Me</TheTitle>
    <section id="introduction">
      <h2 class="visually-hidden">Introduction</h2>
      <div class="row">
        <div class="col">
          <p class="fs-4 lead">
            Hey there! I am Manuel Henke, {{ currentAge }} years old and from
            the heart of Berlin, Germany. At the moment I'm in the final phase
            of my master studies in Information Systems Management. I also work
            as a student trainee in software development in the area of web
            development and cloud computing. Privately I'm just starting to get
            involved with open source development and have already started some
            small projects which are presented on this website.
          </p>
        </div>
        <div class="col-12 col-sm-4 col-md-4 col-lg-3 text-center">
          <img
            src="~/assets/images/manuel-henke.jpg"
            class="img-fluid rounded-circle"
            alt="Picture of Manuel Henke"
          />
        </div>
      </div>
    </section>

    <section id="experience" class="my-5">
      <h2>Education</h2>
      <TimelineMain :timeline-items="educationTimeLineItems" unique-timeline />
    </section>

    <section id="experience" class="my-5">
      <h2>Experience</h2>
      <TimelineMain :timeline-items="experienceTimeLineItems" unique-timeline />
    </section>

    <section id="abilities">
      <h2>Abilities</h2>
      <div v-for="ability of abilities" :key="ability.title" class="my-4">
        <h3>{{ ability.title }}</h3>
        <div
          v-if="Array.isArray(ability.entries)"
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3"
        >
          <div
            v-for="entry of sortByStars(ability.entries)"
            :key="entry.name"
            class="col"
          >
            <AbilityElement :entry="entry" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import abilities from '~/data/abilities.json'

function currentAge() {
  const birthday = new Date(1996, 11, 6)
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getFullYear() - 1970)
}

export default {
  name: 'AboutMePage',
  layout: 'default-centered',
  data: () => ({
    currentAge: currentAge(),
    educationTimeLineItems: [
      {
        from: new Date(2020, 9),
        to: 'today',
        role: 'Information Systems Management (MSc)',
        place: 'Technische Universität Berlin',
        description: 'Thesis: ...',
      },
      {
        from: new Date(2016, 9),
        to: new Date(2020, 8),
        role: 'Wirtschaftsinformatik (BSc)',
        place: 'Technische Universität Berlin',
        description:
          'Thesis: Design and development of a cloud-based solution approach for automated home accessibility assessment as an iOS app',
      },
    ],
    experienceTimeLineItems: [
      {
        from: new Date(2019, 12),
        to: 'today',
        role: 'Cloud Fullstack-Developer (Student Employee)',
        place: 'OEV Online Dienste GmbH - ein Unternehmen der S-Finanzgruppe',
        description:
          'Designing, developing, and managing applications in the cloud, including a WordPress webpage, an Alexa Skill, and a custom DXP. For some of these projects, I am in touch with the stakeholders.',
      },
      {
        from: new Date(2018, 6),
        to: new Date(2019, 11),
        role: 'Software Developer (Student Employee)',
        place: 'Versicherungskammer Bayern',
        description:
          'Developing applications mainly using PHP and Java for the backend and the common frontend web technologies as well as the frontend libraries Bootstrap and jQuery.',
      },
    ],
    abilities,
  }),
  head: {
    title: 'About Me - HenkeByte',
    meta: [
      {
        hid: 'title',
        name: 'title',
        property: 'og:title',
        content: 'About Me - HenkeByte',
      },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content: `Hey there! I am Manuel Henke, ${currentAge()} years old and from the heart of Berlin, Germany. At the moment I'm in the final phase of my master studies in Information Systems Management. I also work as a student trainee in software development in the area of web development and cloud computing. Privately I'm just starting to get involved with open source development and have already started some small projects which are presented on this website.`,
      },
    ],
  },
  methods: {
    sortByStars(entries) {
      return Array.from(entries).sort((e1, e2) => e2.stars - e1.stars)
    },
  },
}
</script>

<style lang="scss" scoped>
#introduction {
  img {
    width: 100%;
    @media (max-width: 576px) {
      width: 200px;
    }
  }
}
</style>
