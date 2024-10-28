import {
  Component,
  computed,
  EventEmitter,
  Input,
  // input,
  Output,
  // output,
} from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({
  //   required: true,
  // })
  // id!: string;

  // @Input({
  //   required: true,
  // })
  // avatar!: string;

  // @Input({
  //   required: true,
  // })
  // name!: string;

  @Output() select = new EventEmitter<string>();
  //select=output<string>();

  ///////////////////// signals
  //   avatar = input.required<string>();
  //   name = input.required<string>();

  //  imagePath=computed(()=>{
  //   return 'assets/users/'+this.avatar()
  //  })

  imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
