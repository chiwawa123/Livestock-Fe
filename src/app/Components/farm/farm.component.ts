import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  getFarmer: any;


  farm = new Farm();

  constructor(private serviceData: ServiceDataService,  private toastr: ToastrService) {}
  ngOnInit() {

    this.getFarms();
    this.Farmer();
  }
  getFarms() {
    return this.serviceData.getFarms().subscribe((res) => {
      this.farms = res;
    });
  }
  addFarmData() {
    this.farm.farmer_id = this.getFarmer.farmer.farmer_id;
    return this.serviceData.addFarm(this.farm).subscribe((res) => {
      this.data = res;
      if (this.data.status == 200) {
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      } else {
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      }
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
    const farmer: any = localStorage.getItem('user');
    this.getFarmer = JSON.parse(farmer);
    // console.log(this.getFarmer.farmer.farmer_id);

    return this.getFarmer.farmer;
  }
}
