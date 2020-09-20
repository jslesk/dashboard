import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  data = [
    {
      id: 0,
      name: 'Summer Fruit Cup',
      description: '',
      nutrition: '',
      category: 'Breakfast',
      price: '3.48',
      calories: '60',
      img: 'https://howtofeedaloon.com/wp-content/uploads/2016/06/fruit-salad-2-500x500.jpg',
      p: 0.36,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [
        {
          id: 0,
          name: 'Regular',
        },
        {
          id: 1,
          name: 'Cream',
        }
      ],
      customize: false
    },
    {
      id: 1,
      name: 'Iced Coffee',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '2.39',
      calories: '15',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVUFOG_AbpduaIiEQ7SKHumsyAuEmeC5zHbQ&usqp=CAU',
      p: 0.28,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [
        {
          id: 0,
          name: 'Regular',
        },
        {
          id: 1,
          name: 'Cream',
        }
      ],
      customize: false
    },
    {
      id: 2,
      name: 'Sprouted Grain Bagel Flat',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '1.39',
      calories: '180',
      img: 'https://3.bp.blogspot.com/-Y3MFATeypi4/V9SRtSDeaSI/AAAAAAABtCI/zjtaT2kqWd0x9uv61ylpMxOPRillXDgTACKgB/s1600/IMG_20160910_154904.jpg',
      p: 0.21,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: true
    },
    {
      id: 3,
      name: 'Greek yogurth with Mixed Berries Parflait',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '4.49',
      calories: '250',
      img: 'https://thefoodiephysician.com/wp-content/uploads/2019/02/fullsizeoutput_126e-500x500.jpeg',
      p: 0.18,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 4,
      name: 'Iced Tea',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '2.59',
      calories: '0',
      img: 'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-iced-tea-8-1.jpg',
      p: 0.12,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [
        {
          id: 0,
          name: 'Extra ice',
        },
        {
          id: 1,
          name: 'Fresh Fruit',
        }
      ], customize: false
    },
    {
      id: 5,
      name: 'Banana',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '0.99',
      calories: '90',
      img: 'https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg',
      p: 0.08,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 6,
      name: 'Cold Brew',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '2.99',
      calories: '10',
      img: 'https://www.acouplecooks.com/wp-content/uploads/2019/03/Coffee-Cold-Brew-004s.jpg',
      p: 0.28,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 7,
      name: 'Caesar salad',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '7.49',
      calories: '340',
      img: 'https://www.fifteenspatulas.com/wp-content/uploads/2011/10/Caesar-Salad-Fifteen-Spatulas-3.jpg',
      p: 0.08,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 8,
      name: 'Tuna Salad Sandwich',
      description: '',
      nutrition: '',
      category: 'Bewerage',
      price: '7.69',
      calories: '650',
      img: 'https://images-gmi-pmc.edge-generalmills.com/7eb09e32-fb06-4a34-97e6-def91b62164f.jpg',
      p: 0.12,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 9,
      name: 'Apple',
      description: '',
      nutrition: '',
      category: 'Snacks',
      price: '0.99',
      calories: '80',
      img: 'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg',
      p: 0.18,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 10,
      name: 'Blueberry Muffin with Fresh Blueberries',
      description: '',
      nutrition: '',
      category: 'Bakery',
      price: '2.79',
      calories: '460',
      img: 'https://www.iheartnaptime.net/wp-content/uploads/2019/07/blueberry-muffin-recipe-2.jpg',
      p: 0.21,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 11,
      name: 'Steel Cut Oatmeal with Strawberries & Pecans',
      description: '',
      nutrition: '',
      category: 'Breakfast',
      price: '5.19',
      calories: '360',
      img: 'https://i.ytimg.com/vi/zYPr-bSiHY0/hqdefault.jpg',
      p: 0.36,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    },
    {
      id: 12,
      name: 'Mediterranean Veggie',
      description: '',
      nutrition: '',
      category: 'Sandwiches',
      price: '7.69',
      calories: '490',
      img: 'https://www.acouplecooks.com/wp-content/uploads/2013/03/Kale-Spread-Sammie-1-of-7.jpg',
      p: 0.18,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: 3,
      types: [],
      customize: false
    },
    {
      id: 13,
      name: 'Turkey Sandwich',
      description: '',
      nutrition: '',
      category: 'Breakfast',
      price: '7.69',
      calories: '540',
      img: 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/foodservice/desktop%20images/2019_com_alfredo-dijon-turkey-sandwich_900x600.jpg?ext=.jpg',
      p: 0.12,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: 3,
      types: [],
      customize: false
    },
    {
      id: 14,
      name: 'Heritage Han & Swiss',
      description: '',
      nutrition: '',
      category: 'Breakfast',
      price: '7.69',
      calories: '630',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png',
      p: 0.36,
      hourOfDay: 8,
      location: 'SFO',
      flyById: '',
      flightDelayRisk: '',
      types: [],
      customize: false
    }
  ];

  shoppingCart = new BehaviorSubject<Map<number, any>>(new Map());  // key-id, value- data,count

  constructor() { }

  getAllData(): Observable<any[]> {
    return of(this.data);
  }

  addToCart(data: any): Observable<Map<number, any>> {
    const map = this.shoppingCart.getValue();

    map[data.id] = {
      data,
      count: ((map[data.id] && map[data.id].count) ? (map[data.id].count + 1) : 1)
    };

    console.log('==========================');
    console.log(map[data.id]);
    console.log('==========================');

    this.shoppingCart.next(map);

    return of(this.shoppingCart.getValue());
  }
}
