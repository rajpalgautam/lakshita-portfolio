import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/portfolio/content';
export const Route = createFileRoute('/about')({
 head: () => ({meta:[{title:'About | Lakshita Rathore'},{name:'description',content:'Meet Lakshita Rathore, a curious first-year BTech Computer Science & Engineering student.'},{property:'og:title',content:'About | Lakshita Rathore'},{property:'og:description',content:'Meet Lakshita Rathore, a curious first-year BTech Computer Science & Engineering student.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <ContentPage page="about"/>;}
