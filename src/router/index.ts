import { createRouter, createWebHistory } from 'vue-router';
// Import pages
import HomeView from '@/views/HomeView.vue';
import OverView from '@/views/OverView.vue';
import ProjectenView from '@/views/projecten/ProjectenView.vue';
import ProjectenDetailsView from '@/views/projecten/ProjectenDetailsView.vue';
import CurriculumView from '@/views/CurriculumView.vue';
import AfstandView from '@/views/AfstandView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/over',
      name: 'over',
      component: OverView,
    },
    {
      path: '/projecten',
      name: 'projecten',
      component: ProjectenView,
    },
    {
      path: '/projecten/:title',
      name: 'projectendetails',
      component: ProjectenDetailsView,
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: CurriculumView,
    },
    {
      path: '/afstand',
      name: 'afstand',
      component: AfstandView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFoundView,
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: 'smooth' });
      }, 250);
    });
  },
});

export default router;
