import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/portfolio/content';
export const Route = createFileRoute('/projects')({
 head: () => ({meta:[{title:'Projects | Lakshita Rathore'},{name:'description',content:'Discover the project ideas Lakshita Rathore is looking forward to exploring.'},{property:'og:title',content:'Projects | Lakshita Rathore'},{property:'og:description',content:'Discover the project ideas Lakshita Rathore is looking forward to exploring.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <ContentPage page="projects"/>;}
