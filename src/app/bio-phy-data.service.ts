import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioPhyDataService {

  constructor() { }
  howServiceWorks(){
    return "This is how service work";
  
  }

  bioData(){
    return[
      {"name":"AsadHabeeb", "age":24, "profile":"webdeveloper"}
      ,{"name":"AsadHabeeb 2", "age":24, "profile":"webdeveloper"}
      ,{"name":"AsadHabeeb 3", "age":24, "profile":"webdeveloper"}
    ];
  }
}
