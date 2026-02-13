const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'picobot';
pres.title = 'Latest Scientific Research Progress - Feb 2026';

// Define Colors
const TEAL = "028090";
const SEAFOAM = "00A896";
const MINT = "02C39A";
const OFFWHITE = "F2F2F2";
const DARK_NAVY = "1E293B";

// Helper for shadow
const makeShadow = () => ({ type: "outer", blur: 6, offset: 2, color: "000000", opacity: 0.15 });

// --- Title Slide ---
let slide1 = pres.addSlide();
slide1.background = { color: DARK_NAVY };
slide1.addText("LATEST SCIENTIFIC\nRESEARCH PROGRESS", {
    x: 1, y: 1.5, w: 8, h: 2,
    fontSize: 48, bold: true, color: "FFFFFF", align: "left", valign: "middle",
    breakLine: true
});
slide1.addText("February 13, 2026", {
    x: 1, y: 3.5, w: 8, h: 0.5,
    fontSize: 24, color: MINT, align: "left"
});
slide1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.2, h: 5.625, fill: { color: TEAL }
});

// --- Slide 2: GLP-1 Drugs ---
let slide2 = pres.addSlide();
slide2.background = { color: OFFWHITE };
slide2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 0.8, fill: { color: TEAL } });
slide2.addText("Medicine: GLP-1 Drugs & WHO Review", {
    x: 0.7, y: 0.3, w: 8.6, h: 0.8,
    fontSize: 32, bold: true, color: "FFFFFF", valign: "middle"
});

slide2.addText([
    { text: "WHO-commissioned reviews (Feb 2026) confirm high efficacy of GLP-1 agonists.", options: { bullet: true, breakLine: true } },
    { text: "Key medications: Tirzepatide (Mounjaro, Zepbound) and Semaglutide (Ozempic, Wegovy).", options: { bullet: true, breakLine: true, indentLevel: 1 } },
    { text: "Proven benefits for weight management and metabolic health across diverse global populations.", options: { bullet: true, breakLine: true } },
    { text: "Recent focus on long-term safety and expanded access in developing regions.", options: { bullet: true } }
], { x: 0.7, y: 1.5, w: 8.6, h: 3.5, fontSize: 18, color: DARK_NAVY });

// --- Slide 3: Migraine treatment ---
let slide3 = pres.addSlide();
slide3.background = { color: OFFWHITE };
slide3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 0.8, fill: { color: SEAFOAM } });
slide3.addText("Neurology: Migraine Care for Youth", {
    x: 0.7, y: 0.3, w: 8.6, h: 0.8,
    fontSize: 32, bold: true, color: "FFFFFF", valign: "middle"
});

slide3.addText([
    { text: "Fremanezumab trials show success in children and adolescents.", options: { bullet: true, breakLine: true } },
    { text: "Effective in reducing the frequency of episodic migraine attacks.", options: { bullet: true, breakLine: true } },
    { text: "Significant improvement in quality of life and school attendance reported.", options: { bullet: true, breakLine: true } },
    { text: "Breakthrough in pediatric neurology as safe preventative options expand.", options: { bullet: true } }
], { x: 0.7, y: 1.5, w: 8.6, h: 3.5, fontSize: 18, color: DARK_NAVY });

// --- Slide 4: Epigenetic Clocks ---
let slide4 = pres.addSlide();
slide4.background = { color: OFFWHITE };
slide4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 0.8, fill: { color: MINT } });
slide4.addText("Biotech: Epigenetic Clocks & Aging", {
    x: 0.7, y: 0.3, w: 8.6, h: 0.8,
    fontSize: 32, bold: true, color: "FFFFFF", valign: "middle"
});

slide4.addText([
    { text: "2026: Shift toward larger clinical trials for aging biomarkers.", options: { bullet: true, breakLine: true } },
    { text: "Testing how epigenetic clocks respond to medical and lifestyle interventions.", options: { bullet: true, breakLine: true } },
    { text: "Goal: Develop objective measures to quantify 'biological age' vs. chronological age.", options: { bullet: true, breakLine: true } },
    { text: "Personalized longevity medicine is becoming a research priority.", options: { bullet: true } }
], { x: 0.7, y: 1.5, w: 8.6, h: 3.5, fontSize: 18, color: DARK_NAVY });

// --- Slide 5: Lunar Missions ---
let slide5 = pres.addSlide();
slide5.background = { color: OFFWHITE };
slide5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 0.8, fill: { color: DARK_NAVY } });
slide5.addText("Space: The 2026 Lunar Push", {
    x: 0.7, y: 0.3, w: 8.6, h: 0.8,
    fontSize: 32, bold: true, color: "FFFFFF", valign: "middle"
});

slide5.addText([
    { text: "SpaceX Starship: Ongoing test flights preparing for human lunar landings.", options: { bullet: true, breakLine: true } },
    { text: "Firefly Aerospace: Deploying lunar satellites for the ESA.", options: { bullet: true, breakLine: true } },
    { text: "Missions focused on the far side of the moon and lunar resource mapping.", options: { bullet: true, breakLine: true } },
    { text: "Infrastructure development for long-term lunar presence (Artemis support).", options: { bullet: true } }
], { x: 0.7, y: 1.5, w: 8.6, h: 3.5, fontSize: 18, color: DARK_NAVY });

// --- Slide 6: Emerging Trends ---
let slide6 = pres.addSlide();
slide6.background = { color: OFFWHITE };
slide6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 0.8, fill: { color: TEAL } });
slide6.addText("2026: Emerging Trends & Outlook", {
    x: 0.7, y: 0.3, w: 8.6, h: 0.8,
    fontSize: 32, bold: true, color: "FFFFFF", valign: "middle"
});

slide6.addText([
    { text: "Smart Agriculture: AI-driven crop optimization and water management.", options: { bullet: true, breakLine: true } },
    { text: "Renewable Energy: Breakthroughs in high-capacity solid-state batteries.", options: { bullet: true, breakLine: true } },
    { text: "Personalized Medicine: mRNA vaccines expanding beyond COVID to oncology.", options: { bullet: true, breakLine: true } },
    { text: "Global Collaboration: Increased focus on open-access research data.", options: { bullet: true } }
], { x: 0.7, y: 1.5, w: 8.6, h: 3.5, fontSize: 18, color: DARK_NAVY });

pres.writeFile({ fileName: "Science_Research_2026.pptx" });
