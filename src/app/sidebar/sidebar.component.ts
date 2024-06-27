import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  screenWidth!: number;

 public isExpanded: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver ) {
    this.getScreenSize();    
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
          this.screenWidth = window.innerWidth;     
          // console.log(this.screenWidth);     
          if(this.screenWidth <= 959){            
            this.isExpanded = true;
          }else{
            this.isExpanded = false;
          }
  }


}
