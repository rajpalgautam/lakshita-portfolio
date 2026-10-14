import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/portfolio/content';
export const Route = createFileRoute('/skills')({
 head: () => ({meta:[{title:'Skills | Lakshita Rathore'},{name:'description',content:'Explore Lakshita Rathore’s growing skills in Python, SQL, mathematics, and CSS.'},{property:'og:title',content:'Skills | Lakshita Rathore'},{property:'og:description',content:'Explore Lakshita Rathore’s growing skills in Python, SQL, mathematics, and CSS.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <ContentPage page="skills"/>;}
