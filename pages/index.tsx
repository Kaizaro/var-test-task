import {Suspense, lazy} from 'react';

export default function Home() {
  const TitlePageContent = lazy(() => import('../src/modules/title/page/titlePage'));
  const ServicePageContent = lazy(() => import('../src/modules/service/page/ServicesPage'));
  const NewsPageContent = lazy(() => import('../src/modules/news/page/NewsPage'));
  const ContactsPageContent = lazy(() => import('../src/modules/contacts/page/ContactsPage'));
  const FooterPageContent = lazy(() => import('../src/modules/footerPage/page/FooterPage'));

  return (
    <main className="flex flex-col w-[100%]">
      <script src="http://localhost:8097" async />
      <Suspense>
        <TitlePageContent />
      </Suspense>
      <Suspense>
        <ServicePageContent />
      </Suspense>
      <Suspense>
        <NewsPageContent />
      </Suspense>
      <Suspense>
        <ContactsPageContent />
      </Suspense>
      <Suspense>
        <FooterPageContent />
      </Suspense>
    </main>
  );
}
