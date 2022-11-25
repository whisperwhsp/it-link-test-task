export interface IFilter {
  brand: string,
  model: string,
  productionYear: string,
  body: string,
  mileage: {
    min: string,
    max: string,
  }
  price: {
    min: string,
    max: string,
  }
}