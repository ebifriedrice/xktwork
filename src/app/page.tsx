'use client'
import Image from "next/image";
import ScrollContainer from "./components/ScrollContainer";
import Navbar from "./components/NavBar";
import LandingPage from "./LandingPage";
import { ReactNode } from "react";
import QualityPage from "./QualityPage";
import ServicesPage from "./ServicesPage";
import ProjectsSection from "./ProjectsPage";
import ContactSection from "./ContactPage";
import FacilitiesSection from "./FacilitiesPage";


interface PageSectionProps {
  child: ReactNode
}

function PageSection({ child }: PageSectionProps) {
  return (
    <div className="h-screen snap-start">
      {child}
    </div>);
}

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollContainer>
        <PageSection child={<LandingPage />} />,
        <PageSection child={<QualityPage />} />,
        <PageSection child={<ServicesPage />} />,
        <PageSection child={<ProjectsSection />} />,
        <PageSection child={<FacilitiesSection />} />,
        <PageSection child={<ContactSection />} />
      </ScrollContainer>

    </div>);
}