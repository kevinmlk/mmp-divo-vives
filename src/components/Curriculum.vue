<template>
  <div class="curriculum-container">
    <!-- Fase 1 -->
    <div class="curriculum-fase">
      <h4>Fase 1</h4>
      <!-- Semester 1 -->
      <div class="curriculum-semester">
        <h5>Semester 1</h5>
        <div class="subject" @click="toggleDescription" v-for="subject, index in subjectsFirstYearSemesterOne(1, 1)"
          :key="index">
          <div class="subject-info">
            <span class="subject-name">{{ subject.name }}</span>
            <span class="subject-studypoints">{{ subject.studyPoints }}</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron-icon chevron-padding"></font-awesome-icon>
          </div>
          <p class="subject-description">{{ subject.description }}</p>
        </div>
      </div>
      <!-- Semester 1 -->
      <div class="curriculum-semester">
        <h5>Semester 2</h5>
        <div class="subject" @click="toggleDescription" v-for="subject, index in subjectsFirstYearSemesterOne(1, 2)"
          :key="index">
          <div class="subject-info">
            <span class="subject-name">{{ subject.name }}</span>
            <span class="subject-studypoints">{{ subject.studyPoints }}</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron-icon chevron-padding"></font-awesome-icon>
          </div>
          <p ref="description" class="subject-description">{{ subject.description }}</p>
        </div>
      </div>
    </div>
    <!-- Fase 2 -->
    <div class="curriculum-fase">
      <h4 class="subject-padding">Fase 2</h4>
      <!-- Semester 1 -->
      <div class="curriculum-semester">
        <h5>Semester 1</h5>
        <div class="subject subject-padding" @click="toggleDescription"
          v-for="subject, index in subjectsFirstYearSemesterOne(2, 1)" :key="index">
          <div class="subject-info">
            <span class="subject-name">{{ subject.name }}</span>
            <span class="subject-studypoints">{{ subject.studyPoints }}</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron-icon"></font-awesome-icon>
          </div>
          <p class="subject-description">{{ subject.description }}</p>
        </div>
      </div>
      <!-- Semester 2 -->
      <div class="curriculum-semester">
        <h5>Semester 2</h5>
        <div class="subject subject-padding" @click="toggleDescription"
          v-for="subject, index in subjectsFirstYearSemesterOne(2, 2)" :key="index">
          <div class="subject-info">
            <span class="subject-name">{{ subject.name }}</span>
            <span class="subject-studypoints">{{ subject.studyPoints }}</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron-icon"></font-awesome-icon>
          </div>
          <p class="subject-description">{{ subject.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// Import data
import { subjects } from '@/data/data';

// Function that filters the data based on the fase and semester
const subjectsFirstYearSemesterOne = (fase: number, semester: number) => {
  return subjects.filter(subjectFase => subjectFase.fase === fase && subjectFase.semester === semester);
};

const toggleDescription = (e: any) => {
  e.target.closest('.subject').lastChild.classList.toggle('description-show');
};

// const subjectsFirstYearSemesterOne: Subject[] = subjects.filter(subjects.fase = 1);

</script>
<style lang="scss">
.curriculum-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin-top: 2.5rem;

  .curriculum-fase {
    // width: 500px;

    &:first-child {
      border-right: 2px solid $theme-black;
    }

    h4 {
      font-size: 1.5em;
      font-weight: 500;
      margin-bottom: 1.5rem;
      padding-top: .5rem;
    }

    .curriculum-semester {
      font-family: $font-barlow;
      letter-spacing: 1.25px;

      h5 {
        text-align: right;
        background-color: $theme-black;
        color: $theme-beige;
        text-transform: uppercase;
        padding: .5rem 4rem .5rem 0;
        margin-bottom: .75rem;
      }

      .subject {
        font-weight: 300;

        .subject-info {
          display: grid;
          grid-template-columns: 5fr 1fr 1fr;
          padding: .75rem 0;
          text-transform: uppercase;

          .subject-studypoints {
            justify-self: end;
          }

        }

        &:last-child {
          margin-bottom: 1rem;
        }

        .chevron-icon {
          color: $theme-black;
          font-size: .75em;
          justify-self: end;

        }

        .chevron-padding {
          padding-right: 1.5rem;
        }

        .subject-description {
          display: none;
        }

        .description-show {
          display: block;
          width: 100%;
          font-family: $font-barlow;
          text-align: left;
          border-top: 1px solid $theme-black;
          padding: .5rem 0;
        }
      }
    }

    .subject:hover {
      cursor: pointer;
    }
  }

  .subject-padding {
    padding-left: 1.5rem;
  }
}
</style>