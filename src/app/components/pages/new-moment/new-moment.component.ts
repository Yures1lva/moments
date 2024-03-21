import { Component } from '@angular/core';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = 'Compartilhar'

  constructor(private momentService: MomentService){}

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.descript)

    if(moment.image){
    formData.append("image", moment.image)

    await this.momentService.createMoment(formData).subscribe()

  }
  
    //todo


    // exibir mensagem
    
    // redirect 
  }
}
