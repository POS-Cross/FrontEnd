import { FormBuilder } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppConst } from 'src/app/const/app.const';

@Component({
  selector: 'app-recommondationCriteria',
  templateUrl: './recommondationCriteria.component.html',
})
export class RecommondationCriteriaComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  

  constructor(private cdr: ChangeDetectorRef ,private router: Router,public fb: FormBuilder) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }
  recommendationForm = this.fb.group({
    bundleSize: ['5'],
    itemsList:["Ramadan"]
  })

  ngOnInit(): void {}

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
      // this.router.navigate(['offerRecommendation/items']);
      this.router.navigate(['offerRecommendation/items',{bundleSize:this.recommendationForm.value["bundleSize"],itemlist:this.recommendationForm.value["itemsList"]}]);
      
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  
}
