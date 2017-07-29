import { Injectable } from '@angular/core';
import { MdDialog,MdDialogRef } from '@angular/material';
import { RankingService } from '../../services/ranking.service';
import { Api } from '../../services/api';
import { EventService } from '../../services/event.service';


@Injectable()
export class UpdateService {

  constructor(
    public dialog: MdDialog,
    protected ranking: RankingService,
    protected event: EventService,
    protected api: Api
  ) { }

  getTournaments(callback: (data) => void){
    return this.event.getTournaments().subscribe(
      (data) =>{callback(data)}
    )
  }

  openUpdate(openedDialog,dialogRef,component,fighter,category){
    if(!openedDialog){
      dialogRef = this.dialog.open(component,{
        data: {
          fighter: fighter,
          category: category
        }
      });
        openedDialog = true;
    }

     dialogRef.afterClosed().subscribe(result => {
      openedDialog = false;
    })
  }

  update(record,data){
   
    record.user_id = data.fighter.id;
    this.api.post('fighters/'+data.category,record).map(response => response.json())
     .catch(this.api.serverError);
    this.dialog.closeAll();
  }
}
