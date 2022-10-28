import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
   providedIn: 'root',
})
export class RoutinesService {
   constructor(private snackBar: MatSnackBar) {}

   atention(message: string, action: string) {
      this.snackBar.open(message, 'Fechar', {
         duration: 3000,
         horizontalPosition: 'right',
         verticalPosition: 'top',
      });
   }
}
