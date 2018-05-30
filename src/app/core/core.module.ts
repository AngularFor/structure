import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    SideNavComponent,
    HeaderComponent
  ],
  providers: [

  ]
})
export class CoreModule { 

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ){
    if(parentModule){
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }


}
