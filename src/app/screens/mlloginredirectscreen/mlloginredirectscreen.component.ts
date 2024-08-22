import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-mlloginredirectscreen',
  templateUrl: './mlloginredirectscreen.component.html',
  styleUrls: ['./mlloginredirectscreen.component.scss']
})
export class MlloginredirectscreenComponent implements OnInit {

  public appId:string="";

  public code:string = "";
  public client_id:string = "";
  public client_secret:string = "";

  constructor(private facade:FacadeService, 
              private route: ActivatedRoute,
              private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      
    }
  )};

  ngOnInit(): void {
  }

  abrirMLConexion(){

    if(this.appId==""){
      alert("Proporciona un app id primero");
      return;
    }
    var url = "https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id="+this.appId+"&redirect_uri=https://ml-lighthouse.uc.r.appspot.com/";
    window.open(url);  
  }

  crearCuenta(){
    if(this.code==""){
      alert("Proporciona un code");
      return;
    }

    if(this.client_id=="" || this.client_secret==""){
      alert("Proporciona un client id y secret");
      return;
    }

    this.facade.crearCuenta(this.code, this.client_id, this.client_secret)
    .subscribe(
      (res)=>{
        alert("Cuenta creada exitosamente")
        this.router.navigate(['conectado']);
      },
      (error)=>{
        alert("ERROR:: "+JSON.stringify(error));
      }
    );
    
  }

}
