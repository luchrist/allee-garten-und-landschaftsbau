export interface GalleryItem {
  src: string;
  alt: string;
}

// Curated for the gallery layout: a finished showcase first, followed by a
// varied mix of work in progress, detail work and specialist services.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/projekte/gabionenzaun-mit-integrierten-paneelen-01.jpg",
    alt: "Gabionenzaun mit dunklen Paneelen auf Natursteinsockel entlang einer gepflasterten Einfahrt"
  },
  {
    src: "/assets/acquisition/details/gepflasterte-flache-im-fischgratmuster-01.jpg",
    alt: "Neu gepflasterte Fläche im Fischgrätmuster mit Kantenstein neben Rasen und Doppelstabmattenzaun"
  },
  {
    src: "/assets/acquisition/baustellen/stutzmauer-im-bau-01.jpg",
    alt: "Stützmauer aus Betonblocksteinen im Bau an einem Hang mit ausgehobenem Erdreich"
  }
];
