import { ImageService } from './../shared/images.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  fimg: any[];

  imagesFound: boolean = false;

  searching: boolean = false;

 
  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    this.fimg = data.__proto__;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error)
  }


  

  constructor(private _imageService: ImageService) { }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error()
      ),
      () => this.searching = false
    )
  }

  ngOnInit() {
  }

}
