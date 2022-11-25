export interface IOption {
  option_name: string | number
}

export interface ITechnicalChar {
  car_id: number,
  brand: string,
  model: string,
  productionYear: number,
  body: string
  mileage: number
}

export interface ICar {
  id: number,
  // images: FileList,
  name: string,
  description: string,
  price: number,
  contacts: string,
  technical_characteristics?: ITechnicalChar,
  options?: IOption[],
}
