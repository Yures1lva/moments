import { Component } from '@angular/core';
import { Moment } from '../../../Moments';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = 'Compartilhar'

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.descript)

    if(moment.image){
    formData.append("image", moment.image)
    }
  
    //todo

    // enviar para o service

    // exibir mensagem
    
    // redirect 
  }
}
