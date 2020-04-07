import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer curl -X "GET" "https://api.spotify.com/v1/search?q=COPYCAT&type=track" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDkPD09OzpI-WkeUW5A6HNlNO9lQ3qDFems822EGJgBoDmFf4Kw5TqslJ-_kcTdYLD2yUNpeaOvlMCL7LOTXbRFXYUyP300wTvXnVDeWm9P0DArFcIlefVNqHtSdRZysNln_kACHWG4w6c" '
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
