import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/pages/data.service';
import { AppConst } from 'src/app/const/app.const';
@Component({
  selector: 'app-itemRecommedation',
  host: {'class': 'card mb-5 mb-xl-8'},
  templateUrl: './itemRecommedation.component.html',
})
export class ItemRecommedationComponent implements OnInit {
  RecommendationItems: any;
  constructor(private route: ActivatedRoute,private dataService: DataService) {}
  ngOnInit(): void {
    
    let bundleSize = Number(this.route.snapshot.paramMap.get("bundleSize"));
    let list = this.route.snapshot.paramMap.get("itemlist");
    let ItemList=AppConst.ItemLists.SchoolList;
    if (list=="Ramadan"){
      ItemList= AppConst.ItemLists.RamadanList
    }

    if (!bundleSize)
      bundleSize=5
    if (!list)
      list="Ramadan"
    this.dataService.getRecommendation(ItemList,bundleSize,list).subscribe({
      next: (data) => {
        this.RecommendationItems=data
      },
      error: error => {
        console.log(error)
        console.error('There was an error!', error);
      }
    })
    // =
   
  }
}
