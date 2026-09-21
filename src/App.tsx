import { lazy, Suspense } from "react";
import { Header, Footer } from "./components/Shell";
import { services, projects } from "./data/content";
import * as Pages from "./pages";
const Assistant = lazy(() => import("./components/Assistant"));
export default function App({ path }: { path: string }) {
  const service = services.find((s) => path === "/services/" + s.slug);
  const project = projects.find((p) => path === "/realisations/" + p.slug);
  const pages: Record<string, React.ComponentType> = {
    "/": Pages.Home,
    "/services": Pages.Services,
    "/realisations": Pages.Realisations,
    "/a-propos": Pages.About,
    "/atelier": Pages.Atelier,
    "/sinistres-assurances": Pages.Insurance,
    "/avis": Pages.Reviews,
    "/faq": Pages.FAQPage,
    "/contact": Pages.Contact,
    "/devis": Pages.QuotePage,
    "/mentions-legales": Pages.Legal,
  };
  const Page = pages[path] || Pages.NotFound;
  return (
    <>
      <Header path={path} />
      <main id="main">
        {service ? (
          <Pages.ServicePage service={service} />
        ) : project ? (
          <Pages.ProjectPage project={project} />
        ) : (
          <Page />
        )}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <Assistant />
      </Suspense>
    </>
  );
}
