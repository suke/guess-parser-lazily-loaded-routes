import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a.component';
import { PageARoutingModule } from './page-a.routing';

@NgModule({
  imports: [CommonModule, PageARoutingModule],
  declarations: [PageAComponent],
})
export class PageAModule {}
