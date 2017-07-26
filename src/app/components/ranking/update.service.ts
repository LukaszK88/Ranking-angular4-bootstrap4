import { Injectable } from '@angular/core';
import { MdDialog,MdDialogRef } from '@angular/material';
import { RankingService } from '../../services/ranking.service';
import { EventService } from '../../services/event.service';


@Injectable()
export class UpdateService {

  constructor(
    public dialog: MdDialog,
    protected ranking: RankingService,
    protected event: EventService,
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
    this.ranking.saveRankingRecord(data.category,record).subscribe(
      (data) => {console.log(data)},
      (error) => {console.log(error)}
    )
    this.dialog.closeAll();
  }
}
