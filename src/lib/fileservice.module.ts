import { NgModule } from '@angular/core';
import { FileserviceComponent } from './fileservice.component';
import { FilecomponentComponent } from './filecomponent/filecomponent.component';

@NgModule({
  declarations: [FileserviceComponent, FilecomponentComponent],
  imports: [
  ],
  exports: [FileserviceComponent]
})
export class FileserviceModule { }
