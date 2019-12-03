
import { HttpModule } from '@angular/http';

import { ImageService } from './shared/images.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import {MatCheckboxModule, MatSliderModule, MatCardModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';



@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    NgxMasonryModule,
    MasonryGalleryModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
