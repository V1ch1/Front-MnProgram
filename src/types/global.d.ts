declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag?: (...args: [string, string, GtagConfig?]) => void;
  }
}

export {};
