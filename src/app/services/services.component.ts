import { Component } from '@angular/core';
import { BioPhyDataService } from '../bio-phy-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  data: any;
  showBiophydata: any =[];
constructor (private biophydataService: BioPhyDataService){}
ngOnInit(){
  this.data = this.biophydataService.howServiceWorks();
  this.showBiophydata = this.biophydataService.bioData();
}

}