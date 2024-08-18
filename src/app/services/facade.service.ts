import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const session_cookie_name = 'ml_lighthouse_web-token';
const group_name_cookie_name = 'ml_lighthouse_web-group-name';
const centro_nombre_cookie_name = 'ml_lighthouse_web-centro-nombre';
const first_name_cookie_name = 'ml_lighthouse_web-first-name';
const last_name_cookie_name = 'ml_lighthouse_web-last-name';
const cookie_admin_state = 'ml_lighthouse_web-cookie-admin-state';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private http: HttpClient, 
    public router: Router, 
    private cookieService: CookieService
  ) {  }
  
  recuperarGrupo(){
    return this.cookieService.get(group_name_cookie_name);
  }
  recuperarSessionToken(){
    return this.cookieService.get(session_cookie_name);
  }

  destroySession(){
    this.cookieService.deleteAll();
  }

  private obtenerAuthHeaders(){
    var token = this.recuperarSessionToken();
    if(!token || token=="") return;
    var headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return headers;
  }

  

}