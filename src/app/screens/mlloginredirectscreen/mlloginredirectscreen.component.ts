import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlloginredirectscreen',
  templateUrl: './mlloginredirectscreen.component.html',
  styleUrls: ['./mlloginredirectscreen.component.scss']
})
export class MlloginredirectscreenComponent implements OnInit {

  public appId:string="";
  constructor() { }

  ngOnInit(): void {
  }

  abrirMLConexion(){

    if(this.appId==""){
      alert("Proporciona un app id primero");
      return;
    }
    var url = "https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id="+this.appId+"&redirect_uri=https://api-dot-ml-lighthouse.uc.r.appspot.com/";
    window.open(url);  
  }

}
