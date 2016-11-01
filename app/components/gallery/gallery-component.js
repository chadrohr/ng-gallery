angular.module('gallery')
  .component('galleryComponent', {
    templateUrl: 'app/components/gallery/gallery.html',
    controller: GalleryController,
    controllerAs: 'gc'
 })

function GalleryController(){
  this.gallery = [];
  this.addPiece  = function(newPiece){
    this.gallery.push(newPiece)
    this.newPiece = '';
  console.log(this.gallery)
  }

}