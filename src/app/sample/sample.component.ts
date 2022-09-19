import { Component, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


// import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  RxDynamicFormBuilder,
  DynamicFormBuildConfig,
  DynamicFormConfiguration,
} from "@rxweb/reactive-dynamic-forms";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"],
})
export class SampleComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      scheckbox: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        type:'number',
        label: 'Register number',
        placeholder: 'Enter your roll number',
        required: true,
      },
    },
    {
      key: 'nested.story',
      type: 'textarea',
      templateOptions: {
        rows:5,
        label: 'Message',
        placeholder: 'Write your story',
        click: (field, event) => console.log("clicked", field, event),

      },
    
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: { label: 'Chechbox',
      
      
      // click: (x, event) => {
      //   console.log("clicked", x.formControl.value)
      //   if(x.formControl.value){
      //     alert("not pressed");
      //   }

      // }

       },
       expressionProperties: {
        "model.awesome": (model, formState) => {
          if(model.awesomem === true){
            alert("fdj");
            formState.scheckbox == true;
          }
          console.log(model.awesome,formState.scheckbox);
        }
      
      
  
    },
  },
    {
      key: 'color',
      type: 'select',
      templateOptions: {
        label: 'Outfit color',
        options: [
          { label: 'Powder blue', value: 'powder-blue' },
          { label: 'Orange crush', value: 'orange-crush' },
          { label: 'Purple haze', value: 'purple-haze' }
        ]
      }
    },
 
  ];

  submit(x) {
    if (this.form.valid) {
      console.log(x);
    }
  }




  countries;
  dynamicForm: DynamicFormBuildConfig;

  dynamicFormConfiguration: DynamicFormConfiguration;

  serverData: any = [
    {
      type: "text",
      name: "firstName",
      validators: {
        required: true,
      },
      ui: {
        label: "First Name",
        placeholder: "Enter Your First Name",
        description: "Please Enter FirstName",
        
      },
    },
    {
      type: "select",
      name: "country",
      ui: {
        label: "Country",
        placeholder: "Select...",
      },
      validators: {
        required: true,
      },
      source: [
        {
          value: 1,
          text: "India",
        },
        {
          value: 2,
          text: "Canada",
        },
        {
          value: 1,
          text: "USA",
        },
      ],
    },

    {
      type: "textarea",
      name: "permanentAddress",
      ui: {
        label: "Permanent Address",
        placeholder: "Enter Your Permanent Address",
      },
    },
    {
      type: "checkbox",
      name: "sameAsPermanent",
      modelName: "sameAsAddress",
      source: [
        {
          value: 1,
          text: "Same As Permanent",
        },
      ],
    },
    {
      type: "textarea",
      name: "correspondenceAddress",
      ui: {
        label: "Correspondence Address",
        placeholder: "Enter Your Correspondence Address",
      },
    },
    {
      type: "color",
      name: "colorpick",
      ui: {
        label: "color picker",
        class:["cat"]
      },
    }
  ];
  constructor(private dynamicFormBuilder: RxDynamicFormBuilder) {}
  uiBindings: string[] = [
    "firstName",
    "country",
    "permanentAddress",
    "sameAsPermanent",
    "correspondenceAddress",
    "colorpick"
  ];
  // myForm: FormGroup;

  // hi :DynamicFormService;

  onSubmit(x) {
    console.log(x);
  }

  ngOnInit() {
    this.dynamicFormConfiguration = {
      controlConfigModels: [],
    };

    this.dynamicForm = this.dynamicFormBuilder.formGroup(
      this.serverData,
      this.dynamicFormConfiguration
    );

    this.countries = [
      {
          name: 'Australia',
          code: 'AU',
          states: [
              {
                  name: 'New South Wales',
                  cities: [
                      {cname: 'Sydney', code: 'A-SY'},
                      {cname: 'Newcastle', code: 'A-NE'},
                      {cname: 'Wollongong', code: 'A-WO'}
                  ]
              },
              {
                  name: 'Queensland',
                  cities: [
                      {cname: 'Brisbane', code: 'A-BR'},
                      {cname: 'Townsville', code: 'A-TO'}
                  ]
              },
              
          ]
      },
      {
          name: 'Canada', 
          code: 'CA',
          states: [
              {
                  name: 'Quebec',
                  cities: [
                      {cname: 'Montreal', code: 'C-MO'},
                      {cname: 'Quebec City', code: 'C-QU'}
                  ]
              },
              {
                  name: 'Ontario',
                  cities: [
                      {cname: 'Ottawa', code: 'C-OT'},
                      {cname: 'Toronto', code: 'C-TO'}
                  ]
              },
              
          ]
      },
      {
          name: 'United States',
          code: 'US',
          states: [
              {
                  name: 'California',
                  cities: [
                      {cname: 'Los Angeles', code: 'US-LA'},
                      {cname: 'San Diego', code: 'US-SD'},
                      {cname: 'San Francisco', code: 'US-SF'}
                  ]
              },
              {
                  name: 'Florida',
                  cities: [
                      {cname: 'Jacksonville', code: 'US-JA'},
                      {cname: 'Miami', code: 'US-MI'},
                      {cname: 'Tampa', code: 'US-TA'},
                      {cname: 'Orlando', code: 'US-OR'}
                  ]
              },
              {
                  name: 'Texas',
                  cities: [
                      {cname: 'Austin', code: 'US-AU'},
                      {cname: 'Dallas', code: 'US-DA'},
                      {cname: 'Houston', code: 'US-HO'}
                  ]
              }
          ]
      }
  ];

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
