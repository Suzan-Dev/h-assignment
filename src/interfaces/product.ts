export interface ProductCardProps {
  name: string;
  image_url: string;
  tagline: string;
  description: string;
  ingredients: Ingredients;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

interface Hop {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
}

interface Malt {
  name: string;
  amount: Volume;
}

interface Method {
  mash_temp: Mashtemp[];
  fermentation: Fermentation;
  twist?: string;
}

interface Fermentation {
  temp: Volume;
}

interface Mashtemp {
  temp: Volume;
  duration?: number;
}

interface Volume {
  value: number;
  unit: string;
}
