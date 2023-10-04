import a from './../images/1.jpeg'
import b from './../images/2.jpeg'
import c from './../images/3.jpeg'
import d from './../images/4.jpeg'
import e from './../images/5.jpeg'
import f from './../images/6.jpeg'
import g from './../images/7.jpeg'
import h from './../images/8.jpeg'
import i from './../images/9.jpeg'
import j from './../images/10.jpeg'
import k from './../images/11.jpeg'
import l from './../images/12.jpeg'
import m from './../images/13.jpeg'
import n from './../images/14.jpeg'
import o from './../images/15.jpeg'
import p from './../images/16.jpeg'
import q from './../images/17.jpeg'
import r from './../images/18.jpeg'
import s from './../images/19.jpeg'
import t from './../images/20.jpeg'
import u from './../images/21.jpeg'
import v from './../images/22.jpeg'
import w from './../images/23.jpeg'
import x from './../images/24.jpeg'
import y from './../images/25.jpeg'
import z from './../images/26.jpeg'
import aa from './../images/27.jpeg'
import ab from './../images/28.jpeg'
import ac from './../images/29.jpeg'
import ad from './../images/30.jpeg'
import ae from './../images/31.jpeg';
import af from './../images/32.jpeg'
import ag from './../images/33.jpeg'
import ah from './../images/34.jpeg'
import ai from './../images/35.jpeg'
import aj from './../images/36.jpeg'
import ak from './../images/37.jpeg'
import al from './../images/38.jpeg'
import am from './../images/39.jpeg'
import an from './../images/40.jpeg'
import ao from './../images/41.jpeg'
import ap from './../images/42.jpeg'
import aq from './../images/43.jpeg'
import ar from './../images/44.jpeg'
import as from './../images/45.jpeg'
import at from './../images/46.jpeg'
import au from './../images/47.jpeg'
import av from './../images/48.jpeg'
import aw from './../images/49.jpeg'
import ax from './../images/50.jpeg'


const CarsData = [
  {
    id: 1,
    name: 'Audi A3',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: a,
    carType: 'Sedan'
  },
  {
    id: 2,
    name: 'BMW X5',
    yearProduced: 2023,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: false,
    price: 32000,
    imageUrl: b,
    carType: 'SUV'
  },
  {
    id: 3,
    name: 'Chevrolet Cruze',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 450,
    automatic: true,
    price: 22000,
    imageUrl: c,
    carType: 'Sedan'
  },
  {
    id: 4,
    name: 'Dodge Charger',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: d,
    carType: 'Sedan'
  },
  {
    id: 5,
    name: 'Ford Mustang',
    yearProduced: 2023,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: false,
    price: 32000,
    imageUrl: e,
    carType: 'Muscle'
  },
  {
    id: 6,
    name: 'Honda Civic',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 450,
    automatic: true,
    price: 22000,
    imageUrl: f,
    carType: 'Sedan'
  },
  {
    id: 7,
    name: 'Hyundai Sonata',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: g,
    carType: 'Sedan'
  },
  {
    id: 8,
    name: 'Kia Sportage',
    yearProduced: 2023,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: false,
    price: 32000,
    imageUrl: h,
    carType: 'SUV'
  },
  {
    id: 9,
    name: 'Lexus RX 350',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 450,
    automatic: true,
    price: 22000,
    imageUrl: i,
    carType: 'SUV'
  },
  {
    id: 10,
    name: 'Mercedes-Benz E-Class',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: j,
    carType: 'Sedan'
  },
  {
    id: 11,
    name: 'Nissan Altima',
    yearProduced: 2023,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: false,
    price: 32000,
    imageUrl: k,
    carType: 'Sedan'
  },
  {
    id: 12,
    name: 'Toyota Camry',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 450,
    automatic: true,
    price: 22000,
    imageUrl: l,
    carType: 'Sedan'
  },
  {
    id: 13,
    name: 'Volkswagen Passat',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: m,
    carType: 'Sedan'
  },
  {
    id: 14,
    name: 'Tesla Model 3',
    yearProduced: 2020,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: true,
    price: 32000,
    imageUrl: n,
    carType: 'Electric'
  },
  {
    id: 15,
    name: 'Subaru Outback',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 450,
    automatic: true,
    price: 22000,
    imageUrl: o,
    carType: 'SUV'
  },
  {
    id: 16,
    name: 'Mazda CX-5',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: p,
    carType: 'SUV'
  },
  {
    id: 17,
    name: 'Jeep Grand Cherokee',
    yearProduced: 2023,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: false,
    price: 32000,
    imageUrl: q,
    carType: 'SUV'
  },
  {
    id: 18,
    name: 'Fiat 500',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 450,
    automatic: true,
    price: 22000,
    imageUrl: r,
    carType: 'Compact'
  },
  {
    id: 19,
    name: 'Dodge Ram',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 400,
    automatic: true,
    price: 25000,
    imageUrl: s,
    carType: 'Truck'
  },
  {
    id: 20,
    name: 'Chrysler Pacifica',
    yearProduced: 2023,
    occupants: 4,
    hybrid: true,
    distanceOnFullTank: 500,
    automatic: false,
    price: 32000,
    imageUrl: t,
    carType: 'Minivan'
  },
  {
    id: 21,
    name: 'Lamborghini Huracan',
    yearProduced: 2021,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 350000,
    imageUrl: u,
    carType: 'Sports'
  },
  {
    id: 22,
    name: 'Ferrari 488 GTB',
    yearProduced: 2022,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 280000,
    imageUrl: v,
    carType: 'Sports'
  },
  {
    id: 23,
    name: 'Porsche 911',
    yearProduced: 2023,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 270000,
    imageUrl: w,
    carType: 'Sports'
  },
  {
    id: 24,
    name: 'McLaren 720S',
    yearProduced: 2021,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 350000,
    imageUrl: x,
    carType: 'Sports'
  },
  {
    id: 25,
    name: 'Bugatti Chiron',
    yearProduced: 2022,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 3000000,
    imageUrl: y,
    carType: 'Exotic'
  },
  {
    id: 26,
    name: 'Aston Martin Vantage',
    yearProduced: 2023,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 250000,
    imageUrl: z,
    carType: 'Exotic'
  },
  {
    id: 27,
    name: 'Rolls-Royce Ghost',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 400000,
    imageUrl: aa,
    carType: 'Luxury'
  },
  {
    id: 28,
    name: 'Lexus LX 570',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 90000,
    imageUrl: ab,
    carType: 'Luxury'
  },
  {
    id: 29,
    name: 'Land Rover Range Rover',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 95000,
    imageUrl: ac,
    carType: 'Luxury'
  },
  {
    id: 30,
    name: 'Toyota Land Cruiser',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 85000,
    imageUrl: ad,
    carType: 'SUV'
  },
  {
    id: 31,
    name: 'Subaru WRX',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 35000,
    imageUrl: ae,
    carType: 'Sedan'
  },
  {
    id: 32,
    name: 'Nissan 370Z',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 30000,
    imageUrl: af,
    carType: 'Sports'
  },
  {
    id: 33,
    name: 'Chevrolet Corvette',
    yearProduced: 2021,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 70000,
    imageUrl: ag,
    carType: 'Sports'
  },
  {
    id: 34,
    name: 'Dodge Challenger',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 45000,
    imageUrl: ah,
    carType: 'Muscle'
  },
  {
    id: 35,
    name: 'Ford F-150',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 40000,
    imageUrl: ai,
    carType: 'Truck'
  },
  {
    id: 36,
    name: 'GMC Sierra',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 45000,
    imageUrl: aj,
    carType: 'Truck'
  },
  {
    id: 37,
    name: 'Honda CR-V',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 35000,
    imageUrl: ak,
    carType: 'SUV'
  },
  {
    id: 38,
    name: 'Jeep Wrangler',
    yearProduced: 2023,
    occupants: 4,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 38000,
    imageUrl: al,
    carType: 'SUV'
  },
  {
    id: 39,
    name: 'Kia Sorento',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 32000,
    imageUrl: am,
    carType: 'SUV'
  },
  {
    id: 40,
    name: 'Lamborghini Aventador',
    yearProduced: 2022,
    occupants: 2,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 450000,
    imageUrl: an,
    carType: 'Exotic'
  },
  {
    id: 41,
    name: 'Maserati Ghibli',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 75000,
    imageUrl: ao,
    carType: 'Luxury'
  },
  {
    id: 42,
    name: 'Nissan Rogue',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 33000,
    imageUrl: ap,
    carType: 'SUV'
  },
  {
    id: 43,
    name: 'Tesla Model X',
    yearProduced: 2022,
    occupants: 5,
    hybrid: true,
    distanceOnFullTank: 300,
    automatic: true,
    price: 60000,
    imageUrl: aq,
    carType: 'Electric'
  },
  {
    id: 44,
    name: 'Volkswagen Golf',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 28000,
    imageUrl: ar,
    carType: 'Compact'
  },
  {
    id: 45,
    name: 'Toyota RAV4',
    yearProduced: 2021,
    occupants: 5,
    hybrid: true,
    distanceOnFullTank: 300,
    automatic: true,
    price: 34000,
    imageUrl: as,
    carType: 'SUV'
  },
  {
    id: 46,
    name: 'Audi Q7',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 58000,
    imageUrl: at,
    carType: 'SUV'
  },
  {
    id: 47,
    name: 'BMW 3 Series',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 45000,
    imageUrl: au,
    carType: 'Sedan'
  },
  {
    id: 48,
    name: 'Chevrolet Silverado',
    yearProduced: 2021,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 40000,
    imageUrl: av,
    carType: 'Truck'
  },
  {
    id: 49,
    name: 'Dodge Dart',
    yearProduced: 2022,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 32000,
    imageUrl: aw,
    carType: 'Compact'
  },
  {
    id: 50,
    name: 'Ford Escape',
    yearProduced: 2023,
    occupants: 5,
    hybrid: false,
    distanceOnFullTank: 300,
    automatic: true,
    price: 33000,
    imageUrl: ax,
    carType: 'SUV'
  },
];

export default CarsData;
