export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "gabionenzaun-mit-tor",
    title: "Gabionenzaun mit Paneelen und Tor",
    ort: "Mannheim",
    leistung: "Zaun & Sichtschutz",
    text: "Das Grundstück liegt höher als die Straße, deshalb steht die Anlage auf einem Sockel aus Natursteinquadern. Darauf wechseln sich mit Bruchstein gefüllte Gabionen und anthrazitfarbene Paneele ab, ergänzt um Einfahrtstor und Gartentür. Die Pflasterfläche dahinter wurde im selben Zug angeschlossen.",
    afterImage: "/assets/acquisition/projekte/moderner-zaun-mit-gabionen-und-pflasterung-01.jpg",
    alt: "Gabionenzaun mit anthrazitfarbenen Paneelen, Einfahrtstor und Gartentür auf einem Natursteinsockel"
  },
  {
    id: "terrasse-fischgrat",
    title: "Kompakte Terrasse im Fischgrätverband",
    ort: "Mannheim",
    leistung: "Terrassenbau",
    text: "Ein abgegrenzter Sitzplatz am Haus, verlegt im Fischgrätverband aus hellem Betonstein. Der Randabschluss aus Kantensteinen fängt den Höhenunterschied zum Rasen ab, der Anschluss an den Weg erfolgt über Rasengittersteine. Auch kleine Flächen bekommen den vollen Unterbau.",
    afterImage: "/assets/acquisition/projekte/gepflasterte-terrasse-im-garten-01.jpg",
    alt: "Kompakte Terrasse aus hellem Betonpflaster im Fischgrätverband mit Kantenstein und angrenzendem Rasen"
  },
  {
    id: "eingang-rasenfugen",
    title: "Einfahrt und Hauszugang mit Rasenfugen",
    ort: "Mannheim",
    leistung: "Pflasterarbeiten",
    text: "Zwischen Garagentor und Haustür trennen Rasenstreifen die Pflasterbänder, statt die ganze Fläche zu versiegeln. Die Bänder nehmen die Laufwege auf, das Wasser versickert dazwischen. Die Einfahrt davor wurde an den Bestand angearbeitet.",
    afterImage: "/assets/acquisition/details/gepflasterter-eingangsbereich-mit-rasenfugen-01.jpg",
    alt: "Gepflasterter Hauszugang mit Rasenfugen zwischen den Pflasterbändern vor Garagentor und Haustür"
  }
];
