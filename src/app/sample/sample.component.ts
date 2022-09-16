import { Component, OnInit } from "@angular/core";
// import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicFormService, FormConstants, FieldConfig, DefaultConfig } from 'angular-reactive-dynamic-forms';

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"],
  providers: [
    DynamicFormService
  ]
})
export class SampleComponent implements OnInit {
  constructor(private  _dynamicFormService: DynamicFormService) {}
  // myForm: FormGroup;

  formGroup: FieldConfig[] = [];
  defaultConfig: DefaultConfig = {};
  // hi :DynamicFormService;

  // onSubmit(form: FormGroup) {
  //   console.log(form);
  // }


  ngOnInit() {
    // this.myForm = new FormGroup({
      
    //   email: new FormControl('cat@gmail.com',Validators.email),
    //   password: new FormControl('',Validators.required),
    //   address: new FormControl(''),
    //   city: new FormControl(''),
    //   zip: new FormControl('')
    // });



  // this._dynamicFormService.setFormFields(this.formGroup, this.defaultConfig);


    // if (RegExp("multipage", "gi").test(window.location.search)) {
    //   introJs()
    //     .setOptions({
    //       steps: [
    //         {
    //           element: document.querySelector(".s1"),
    //           title: "Welcome",
    //           intro: "Hello World!",
    //           position: "right",
    //           step: 1,
    //         },
    //       ],
    //     })

    //     .oncomplete(function () {
    //       window.location.href = "../intro"; // or whatever your original page is
    //     })
    //     .start();
    // }
  }
}
