import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/portfolio/content';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
 {title:'Lakshita Rathore | CSE Student & Curious Explorer'},
 {name:'description',content:'Explore Lakshita Rathore’s journey as a first-year BTech CSE student, her skills, education, and future projects.'},
 {property:'og:title',content:'Lakshita Rathore | Personal Portfolio'},
 {property:'og:description',content:'A first-year CSE student exploring code, mathematics, and infinite possibilities.'},
 {property:'og:type',content:'website'},
 {name:'twitter:card',content:'summary_large_image'},
 ]}), component: HomePage,
});
