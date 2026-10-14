import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/portfolio/content';
export const Route = createFileRoute('/education')({
 head: () => ({meta:[{title:'Education | Lakshita Rathore'},{name:'description',content:'Explore Lakshita Rathore’s BTech CSE education and learning journey.'},{property:'og:title',content:'Education | Lakshita Rathore'},{property:'og:description',content:'Explore Lakshita Rathore’s BTech CSE education and learning journey.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <ContentPage page="education"/>;}
