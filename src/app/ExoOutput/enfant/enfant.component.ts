import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  // 1
  // le output fonctionne avec un evenement
  // ici je declare deEnfantAuParent (le nom de mon evenement) = new EventEmitter<type du retour>()

@Output() deEnfantAuParent = new EventEmitter<string>()
// 2
// ici je declare une methode qui servira a initialiser mon output() deEnfantAuParent
envoyerMessageAuParent(){
  // je vien chehcher this.leNomDeMonOutput.emit(le emit est la valeur assigner dans c est parenthese)
  this.deEnfantAuParent.emit("Message :Via Output() nomDeLaPropriétéeOutput initialiser dans une methode au niveau du enfant.compenent.ts ")
}
}
