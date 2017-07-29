import { Component, OnInit } from '@angular/core';
import { GuardService } from '../../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';
import { RankingService } from '../../../services/ranking.service';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { AchievementResource } from '../../../resources/achievement.resource';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { categories, apiBase } from '../../../core/config.module';
import { ToastrService } from 'ngx-toastr';
import { FileHolder } from 'angular2-image-upload/lib/image-upload/image-upload.component';



@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.css']
})
export class FighterDetailComponent implements OnInit {


  addAchievementForm:FormGroup;
  editAchievementForm:FormGroup;

  currentUser:any;
  fighter:any;
  achievement:any;
  achievementCountries:any;
  achievements:any = [];
  events:any;
  activeUser:boolean;
  editAchievement:boolean;
  categories = categories;

  places =[
    {name:'1st'},
    {name:'2nd'},
    {name:'3rd'}
  ];

  photoUploadUrl:string = apiBase + 'storePhoto/116'


  constructor(
    protected guard:GuardService,
    private route:ActivatedRoute,
    protected rankingService:RankingService,
    protected achievementResource:AchievementResource,
    protected eventService:EventService,
    fb: FormBuilder,
    private toast: ToastrService
    ) {
      this.addAchievementForm = fb.group({
    "event_id": ["",Validators.required],
    "place":["",Validators.required],
    "category":["",Validators.required]
    });
  this.editAchievementForm = fb.group({
    "event_id": ["",Validators.required],
    "place":["",Validators.required],
    "category":["",Validators.required]
    });
  }
  

  ngOnInit() {
      this.getTournaments();
    if(this.route.snapshot.params['id']){
      this.getFighterInfo();
      this.getFighterAchievements();
      this.checkIfCurrentIsLoggedIn();
    }
  }

  onUploadFinished(photo:any){
    let temp;
    temp = JSON.parse(photo.serverResponse._body);
    this.fighter.image = temp.imageUrl;
  }

  deletePhoto(){
    this.fighter.image = null;
  }
  checkIfCurrentIsLoggedIn(){
    if(this.guard.loggedIn()){
      this.guard.getCurrentUser().subscribe(
        (data) => {this.checkIfUserIsAcive(data)}
      )
    }
  }

  checkIfUserIsAcive(data){
    this.currentUser = data;
    if(this.currentUser){
      if(this.currentUser.id == this.route.snapshot.params['id']){
        this.activeUser = true;
      }
    }else{
      this.activeUser = false;
    }
  }

  getFighterInfo(){
    this.rankingService.get({id:this.route.snapshot.params['id']}).$observable.subscribe(
      (data) => {this.fighter = data;
          this.fighter.total_fights = (this.fighter.bohurtTable.fights + 
            this.fighter.profightTable.fights + 
            this.fighter.longswordTable.fights +
            this.fighter.polearmTable.fights +
            this.fighter.swordShieldTable.fights +
            this.fighter.swordBucklerTable.fights +
            this.fighter.triathlonTable.fights 
          )
        }
      )
  }

  getFighterAchievements(){
    this.achievementResource.get({id:this.route.snapshot.params['id']}).$observable.subscribe(
      (data:any) => {this.achievements = data.data.data;
                     this.achievementCountries = data.data.achievement;
      }
      )
  }

  addAchievement(achievement){
    achievement.user_id = this.currentUser.id;
    this.achievementResource.save(achievement).$observable
      .subscribe(
        (response) => {
          this.toast.success(response.message);
          this.getFighterAchievements();
        }
      );
  }

  deleteAchievement(achievement){
    this.achievements = this.achievements.filter(item => item !== achievement);
     this.achievementResource.remove(achievement).$observable
      .subscribe(
        (response) => {
          this.toast.error(response.message);
        }
      );
  }

  getAchievementToEdit(achievement){
    this.editAchievement = true;
    this.achievement =  achievement;
  }

  updateAchievement(){
     this.achievementResource.update(this.achievement).$observable
      .subscribe(
        (response) => {
          this.toast.success(response.message);
          this.getFighterAchievements();
          this.editAchievement = false;
        }
      );
  }

  getTournaments(){
    this.eventService.getTournaments().subscribe(
      (data) => { this.events = data}
    )
  }
}

// interface Iachievement{
//   id:number;
//   event_id:number;
//   place:any;
//   category:any;
//   cup:any;
//   user_id:number;
//   created_at:any;
//   updated_at:any;
//   event:any;
// }