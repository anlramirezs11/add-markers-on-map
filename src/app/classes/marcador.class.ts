export class Marcador {
  public lat: number;
  public lng: number;
  public title = 'Sin titulo';
  public desc = 'Sin descripcion';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
