import { Component } from '@angular/core';
import { ServiceDataService } from 'src/app/Services/service-data.service';
import { Farm } from 'src/app/farm';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css'],
})
export class FarmComponent {
  farms: any;
  data: any;
getFarmer:any;
  farm = new Farm();

  constructor(private serviceData: ServiceDataService) {}
  ngOnInit() {
    this.getFarms();
  }
  getFarms() {
    return this.serviceData.getFarms().subscribe((res) => {
      this.farms = res;
    });
  }
  addFarmData() {

    this.farm.farmer_id = this.getFarmer.farmer_id;
    return this.serviceData.addFarm(this.farm).subscribe((res) => {
      this.data = res;
    });
  }

  remove(item: any) {
    this.farm = item;
    this.serviceData.removeFarm(this.farm).subscribe((res) => {
      this.data = res;
      // console.log(res);
      this.getFarms();
    });
  }

  farmUpdate(item: any) {
    this.serviceData.updateFarm(this.farm).subscribe((res) => {
      item = res;
      this.data = item;
      this.getFarms();
      console.log(this.farm);
    });
  }

  get Farmer() {
    const farmer: any = localStorage.getItem('farmer');
    this.getFarmer = JSON.parse(farmer);
 
    return this.getFarmer;
  }
}
