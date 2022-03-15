<template>
  <div>
    <TheTitle>About Me</TheTitle>
    <section id="introduction">
      <h2 class="visually-hidden">Introduction</h2>
      <div class="row">
        <div class="col">
          <p class="fs-4 lead">
            Hey there! I am Manuel Henke, {{ currentAge }} years old and from
            the heart of Germany, Berlin. At the moment I'm in the final phase
            of my master studies in Information Systems Management. On the side
            I'm still working as a working student as a fullstack software
            developer. Privately, I'm just starting to get involved in open
            source development and have already started some small projects,
            which are showcased on this website.
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
          class="row row-cols-1 row-cols-sm-2 gy-3"
        >
          <div v-for="entry of ability.entries" :key="entry.name" class="col">
            {{ entry.name }}
            <div class="stars">
              <span
                v-for="index in Math.min(entry.stars, 5)"
                :key="index"
                class="star-filled"
              >
                <i class="bi bi-code"></i>
              </span>
              <span
                v-for="index in 5 - Math.min(entry.stars, 5)"
                :key="index"
                class="star-unfilled"
              >
                <i class="bi bi-code"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
        role: 'Wirtschaftsinformatiok (BSc)',
        place: 'Technische Universität Berlin',
        description:
          'Thesis: Konzeption und Entwicklung eines cloudbasierten Lösungsansatzes zur automatisierten Bewertung der Barrierefreiheit im häuslichen Bereich als iOS-App (1,0)',
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
    abilities: [
      {
        title: 'Skills',
        entries: [
          {
            name: 'JavaScript',
            stars: 5,
          },
          {
            name: 'Java',
            stars: 4,
          },
          {
            name: 'Python',
            stars: 3,
          },
          {
            name: 'Go',
            stars: 1,
          },
        ],
      },
      {
        title: 'Languages',
        entries: [
          {
            name: 'German',
            stars: 5,
          },
          {
            name: 'English',
            stars: 4,
          },
          {
            name: 'Spanish',
            stars: 1,
          },
        ],
      },
      {
        title: 'Tools',
        entries: [
          {
            name: 'VSCode',
            stars: 5,
          },
          {
            name: 'FileZilla',
            stars: 4,
          },
          {
            name: 'Postman',
            stars: 3,
          },
        ],
      },
    ],
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
        content: `Hey there! I am Manuel Henke, ${currentAge()} years old and from the heart of Germany, Berlin. At the moment I'm in the final phase of my master studies in Information Systems Management. On the side I'm still working as a working student as a fullstack software developer. Privately, I'm just starting to get involved in open source development and have already started a small project.`,
      },
    ],
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
#abilities {
  .stars {
    display: flex;
    gap: 5px;

    > * {
      border: 1px solid #139187;
      border-radius: 100%;
      height: 40px;
      width: 40px;
      display: flex;
      place-content: center;
      place-items: center;
      font-size: 25px;
      line-height: 1;
    }
    .star-filled {
      background: #139187;
      color: white;
    }
  }
}
</style>
