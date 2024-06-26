import { NgModule } from '@angular/core';
import { Error404pageComponent } from './pages/error404page/error404page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [Error404pageComponent],
  exports: [Error404pageComponent, MaterialModule],
})
export class SharedModule {}
