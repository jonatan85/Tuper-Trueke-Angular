import { AuthService } from 'src/app/core/services/auth/auth.service';
import { diets } from 'src/app/core/services/diets/diets.data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { MessageService } from 'src/app/core/services/message/message.service';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { PlatesDiets } from 'src/app/core/services/plates/api/api-plates.models';
import { PlatesService } from 'src/app/core/services/plates/plates.service';


@Component({
  selector: 'app-plates-create',
  templateUrl: './plates-create.component.html',
  styleUrls: ['./plates-create.component.scss']
})

export class PlatesCreateComponent {
  public platesForm?: FormGroup;
  public dietsEl: PlatesDiets [] = diets;
  public urlImg: string = '';
  public canEdit: boolean = false;
  public platesId?: string;
  public isPlatesCreate: boolean = false;
  public isLogged: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private platesService: PlatesService,
    private router: Router,
    private auth: AuthService
  ) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          return of(undefined);
        } else {
          this.platesId = id;
          return this.platesService.getPlateDetail(id);
        }
      }),
    ).subscribe((plates?: Plates) => {
      this.canEdit = !!plates;
      this.createNewForm(plates);
    });
  }


  public ngOnInit(): void {
    this.platesForm?.get('image')?.valueChanges.subscribe((value) => {
      if (!value) { return; }
      this.urlImg = value;
      this.messageService.setMessage(value);
    });
    
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
    this.platesForm?.get('image')?.statusChanges.subscribe((status) => {
    });
  }
  public createNewForm(plates?: Plates) {
    this.platesForm = this.fb.group({
      name: new FormControl(plates?.name || '', [Validators.required, Validators.maxLength(15)]),
      price: new FormControl(plates?.price ||'', [Validators.required, Validators.maxLength(3)]),
      description: new FormControl(plates?.description ||'', [Validators.required]),
      image: new FormControl(plates?.img || '', [Validators.required]),              
      diets: new FormControl(plates?.diets || '', [Validators.required]),
    });
  }

  public createNewPlates() {
    if (!this.platesForm?.valid) { return; }
    const platesRequest = this.canEdit && this.platesId
      ? this.platesService.editPlates(this.platesId, this.platesForm?.value)
      : this.platesService.createPlates(this.platesForm?.value);
    platesRequest.subscribe(() => {
      this.isPlatesCreate = true;
      this.platesForm?.reset();
      this.router.navigate(['plates-list']);
    });
  }

  public navigateToLogout() {
    this.router.navigate(['account']);
  }
}

