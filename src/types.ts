/* eslint-disable no-unused-vars */
export interface Project {
  url: string,
  title: string,
  intro: string,
  subjects: SubjectsName[],
  image: string,
  description: ProjectDescription,
  proces: ProjectProces[],
  uitwerking: ProjectExplanation[],
  resultImages: string[],
  usedPrograms: Software[],
  students: string[],
}

export interface Subject {
  name: SubjectsName,
  studyPoints?: string,
  description?: string,
  fase?: number,
  semester?: number,
}

export interface ProjectDescription {
  subjects: SubjectsName[],
  title: string,
  text: string,
  media: string,
}

export interface ProjectProces {
  title: string,
  description: string,
}

export interface ProjectExplanation {
  media: string,
  title: string,
  text: string,
  imageLeft?: boolean,
}

export interface Pillar {
  media: string,
  title: string,
  description: string,
}

export interface Testimonial {
  name: string,
  classOf: string,
  profilePic: string,
  message: string,
}

export interface MediaTextSection {
  subjects?: SubjectsName[],
  title: string,
  text: string,
  link?: string,
  media: string,
  // ? => optioneel
  imageLeft?: boolean,
  onHome?: boolean,
}

// Interface for Jobs on Home & About
export interface Job {
  media: string,
  title: string,
  even?: boolean,
}

// Interface for Marquee slider links
export interface SliderLink {
  title: string,
  link: string,
}

// INterface for campus and integration section
export interface AbstractMediaText {
  title: string,
  subTitle: string,
  text: string,
  link?: string,
  imageOne: string,
  imageTwo: string,
  ImagesLeft: boolean,
}

// Software enum
type Software = 'Photoshop' | 'Illustrator' | 'Indesign' | 'Lightroom' | 'Premiere Pro' | 'Xd' | 'After Effects' | 'WordPress';

// Subjects enum
export type SubjectsName = 'Graphic Design I' | 'Photo Editing I' | 'Illustrations & Graphics' | 'Photography' | 'Photo Editing II' | 'Video: Shooting & Editing' | 'Desktop Publishing' | 'Webdesign I' | 'Voorbereiding Werkplekleren' | 'Graphic Design II' | 'Webdesign II' | 'Front-end Development I' | 'Human Skills I' | 'Digital Marketing' | 'Design Thinking' | 'Human Skills II' | 'Voortgangstoets' | 'Werkplekleren I' | 'User Experience I' | 'User Experience II' | 'Graphic Design III' | 'Video: Motion & Animation' | 'Front-end Development II' | 'Dynamische Websites' | 'Legal & Security Skills' | 'Werkplekleren II' | 'Werkplekleren III' | 'Multimedia-projecten' | 'Graduaatsproef';
