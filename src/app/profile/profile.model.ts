export interface Profile {
  id: string
  name: string
  userName: string
  category: string
  hourCost: string
  celphone: string
  imageProfile: string
  about?: string
  businessHours: string
  paymentForm: string
  cityPlace: string
  attributes: {
    age: string
    colorHair: string
    colorEye: string
    bust: string
    waist: string
    hip: string
    heigth: string
    weigth: string
    feet: string
  }
  services: [

    {
      name: string,
      accept: string
    }

  ]

  //albuns: []
  alllinks: [
    {
      socialMedia: string,
      socialUser: string
    }
  ]

}