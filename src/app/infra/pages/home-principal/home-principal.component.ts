import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.scss']
})
export class HomePrincipalComponent implements OnInit {


  private toastr = inject(ToastrService);

  ngOnInit(): void {
    this.toastr.success('Bem vindo ao sistema de entregas GW Sistemas');
  }

}
