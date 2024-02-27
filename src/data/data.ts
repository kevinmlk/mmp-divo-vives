// Import type interface
import type { Project, ProjectExplanation, ProjectProces, Subject } from '@/types';

// Import image
import aquaWater from '@/assets/images/aqua-water-thumb.jpg';
import superEcommerce from '@/assets/images/super-ecommerce-thumb.jpg';
import theOrdinary from '@/assets/images/ordinary-thumb.jpg';
import billingApp from '@/assets/images/billing-app-thumb.jpg';
import pepsiCola from '@/assets/images/pepsi-cola-thumb.jpg';
import craftHugo from '@/assets/images/craft-hugo-thumb.jpg';
import stockMarket from '@/assets/images/stock-market-thumb.jpg';
import tiny from '@/assets/images/tiny-bogaerts.jpg';
import branding from '@/assets/images/branding.jpg';
import design from '@/assets/images/design.jpg';
// Result images
import resultImage1 from '@/assets/images/case-image-1.jpg';
import resultImage2 from '@/assets/images/case-image-2.jpg';
import resultImage3 from '@/assets/images/case-image-3.jpg';
import resultImage4 from '@/assets/images/case-image-4.jpg';
import resultImage5 from '@/assets/images/case-image-5.jpg';
import resultImage6 from '@/assets/images/case-image-6.jpg';

// Process data
const processenData: ProjectProces[] = [
  {
    title: 'Uitdaging',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Oplossing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Resultaat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

// Explanation data
const explanationData: ProjectExplanation[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    media: branding,
    imageLeft: true,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    media: design,
  },
];

// Results data
const resultsImagesData: string[] = [resultImage1, resultImage2, resultImage3, resultImage5, resultImage6, resultImage4];

// Students data
const studentsData: string[] = ['Lean valcke', 'Brecht Sinaeve', 'Tin Duong', 'Mergim Topollaj'];

// Project thumb data
export const projects: Project[] = [
  {
    url: 'aqua-carpatica',
    title: 'Aqua carpatica',
    intro: 'Van minimalistisch tot gedurfd, deze merkconcepten vieren de zuiverheid en duurzaamheid van water.',
    subjects: ['Photo Editing II', 'Photography', 'Graphic Design I'],
    image: aquaWater,
    description: {
      subjects: ['Photo Editing II', 'Photography', 'Graphic Design I'],
      title: 'Waterfles branding',
      text: 'Door creatieve experimenten en innovatief design hebben deze studenten een reeks in het oog springende merkconcepten ontwikkeld die de schoonheid, zuiverheid en duurzaamheid van water vieren.',
      media: aquaWater,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms: ['Photoshop', 'Lightroom'],
    students: studentsData,
  },
  {
    url: 'merch-webshop',
    title: 'Merchandise webshop',
    intro: 'De ultieme bestemming voor VIVES merchandise!.',
    subjects: ['Webdesign II', 'Photography', 'Digital Marketing'],
    image: superEcommerce,
    description: {
      subjects: ['Webdesign II', 'Photography', 'Digital Marketing'],
      title: 'VIVES merchandise',
      text: 'Van gezellige hoodies tot stijlvolle shirts, onze collectie college merch heeft een breed scala aan stijlen en ontwerpen, elk geïnspireerd door de levendige geest en tradities van het studentenleven.',
      media: superEcommerce,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms:['WordPress', 'Lightroom'],
    students:studentsData,
  },
  {
    url: 'the-ordinary',
    title: 'The ordinary colours',
    intro: 'Enkele tweedejaars studenten hebben als project de branding gedaan voor een skincare product.',
    subjects: ['Graphic Design I', 'Illustrations & Graphics', 'Photography', 'Photo Editing II'],
    image: theOrdinary,
    description: {
      subjects: ['Graphic Design I', 'Illustrations & Graphics', 'Photography', 'Photo Editing II'],
      title: 'Skincare branding',
      text: 'The Ordinary Colours is een skincare bedrijf die skincare producten verkoopt. Onze studenten hebben voor dit bedrijf een volledige en moderne huisstijl gemaakt met een nieuw logo en branding.',
      media: theOrdinary,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms:['Photoshop', 'Illustrator', 'Photoshop', 'Lightroom'],
    students: studentsData,
  },
  {
    url: 'facturatie-app',
    title: 'Facturatie app',
    intro: 'Geavanceerde factureringsapplicatie mockup & prototype.',
    subjects: ['Design Thinking', 'Graphic Design I', 'User Experience II'],
    image: billingApp,
    description: {
      subjects: ['Design Thinking', 'Graphic Design I', 'User Experience II'],
      title: 'Factuur applicatie',
      text: 'Onze applicatie heeft een gebruiksvriendelijke en efficiënte manier om uw factureringsbehoeften te beheren, met een strakke en moderne interface die gemakkelijk te navigeren is.',
      media: billingApp,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms:['Illustrator', 'Xd'],
    students:studentsData,
  },
  {
    url: 'pepsi-cola',
    title: 'Pepsi cola redesign',
    intro: 'Pepsi Cola, een gedurfde en innovatieve reimagining van het iconische frisdrankmerk.',
    subjects: ['Design Thinking', 'Graphic Design I', 'Illustrations & Graphics', 'Photo Editing II'],
    image: pepsiCola,
    description: {
      subjects: ['Design Thinking', 'Graphic Design I', 'Illustrations & Graphics', 'Photo Editing II'],
      title: 'Pepsi Cola',
      text: 'Door middel van uitgebreid onderzoek en creatieve experimenten hebben onze studenten een reeks verbluffende nieuwe merkconcepten ontwikkeld die een eerbetoon zijn aan de rijke geschiedenis van Pepsi.',
      media: pepsiCola,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms:['Illustrator', 'Lightroom', 'Photoshop'],
    students:studentsData,
  },
  {
    url: 'craft-hugo',
    title: 'Craft Hugo branding',
    intro: 'Een spannende verkenning van de wereld van ambachtelijke dranken.',
    subjects: ['Graphic Design I', 'Illustrations & Graphics', 'Photo Editing II', 'Photography'],
    image: craftHugo,
    description: {
      subjects: ['Graphic Design I', 'Illustrations & Graphics', 'Photo Editing II', 'Photography'],
      title: 'Craft Hugo Wine & Beer',
      text: 'Met een passie voor de kunst van het brouwen en wijnmaken hebben onze studenten een reeks boeiende merkconcepten ontwikkeld die de unieke smaken en persoonlijkheden van elke drank vieren.',
      media: craftHugo,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms:['Illustrator', 'Photoshop', 'Lightroom'],
    students:studentsData,
  },
  {
    url: 'aandelen-beurs-app',
    title: 'Aandelen beurs app',
    intro: 'Een geavanceerde visuele verkenning van de wereld van de aandelenhandel.',
    subjects: ['Design Thinking', 'Graphic Design I', 'User Experience II'],
    image: stockMarket,
    description: {
      subjects: ['Design Thinking', 'Graphic Design I', 'User Experience II'],
      title: 'Aandelen beurs app',
      text: 'Onze studenten hebben een slanke en intuïtieve interface ontwikkeld die de complexiteit van de aandelenmarkt vereenvoudigt, waardoor het voor iedereen gemakkelijk is om met vertrouwen te beleggen en te handelen.',
      media: stockMarket,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms: ['Illustrator', 'Xd'],
    students: studentsData,
  },
  {
    url: 'tiny-bogaerts',
    title: 'Tiny Bogaerts',
    intro: '',
    subjects: ['Graphic Design III', 'Desktop Publishing', 'Photo Editing II'],
    image: tiny,
    description: {
      subjects: ['Graphic Design III', 'Illustrations & Graphics', 'Photography'],
      title: 'Branding Tiny Bogaerts',
      text: 'The Ordinary Colours is een skincare bedrijf die skincare producten verkoopt. Onze studenten hebben voor dit bedrijf een volledige en moderne huisstijl gemaakt met een nieuw logo en branding.',
      media: tiny,
    },
    proces: processenData,
    uitwerking: explanationData,
    resultImages: resultsImagesData,
    usedPrograms: ['Illustrator', 'Indesign', 'Photoshop'],
    students: studentsData,
  },
];

// Curriculum subjects data
export const subjects: Subject[] = [
  {
    name: 'Voorbereiding Werkplekleren',
    studyPoints: '4SP',
    description: 'In dit OPO word je voorbereid op de eerste contacten met de werkvloer.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Werkplekleren I',
    studyPoints: '8SP',
    description: 'De student is gedurende 7 weken 1 dag per week, gevolgd door 7 weken 2 dagen per week aanwezig op de werkplek en voert activiteiten, gekoppeld aan de OPO\'s van de opleiding, uit.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Werkplekleren II',
    studyPoints: '10SP',
    description: 'De student is gedurende 14 weken 2 dagen per week aanwezig op de werkplek en voert activiteiten, gekoppeld aan de OPO\'s van de opleiding, uit.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Werkplekleren III',
    studyPoints: '18SP',
    description: 'De student is gedurende 14 weken 4 dagen per week aanwezig op de werkplek en voert activiteiten, gekoppeld aan de OPO\'s van de opleiding, uit.',
    fase: 2,
    semester: 2,
  },
  {
    name: 'Graphic Design I',
    studyPoints: '3SP',
    description: 'De gegradueerde creëert aantrekkelijke lay-outs en een gebruiksvriendelijke interface.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Photo Editing I',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je werken met digitale tools van het programma Adobe Photoshop CC.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Illustrations & Graphics',
    studyPoints: '3SP',
    description: 'In dit OPO leert de student werken met verschillende aspecten van het programma Adobe Illustrator CC.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Photography',
    studyPoints: '3SP',
    description: 'In dit OPO leer je fotografische begrippen, technieken en de camera bedienen.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Photo Editing II',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je werken met digitale tools van het programma Adobe Photoshop CC en Adobe Lightroom Classic.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Video: Shooting & Editing',
    studyPoints: '3SP',
    description: 'Tijdens dit opleidingsonderdeel leer je basisbegrippen van audio/video, preproductie, productie en postproductie.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Desktop Publishing',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je werken met digitale tools van het programma Adobe Indesign CC.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Desktop Publishing',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je werken met digitale tools van het programma Adobe Indesign CC.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Graphic Design II',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je kleur, typografie en lay-out toepassen en uitvoeren in digitale ontwerpen.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'User Experience I',
    studyPoints: '3SP',
    description: 'Tijdens dit opleidingsonderdeel leer je kijken door de ogen van een user experience designer en krijg je allerlei tools en technieken aangeleerd die je kan gebruiken voor de creatie, optimalisatie en analyse van nieuwe gebruikerstoepassingen.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'User Experience II',
    studyPoints: '3SP',
    description: 'Tijdens dit opleidingsonderdeel gaan we dieper in op het designproces van nieuwe gebruikerstoepassingen. Hoe maken we onze website of app zo toegankelijk en gebruiksvriendelijk mogelijk? Hoe kan je de eindgebruiker beter converteren?',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Graphic Design III',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je kleur, typografie en lay-out toepassen en uitvoeren in digitale ontwerpen.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Video: Motion & Animation',
    studyPoints: '3SP',
    description: 'Tijdens deze opleiding leer je werken met digitale tools van het programma Adobe After Effects.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Multimedia-projecten',
    studyPoints: '4SP',
    description: 'In multimedia-projecten krijg je één of enkele praktische opdrachten. Er wordt in ateliervorm aan deze opdrachten gewerkt. Je krijgt begeleiding bij het onderzoek, het proces, het ontwikkelen van een kritische reflectie en het ontwerpen van een product.',
    fase: 2,
    semester: 2,
  },
  {
    name: 'Graduaatsproef',
    studyPoints: '4SP',
    description: 'De student stelt zelf een project voor of kiest een bestaand project. Tijdens dit project verdiept de student zch in reeds gekende programma\'s, technieken en/of media EN/OF leert de student nieuwe of nog niet gekende programma\'s, technieken en/of media kennen.',
    fase: 2,
    semester: 2,
  },
  {
    name: 'Webdesign I',
    studyPoints: '3SP',
    description: 'De student zal in staat zijn een mooi vormgegeven website te bouwen met html en css.',
    fase: 1,
    semester: 1,
  },
  {
    name: 'Webdesign II',
    studyPoints: '3SP',
    description: 'Het inzetten van best practices, inclusief toegankelijkheid en het toepassen van technieken om een website op een mobiel toestel ook goed weer te geven (responsive design).',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Front-end Development I',
    studyPoints: '3SP',
    description: 'Je leert javascript implementeren op een html en CSS draaiende website om interactiviteit toe te voegen.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Front-end Development II',
    studyPoints: '3SP',
    description: 'Je leert javascript implementeren op een html en CSS draaiende website om interactiviteit toe te voegen.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Dynamische Websites',
    studyPoints: '3SP',
    description: 'Introductie in back-end webdevelopment.',
    fase: 2,
    semester: 1,
  },
  {
    name: 'Human Skills I',
    studyPoints: '3SP',
    description: 'Taalzorg, omgaan met een vreemde taal, mondelinge en schriftelijke communicatie.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Digital Marketing',
    studyPoints: '3SP',
    description: 'Sociale media, Google advertising en analytics.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Design Thinking',
    studyPoints: '3SP',
    description: 'Stappen en ritme van een design sprint begrijpen en constructief in interactie leren omgaan, daar waar er om gevraagd wordt.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Human Skills II',
    studyPoints: '3SP',
    description: 'Je leerk constructief en actief samen in een multidisciplinair team werken en hoe je participeert tijdens overlegmomenten.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Voortgangstoets',
    studyPoints: '3SP',
    description: 'De voortgangstoets beoordeelt de verworven kennis gedurende de opleiding. De toets is gericht op het meten van de noodzakelijke parate kennis voor de opleiding creative digital design.',
    fase: 1,
    semester: 2,
  },
  {
    name: 'Legal & Security Skills',
    studyPoints: '3SP',
    description: 'GDPR, fundamenten van internet security, verschillende manieren van versleuteling en je verkent de verschillende gevaren van het internet.',
    fase: 2,
    semester: 1,
  },
];