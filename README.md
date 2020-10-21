# UI Components

![](https://blog.enginesoft.in/wp-content/uploads/2018/09/ionic.png)

### Ionic apps are made of high-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs. Once you’re familiar with the basics, refer to the API Index for a complete list of each component and sub-component.



## ion-action-sheet

![imagen](https://masteringionic.com/perch/resources/actionsheet-select-menu.png)


#### An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in ios mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.

## Buttons

#### A button's role property can either be destructive or cancel. Buttons without a role property will have the default look for the platform. Buttons with the cancel role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the buttons array. Note: We recommend that destructive buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.

## Customization
#### Action Sheet uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a higher specificity selector.

#### We recommend passing a custom class to cssClass in the create method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the Usage section for an example of how to pass a class using cssClass.

~~~css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
~~~


~~~javascript
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'action-sheet-example',
  templateUrl: 'action-sheet-example.html',
  styleUrls: ['./action-sheet-example.css'],
})
export class ActionSheetExample {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
~~~

### Porperties

| Description | If true, the action sheet will animate.      |
|----------------------------|--------------------------|
| Attribute| animated |
| Type    | boolean   |
| Default | true      |



### backdropDismiss
| Description | If true, the action sheet will be dismissed when the backdrop is clicked. |
|----------------------------|--------------------------|
| Attribute| backdrop-dismiss |
| Type    | boolean   |
| Default | true      |

### buttons

#### Description	
#### An array of buttons for the action sheet.

#### Type	(string | ActionSheetButton)[]
#### Default	[]

 

 # ion-alert
![](https://www.freakyjolly.com/wp-content/uploads/2020/05/Pasted-into-Ionic-5-Alert-Component-Tutorial-with-Example-Application-1.png)
 #### An Alert is a dialog that presents users with information or collects information from the user using inputs. An alert appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. It can also optionally have a header, subHeader and message.


## Buttons
#### In the array of buttons, each button includes properties for its text, and optionally a handler. If a handler returns false then the alert will not automatically be dismissed when the button is clicked. All buttons will show up in the order they have been added to the buttons array from left to right. Note: The right most button (the last one in the array) is the main button.

#### Optionally, a role property can be added to a button, such as cancel. If a cancel role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.


~~~css
/* DOES NOT WORK - not specific enough */
.alert-wrapper {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
~~~

# Usage

~~~javascript
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'alert-example',
  templateUrl: 'alert-example.html',
  styleUrls: ['./alert-example.css'],
})
export class AlertExample {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
~~~


### Style Placement

#### In Angular, the CSS of a specific page is scoped only to elements of that page. Even though the Alert can be presented from within a page, the ion-alert element is appended outside of the current page. This means that any custom styles need to go in a global stylesheet file. In an Ionic Angular starter this can be the src/global.scss file or you can register a new global style file by adding to the styles build option in angular.json.[Angular Alerts components][Angular Alert Components].

[Angular Alert Components]: http://limni.net/blog/

#

# ion-button
![Ion buttons](https://ampersandacademy.com/tutorials/wp-content/uploads/2016/04/ionic-button1.png)


#### Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Expand

#### This attribute lets you specify how wide the button should be. By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.



|Value |	Details|
|------------------|----------------------|
|block |	Full-width button with rounded corners.|
|full |	Full-width button with square corners and no border on the left or right.|


## Usage

~~~javascript
<!-- Default -->
<ion-button>Default</ion-button>

<!-- Anchor -->
<ion-button href="#">Anchor</ion-button>

<!-- Colors -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- Expand -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- Round -->
<ion-button shape="round">Round Button</ion-button>

<!-- Fill -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- Icons -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- Sizes -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
~~~

 [Go to Ion Button ionic home page here][Go to Ion Button ionic home page here].

[Go to Ion Button ionic home page here]: https://ionicframework.com/docs/api/button


# ion-card

![](https://s3-us-west-2.amazonaws.com/ionicthemes/showcase_images/redesign/ioncard2.png)

#### Cards are a standard piece of UI that serves as an entry point to more detailed information. A card can be a single component, but is often made up of some header, title, subtitle, and content. ion-card is broken up into several sub-components to reflect this. Please see  **ion-card-content**, ***ion-card-header***, ***ion-card-title***, ***ion-card-subtitle.*** 

## Usage

~~~javascript
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item>
    <ion-icon name="pin" slot="start"></ion-icon>
    <ion-label>ion-item in a card, icon left, button right</ion-label>
    <ion-button fill="outline" slot="end">View</ion-button>
  </ion-item>

  <ion-card-content>
    This is content, without any paragraph or header tags,
    within an ion-card-content element.
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item href="#" class="ion-activated">
    <ion-icon name="wifi" slot="start"></ion-icon>
    <ion-label>Card Link Item 1 activated</ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-icon name="wine" slot="start"></ion-icon>
    <ion-label>Card Link Item 2</ion-label>
  </ion-item>

  <ion-item class="ion-activated">
    <ion-icon name="warning" slot="start"></ion-icon>
    <ion-label>Card Button Item 1 activated</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon name="walk" slot="start"></ion-icon>
    <ion-label>Card Button Item 2</ion-label>
  </ion-item>
</ion-card>
~~~

 [Go to Ion Cards ionic home page here][Go to Ion Cards ionic home page here].

[Go to Ion Cards ionic home page here]: https://ionicframework.com/docs/api/card


## ion-checkbox
||||
|-----------------|---------------------|-----------|
|![](https://miro.medium.com/max/620/0*0s7UTd8rq2qXz8U3.gif)|![](https://miro.medium.com/max/1575/0*EB7xj9vdrbwBtDXC.gif)|![](https://www.wikitechy.com/tutorials/ionic/img/ionic-images/ionic-checkbox-checkbox.gif)|
#### Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the ***checked*** property. They can also be checked programmatically by setting the ***checked*** property.

~~~javascript
<!-- Default Checkbox -->
<ion-checkbox></ion-checkbox>

<!-- Disabled Checkbox -->
<ion-checkbox disabled="true"></ion-checkbox>

<!-- Checked Checkbox -->
<ion-checkbox checked="true"></ion-checkbox>

<!-- Checkbox Colors -->
<ion-checkbox color="primary"></ion-checkbox>
<ion-checkbox color="secondary"></ion-checkbox>
<ion-checkbox color="danger"></ion-checkbox>
<ion-checkbox color="light"></ion-checkbox>
<ion-checkbox color="dark"></ion-checkbox>

<!-- Checkboxes in a List -->
<ion-list>
  <ion-item *ngFor="let entry of form">
    <ion-label>{{entry.val}}</ion-label>
    <ion-checkbox slot="end" [(ngModel)]="entry.isChecked"></ion-checkbox>
  </ion-item>
</ion-list>
~~~


Code Example on .ts files on angular projects.

~~~javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
}
~~~


#

# ion-chip
![](https://reactnativeexample.com/content/images/2018/05/hero.png)

#### Chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, and icons.

~~~javascript
<ion-chip>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label color="secondary">Secondary Label</ion-label>
</ion-chip>

<ion-chip color="secondary">
  <ion-label color="dark">Secondary w/ Dark label</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="pin"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="heart" color="dark"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label>Button Chip</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-icon name="pin" color="primary"></ion-icon>
  <ion-label>Icon Chip</ion-label>
  <ion-icon name="close"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
  <ion-label>Avatar Chip</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>
~~~


# ion-datetime
![](https://i.stack.imgur.com/vZgfX.png)

#### Datetimes present a picker interface from the bottom of a page, making it easy for users to select dates and times. The picker displays scrollable columns that can be used to individually select years, months, days, hours and minute values. Datetimes are similar to the native ***input*** elements of type ***datetime-local***, however, Ionic's Datetime component makes it easy to display the date and time in a preferred format, and manage the datetime values.



Code example.

~~~javascript
<ion-item>
  <ion-label>MMMM</ion-label>
  <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>MM DD YY</ion-label>
  <ion-datetime displayFormat="MM DD YY" placeholder="Select Date"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Disabled</ion-label>
  <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>YYYY</ion-label>
  <ion-datetime [pickerOptions]="customPickerOptions" placeholder="Custom Options" displayFormat="YYYY" min="1981" max="2002"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="stacked">MMMM YY</ion-label>
  <ion-datetime displayFormat="MMMM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value="2002-09-23T15:03:46.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
  <ion-datetime value="1995-04-15" min="1990-02" max="2000"
    [dayShortNames]="customDayShortNames"
    displayFormat="DDD. MMM DD, YY"
    monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>D MMM YYYY H:mm</ion-label>
  <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDDD MMM D, YYYY</ion-label>
  <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>HH:mm</ion-label>
  <ion-datetime displayFormat="HH:mm"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>h:mm a</ion-label>
  <ion-datetime displayFormat="h:mm a"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>hh:mm A (15 min steps)</ion-label>
  <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Leap years, summer months</ion-label>
  <ion-datetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" monthValues="6,7,8" [yearValues]="customYearValues"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Specific days/months/years</ion-label>
  <ion-datetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14" displayFormat="DD/MMM/YYYY"></ion-datetime>
</ion-item>

~~~

Angular example of IonDatetime coding.

~~~javascript
@Component({…})
export class MyComponent {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

}
~~~

## Properties
# cancelText
|Description	|The text to display on the picker's cancel button.|
|-------------------|---------------------------------|
|Attribute|	cancel-text|
|Type |	string|
|Default|	'Cancel'|

# dayNames
|Description	| Full day of the week names. This can be used to provide locale names for each day in the week. Defaults to English.|
|------------------|-------------------------|
|Attribute |	day-names |
|Type |	string , string[] , undefined |


# dayShortNames 
|Description	| Short abbreviated day of the week names. This can be used to provide locale names for each day in the week. Defaults to English. Defaults to: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] |
|----------------------|---------------------------|
|Attribute |	day-short-names |
|Type |	string , string[] , undefined|



# Events 
|Name |	Description|
|---------------------|------------------|
|ionBlur|	Emitted when the datetime loses focus.|
|ionCancel|	Emitted when the datetime selection was cancelled.|
|ionChange|	Emitted when the value (selected date) has changed.|
|ionFocus|	Emitted when the datetime has focus.|


# Methods
# open
|Description	| Opens the datetime overlay.|
|-----------------|--------------------|
|Signature|	open() => Promise<void>|

#

# CSS Shadow Parts
|Name |	Description|
|---------------|-----------------|
|placeholder|	The placeholder of the datetime.|
|text|	The value of the datetime.|


# CSS Custom Properties
|Name|	Description|
|---------------|-----------------------|
|--padding-bottom |	Bottom padding of the datetime|
|--padding-end|	Right padding if direction is left-to-right, and left padding if direction is right-to-left of the datetime|
|--padding-start|	Left padding if direction is left-to-right, and right padding if direction is right-to-left of the datetime|
|--padding-top |	Top padding of the datetime|
|--placeholder-color|	Color of the datetime placeholder|

[Ionic pages ion-datetime][Documentation from ionic page]

[Documentation from ionic page]:https://ionicframework.com/docs/api/datetime


# 

# ion-fab



#### Fabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content. Fab should have one main fab-button. Fabs can also contain fab-lists which contain related buttons that show when the main fab button is clicked. The same fab container can contain several fab-list elements with different side values.

# 

## Usage

~~~javascript
<ion-header>
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- fab placed to the top end -->
  <ion-fab vertical="top" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the bottom end -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-forward-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the top start -->
  <ion-fab vertical="top" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-back-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the bottom start -->
  <ion-fab vertical="bottom" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-up-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the (vertical) center and start -->
  <ion-fab vertical="center" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="share"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the (vertical) center and end -->
  <ion-fab vertical="center" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the top and end and on the top edge of the content overlapping header -->
  <ion-fab vertical="top" horizontal="end" edge slot="fixed">
    <ion-fab-button>
      <ion-icon name="person"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->
  <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">
    <ion-fab-button>
      <ion-icon name="settings"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="end">
      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <!-- fab placed in the center of the content with a list on each side -->
  <ion-fab vertical="center" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="share"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="end">
      <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
~~~



## Properties
### activated
|Description	|If true, both the **ion-fab-button** and all **ion-fab-list** inside **ion-fab** will become active. That means **ion-fab-button** will become a ***close*** icon and **ion-fab-list** will become visible.|
|----------------------|--------------------------|
|Attribute|	activated|
|Type|	boolean|
|Default|	false|





## snippet-css.scss

~~~scss
/** Color **/

--ion-color-youtube: #ff0011;
--ion-color-youtube-rgb: 255,0,17;
--ion-color-youtube-contrast: #ffffff;
--ion-color-youtube-contrast-rgb: 255,255,255;
--ion-color-youtube-shade: #e0000f;
--ion-color-youtube-tint: #ff1a29;

.ion-color-youtube {
  --ion-color-base: var(--ion-color-youtube) !important;
  --ion-color-base-rgb: var(--ion-color-youtube-rgb) !important;
  --ion-color-contrast: var(--ion-color-youtube-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-youtube-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-youtube-shade) !important;
  --ion-color-tint: var(--ion-color-youtube-tint) !important;
}
~~~

## variables-completo.scss
~~~scss
// Ionic Variables and Theming. For more info, please see:
// http://ionicframework.com/docs/theming/

/** Ionic CSS Variables **/
:root {
  /** primary **/
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56, 128, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  /** secondary **/
  --ion-color-secondary: #0cd1e8;
  --ion-color-secondary-rgb: 12, 209, 232;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #0bb8cc;
  --ion-color-secondary-tint: #24d6ea;

  /** tertiary **/
  --ion-color-tertiary: #7044ff;
  --ion-color-tertiary-rgb: 112, 68, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #633ce0;
  --ion-color-tertiary-tint: #7e57ff;

  /** success **/
  --ion-color-success: #10dc60;
  --ion-color-success-rgb: 16, 220, 96;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255, 255, 255;
  --ion-color-success-shade: #0ec254;
  --ion-color-success-tint: #28e070;

  /** warning **/
  --ion-color-warning: #ffce00;
  --ion-color-warning-rgb: 255, 206, 0;
  --ion-color-warning-contrast: #ffffff;
  --ion-color-warning-contrast-rgb: 255, 255, 255;
  --ion-color-warning-shade: #e0b500;
  --ion-color-warning-tint: #ffd31a;

  /** danger **/
  --ion-color-danger: #f04141;
  --ion-color-danger-rgb: 245, 61, 61;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #d33939;
  --ion-color-danger-tint: #f25454;

  /** dark **/
  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34, 34, 34;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255, 255, 255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  /** medium **/
  --ion-color-medium: #989aa2;
  --ion-color-medium-rgb: 152, 154, 162;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255, 255, 255;
  --ion-color-medium-shade: #86888f;
  --ion-color-medium-tint: #a2a4ab;

  /** light **/
  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244, 244, 244;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0, 0, 0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;


  --ion-color-youtube: #ff0011;
  --ion-color-youtube-rgb: 255,0,17;
  --ion-color-youtube-contrast: #ffffff;
  --ion-color-youtube-contrast-rgb: 255,255,255;
  --ion-color-youtube-shade: #e0000f;
  --ion-color-youtube-tint: #ff1a29;

  --ion-color-google: #ff0011;
  --ion-color-google-rgb: 255,0,17;
  --ion-color-google-contrast: #ffffff;
  --ion-color-google-contrast-rgb: 255,255,255;
  --ion-color-google-shade: #e0000f;
  --ion-color-google-tint: #ff1a29;

  --ion-color-twitter: #5bbcff;
  --ion-color-twitter-rgb: 91,188,255;
  --ion-color-twitter-contrast: white;
  --ion-color-twitter-contrast-rgb: 0,0,0;
  --ion-color-twitter-shade: #50a5e0;
  --ion-color-twitter-tint: #6bc3ff;

  --ion-color-vimeo: #5bbcff;
  --ion-color-vimeo-rgb: 91,188,255;
  --ion-color-vimeo-contrast: white;
  --ion-color-vimeo-contrast-rgb: 0,0,0;
  --ion-color-vimeo-shade: #50a5e0;
  --ion-color-vimeo-tint: #6bc3ff;

  --ion-color-facebook: #1f00d1;
  --ion-color-facebook-rgb: 31,0,209;
  --ion-color-facebook-contrast: #ffffff;
  --ion-color-facebook-contrast-rgb: 255,255,255;
  --ion-color-facebook-shade: #1b00b8;
  --ion-color-facebook-tint: #351ad6;

  --ion-color-github: #000000;
  --ion-color-github-rgb: 0,0,0;
  --ion-color-github-contrast: #ffffff;
  --ion-color-github-contrast-rgb: 255,255,255;
  --ion-color-github-shade: #000000;
  --ion-color-github-tint: #1a1a1a;

}

.ion-color-youtube {
  --ion-color-base: var(--ion-color-youtube) !important;
  --ion-color-base-rgb: var(--ion-color-youtube-rgb) !important;
  --ion-color-contrast: var(--ion-color-youtube-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-youtube-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-youtube-shade) !important;
  --ion-color-tint: var(--ion-color-youtube-tint) !important;
}

.ion-color-google {
  --ion-color-base: var(--ion-color-google) !important;
  --ion-color-base-rgb: var(--ion-color-google-rgb) !important;
  --ion-color-contrast: var(--ion-color-google-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-google-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-google-shade) !important;
  --ion-color-tint: var(--ion-color-google-tint) !important;
}

.ion-color-twitter {
  --ion-color-base: var(--ion-color-twitter) !important;
  --ion-color-base-rgb: var(--ion-color-twitter-rgb) !important;
  --ion-color-contrast: var(--ion-color-twitter-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-twitter-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-twitter-shade) !important;
  --ion-color-tint: var(--ion-color-twitter-tint) !important;
}

.ion-color-vimeo {
  --ion-color-base: var(--ion-color-vimeo) !important;
  --ion-color-base-rgb: var(--ion-color-vimeo-rgb) !important;
  --ion-color-contrast: var(--ion-color-vimeo-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-vimeo-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-vimeo-shade) !important;
  --ion-color-tint: var(--ion-color-vimeo-tint) !important;
}

.ion-color-facebook {
  --ion-color-base: var(--ion-color-facebook) !important;
  --ion-color-base-rgb: var(--ion-color-facebook-rgb) !important;
  --ion-color-contrast: var(--ion-color-facebook-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-facebook-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-facebook-shade) !important;
  --ion-color-tint: var(--ion-color-facebook-tint) !important;
}

.ion-color-github {
  --ion-color-base: var(--ion-color-github) !important;
  --ion-color-base-rgb: var(--ion-color-github-rgb) !important;
  --ion-color-contrast: var(--ion-color-github-contrast) !important;
  --ion-color-contrast-rgb: var(--ion-color-github-contrast-rgb) !important;
  --ion-color-shade: var(--ion-color-github-shade) !important;
  --ion-color-tint: var(--ion-color-github-tint) !important;
}
~~~




# Color Generator
### Create custom color palettes for your app’s UI. Update a color’s hex values, check the demo app on the right to confirm, then copy and paste the generated code directly into your Ionic project.

[Ionic pages ion-datetime][Generacion de colores]

[Generacion de colores]:https://ionicframework.com/docs/theming/color-generator/

# 
#### 

~~~javascript
<app-header titulo="Fab"></app-header>

<ion-content>



<ion-fab vertical="bottom" horizontal="end" color="primary" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add-outline"></ion-icon>
    </ion-fab-button>

    <ion-fab-list side="top" >
        <ion-fab-button>
            <ion-icon name="logo-facebook" color="facebook"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
            <ion-icon name="logo-twitter" color="twitter"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
            <ion-icon name="logo-youtube" color="youtube"></ion-icon>
        </ion-fab-button>
    </ion-fab-list>

    <ion-fab-list side="start" >
        <ion-fab-button>
            <ion-icon name="logo-vimeo" color="vimeo"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
            <ion-icon name="logo-google" color="google"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
            <ion-icon name="logo-github" color="github"></ion-icon>
        </ion-fab-button>
    </ion-fab-list>

</ion-fab>

  <ion-list>
      <ion-item *ngFor="let item of data; let i = index">
          <ion-label>Item {{ i + 1}}</ion-label>
      </ion-item>
  </ion-list>

</ion-content>


<footer>
    <ion-toolbar color="twitter">
          <ion-title >Footer</ion-title>
    </ion-toolbar>
</footer>
~~~


# 


