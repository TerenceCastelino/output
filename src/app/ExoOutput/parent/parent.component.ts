import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // 3 
  // Declarer la proprietée qui va recevoir le message qui provient de mon enfant.compenent.ts 
messageRecuDeEnfant! : string
// 4 
// Evenement qui va initialiser messageRecuDeEnfant avec la copie du message cree dans enfant;compenent.ts 
MethodeInitiatiqueDeProprieteeParent(message : string){
this.messageRecuDeEnfant = message
}
}
