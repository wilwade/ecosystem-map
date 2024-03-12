export interface Web {
  logo: string;
  site: string;
  twitter: string;
}

export interface Readiness {
  technology: string;
  business: string;
}

export interface MetricsData {
  date: Date;
  value: number;
}

export interface Metrics {
  twitter: MetricsData[];
  youtube: MetricsData[];
  github: MetricsData[];
  blog: MetricsData[];
  app_downloads: MetricsData[];
}

export interface ProjectInfo {
  name: string;
  description: string;
  category: string[];
  target_audience: string[];
  layer: string[];
  web: Web;
  metrics: Metrics;
  readiness: Readiness;
}

export interface IFilters {
  layer: {
    [key: string]: boolean;
  };
  category: {
    [key: string]: boolean;
  };
  target_audience: {
    [key: string]: boolean;
  };
}

export type TCategory = keyof IFilters;

export interface IColorMap {
  [key: string]: string;
}
