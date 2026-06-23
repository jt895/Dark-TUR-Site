import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { HowWeWork } from "./pages/HowWeWork";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { WhyIndependent } from "./pages/WhyIndependent";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "how-we-work", Component: HowWeWork },
      { path: "services", Component: Services },
      { path: "case-studies", Component: CaseStudies },
      { path: "case-studies/:id", Component: CaseStudyDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "why-independent", Component: WhyIndependent },
      { path: "*", Component: NotFound },
    ],
  },
]);
