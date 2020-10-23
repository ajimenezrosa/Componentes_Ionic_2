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

![](https://i.stack.imgur.com/6OhAg.png)

#### Fabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content. Fab should have one main fab-button. Fabs can also contain fab-lists which contain related buttons that show when the main fab button is clicked. The same fab container can contain several fab-list elements with different side values.

# 

## Usage

![](https://raw.githubusercontent.com/PraveenJP/ionic-fab/master/www/img/SS.PNG)


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

[Color Generator][Generacion de colores]

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


# ion-grid
![](https://www.lowi.es/blog/wp-content/uploads/2019/09/kiosco-online-screenshot.jpg)

### The grid is a powerful mobile-first flexbox system for building custom layouts.

### It is composed of three units — a grid, row(s) and column(s). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

### See the Responsive Grid documentation for more information.

# Usage
~~~html
<ion-grid>
  <ion-row>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6">
      ion-col [size="6"]
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3">
      ion-col [size="3"]
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col size="3">
      ion-col [size="3"]
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3">
      ion-col [size="3"]
    </ion-col>
    <ion-col size="3" offset="3">
      ion-col [size="3"] [offset="3"]
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
      <br>#
    </ion-col>
    <ion-col>
      ion-col
      <br>#
      <br>#
    </ion-col>
    <ion-col>
      ion-col
      <br>#
      <br>#
      <br>#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start">
      ion-col [start]
    </ion-col>
    <ion-col class="ion-align-self-center">
      ion-col [center]
    </ion-col>
    <ion-col class="ion-align-self-end">
      ion-col [end]
    </ion-col>
    <ion-col>
      ion-col
      <br>#
      <br>#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col>
      [start] ion-col
    </ion-col>
    <ion-col>
      [start] ion-col
    </ion-col>
    <ion-col class="ion-align-self-end">
      [start] ion-col [end]
    </ion-col>
    <ion-col>
      ion-col
      <br>#
      <br>#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      [center] ion-col
    </ion-col>
    <ion-col>
      [center] ion-col
    </ion-col>
    <ion-col>
      [center] ion-col
    </ion-col>
    <ion-col>
      ion-col
      <br>#
      <br>#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      [end] ion-col
    </ion-col>
    <ion-col class="ion-align-self-start">
      [end] ion-col [start]
    </ion-col>
    <ion-col>
      [end] ion-col
    </ion-col>
    <ion-col>
      ion-col
      <br>#
      <br>#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm>
      ion-col [size="12"] [size-sm]
    </ion-col>
    <ion-col size="12" size-sm>
      ion-col [size="12"] [size-sm]
    </ion-col>
    <ion-col size="12" size-sm>
      ion-col [size="12"] [size-sm]
    </ion-col>
    <ion-col size="12" size-sm>
      ion-col [size="12"] [size-sm]
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md>
      ion-col [size="12"] [size-md]
    </ion-col>
    <ion-col size="12" size-md>
      ion-col [size="12"] [size-md]
    </ion-col>
    <ion-col size="12" size-md>
      ion-col [size="12"] [size-md]
    </ion-col>
    <ion-col size="12" size-md>
      ion-col [size="12"] [size-md]
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3">
      ion-col [size="6"] [size-lg] [offset="3"]
    </ion-col>
    <ion-col size="3" size-lg>
      ion-col [size="3"] [size-lg]
    </ion-col>
  </ion-row>
</ion-grid>
~~~


# Properties
## fixed
| Description	| If true, the grid will have a fixed width based on the screen size.|
|------------------|--------------------|
|Attribute |	fixed |
|Type |	boolean |
|Default |	false |


# CSS Custom Properties
|Name |	Description |
|----------------|---------------|
|--ion-grid-padding|	Padding for the Grid|
|--ion-grid-padding-lg|	Padding for the Grid on lg screens|
|--ion-grid-padding-md|	Padding for the Grid on md screens|
|--ion-grid-padding-sm |	Padding for the Grid on sm screens|
|--ion-grid-padding-xl |	Padding for the Grid on xl screens|
|--ion-grid-padding-xs |	Padding for the Grid on xs screens|
|--ion-grid-width	| Width of the fixed Grid |
|--ion-grid-width-lg |	Width of the fixed Grid on lg screens|
|--ion-grid-width-md |	Width of the fixed Grid on md screens|
|--ion-grid-width-sm |	Width of the fixed Grid on sm screens|
|--ion-grid-width-xl |	Width of the fixed Grid on xl screens|
|--ion-grid-width-xs |	Width of the fixed Grid on xs screens|


# 

# ion-infinite-scroll

![](https://cdn-images-1.medium.com/max/1600/0*ADvLjzLzT7SELZDs.gif)

#### The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.

#### The expression assigned to the ionInfinite event is called when the user reaches that defined distance. When this expression has finished any and all tasks, it should call the complete() method on the infinite scroll instance.

## Infinite Scroll Content
#### The ion-infinite-scroll component has the infinite scroll logic. It requires a child component in order to display content. Ionic uses its ion-infinite-scroll-content component by default. This component displays the infinite scroll and changes the look depending on the infinite scroll's state. It displays a spinner that looks best based on the platform the user is on. However, the default spinner can be changed and text can be added by setting properties on the ion-infinite-scroll-content component.

## Custom Content
#### Separating the ion-infinite-scroll and ion-infinite-scroll-content components allows developers to create their own content components, if desired. This content can contain anything, from an SVG element to elements with unique CSS animations.

# Usage

htm coding for this components
~~~html
<ion-content>
  <ion-button (click)="toggleInfiniteScroll()" expand="block">
    Toggle Infinite Scroll
  </ion-button>

  <ion-list></ion-list>

  <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Loading more data...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
~~~

javascript coding example for this components.

~~~javascript
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'infinite-scroll-example',
  templateUrl: 'infinite-scroll-example.html',
  styleUrls: ['./infinite-scroll-example.css']
})
export class InfiniteScrollExample {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
~~~
# Properties
# 
## disabled
|   |      | 
|-----------------|--------------------|
|Description	 | If true, the infinite scroll will be hidden and scroll event listeners will be removed.

Set this to true to disable the infinite scroll from actively trying to receive new data while scrolling. This is useful when it is known that there is no more data that can be added, and the infinite scroll is no longer needed.|

|Attribute |	disabled |
|Type | 	boolean |
|Default |	false |

## position
|Description	 | The position of the infinite scroll element. The value can be either **top** or **bottom**.|
|Attribute |	position|
"Type |	"bottom" - "top"|
|Default |	'bottom'|

## threshold
|Description	|The threshold distance from the bottom of the content to call the infinite output event when scrolled. The threshold value can be either a percent, or in pixels. For example, use the value of 10% for the infinite output event to get called when the user has scrolled 10% from the bottom of the page. Use the value 100px when the scroll is within 100 pixels from the bottom of the page.|
|------------------|-----------------------|
|Attribute|	threshold|
|Type|	string|
|Default|	'15%'|

## Events
|Name |	Description|
|------------|-----------|
|ionInfinite |	Emitted when the scroll reaches the threshold distance. From within your infinite handler, you must call the infinite scroll's `complete()` method when your async operation has completed.|

## Methods
### complete
|Description	|Call complete() within the ionInfinite output event handler when your async operation has completed. For example, the loading state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request to add more items to a data list. Once the data has been received and UI updated, you then call this method to signify that the loading has completed. This method will change the infinite scroll's state from loading to enabled.|
|-------------|---------------------|
|Signature|	complete() => Promise<void>|

# 








# ion-input

![](https://user-images.githubusercontent.com/5426717/49756083-7e1c6080-fcb1-11e8-8fc9-efc41bd8fcba.png)

#### The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

#### It is meant for text ***type*** inputs only, such as "text", "password", "email", "number", "search", "tel", and "url". It supports all standard text input events including keyup, keydown, keypress, and more.

# Usage
~~~html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clearInput value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
~~~

# Properties
| accept |  |
|------------------|-----------------|
|Description	|If the value of the type attribute is "file", then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.|
|Attribute|	***accept***|
|Type|	string - undefined|


## autocapitalize
#
|Description	|Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.|
|----------|-------------------------|
|Attribute|	autocapitalize|
|Type|	string|
|Default|	'off'|

#autocomplete
|Description	|Indicates whether the value of the control can be automatically completed by the browser.|
|--------------------|---------------------|
|Attribute|	autocomplete|
|Type	| "on" - "off" - "name" - "honorific-prefix" - "given-name" - "additional-name" - "family-name" - "honorific-suffix" - "nickname" - "email" - "username" - "new-password" - "current-password" - "one-time-code" - "organization-title" - "organization" - "street-address" - "address-line1" - "address-line2" - "address-line3" - "address-level4" - "address-level3" - "address-level2" - "address-level1" - "country" - "country-name" - "postal-code" - "cc-name" - "cc-given-name" - "cc-additional-name" - "cc-family-name" - "cc-number" - "cc-exp" - "cc-exp-month" - "cc-exp-year" - "cc-csc" - "cc-type" - "transaction-currency" - "transaction-amount" - "language" - "bday" - "bday-day" - "bday-month" - "bday-year" - "sex" - "tel" - "tel-country-code" - "tel-national" - "tel-area-code" - "tel-local" - "tel-extension" - "impp" - "url" - "photo"|
|Default|	'off'|


## autocorrect
|Description	|Whether auto correction should be enabled when the user is entering/editing the text value.|
|Attribute|	autocorrect|
|Type|	"off" - "on"|
|Default|	'off'|
#

## autofocus
|Description	| This Boolean attribute lets you specify that a form control should have input focus when the page loads.|
|--------------------|--------------------------|
|Attribute|	autofocus|
|Type|	boolean|
|Default|	false|
#

## clearInput
|Description	|If true, a clear icon will appear in the input when there is a value. Clicking it clears the input.|
|-------------------|------------------|
|Attribute|	clear-input|
|Type|	boolean|
|Default|	false|

# 
## clearOnEdit
|Description	|If true, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.|
|-------------------|----------------------|
|Attribute|	clear-on-edit|
|Type|	boolean - undefined|
#
[theming]:https://ionicframework.com/docs/theming/basics

## color
|Description	|The color to use from your application's color palette. Default options are: **"primary"**, **"secondary"**, **"tertiary"**, **"success"**, **"warning"**, **"danger"**, **"light"**, **"medium"**, and **"dark"**. For more information on colors, see [theming][theming]|
|-------------------------|------------------------|
|Attribute|	color|
|Type |	string - undefined|
# 

## debounce
|Description	 |Set the amount of time, in milliseconds, to wait to trigger the ionChange event after each keystroke.|
|Attribute|	debounce|
|Type	number
Default|	0|

#
## disabled
|Description	|If true, the user cannot interact with the input.|
|--------------|-----------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|	false|

#

## enterkeyhint
|Description	|A hint to the browser for which enter key to display. Possible values: **"enter"**, **"done"**, **"go"**, **"next"**, **"previous"**, **"search"**, and **"send"**.|
|--------------------|--------------------------|
|Attribute|	enterkeyhint|
|Type|	"**done**" - **"enter"** - **"go"** - **"next"** - **"previous"** - **"search"** - **"send"** - **undefined**|
#
## inputmode
|Description	|A hint to the browser for which keyboard to display. Possible values: **"none", "text", "tel", "url", "email", "numeric", "decimal", and "search"**.|
|----------------------|----------------------|
|Attribute|	inputmode|
|Type|	"decimal"  "email"  "none"  "numeric"  "search"  "tel"  "text"  "url"  undefined|
#

## max
|Description	|The maximum value, which must not be less than its minimum (min attribute) value.|
|----------------|--------------------------|
|Attribute|	max|
|Type|	string - undefined|
# 

## maxlength
|Description	|If the value of the type attribute is **text, email, search, password, tel, or url**, this attribute specifies the maximum number of characters that the user can enter.|
|-------------------|---------------------------|
|Attribute |	maxlength"
|Type|	number - undefined|
# 

## min
|Description	|The minimum value, which must not be greater than its maximum (max attribute) value.|
|Attribute|	min|
|Type|	string - undefined|

#

## minlength

|Description	|If the value of the type attribute is **text, email, search, password, tel, or url**, this attribute specifies the minimum number of characters that the user can enter.|
|--------------------|---------------------|
|Attribute|	minlength|
|Type|	number - undefined|
# 

## mode
|Description	|The mode determines which platform styles to use.|
|------------------|-------------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

#

## multiple
|Description	|If true, the user can enter more than one value. This attribute applies when the type attribute is set to **"email"** or **"file"**, otherwise it is ignored.|
|----------------|------------------------|
|Attribute|	multiple|
|Type|	boolean - undefined|
#

## name
|Description	|The name of the control, which is submitted with the form data.|
|--------------|-----------------------------|
|Attribute|	name|
|Type|	string|
|Default|	this.inputId|
#

## pattern
|Description	|A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is **"text"**, **"search"**, **"tel"**, **"url"**, **"email"**, **"date"**, or **"password"**, otherwise it is ignored. When the type attribute is **"date"**, **pattern** will only be used in browsers that do not support the "date" input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.|
|---------------------|-------------------------|
|Attribute|	pattern|
|Type|	string - undefined|

#

## placeholder
|Description	|Instructional text that shows before the input has a value.|
|--------------|----------------------|
|Attribute|	placeholder|
|Type|	null - string - undefined|
#

## readonly
|Description	|If true, the user cannot modify the value.|
|-----------|----------------|
|Attribute|	readonly|
|Type|	boolean|
|Default|	false|
#

## required
|Description	|If true, the user must fill in a value before submitting a form.|
|-------------|---------------------|
|Attribute|	required|
|Type|	boolean|
|Default|	false|
#

## size
|Description	|The initial size of the control. This value is in pixels unless the value of the type attribute is **"text"** or **"password"**, in which case it is an integer number of characters. This attribute applies only when the **type** attribute is set to **"text"**, **"search"**, **"tel"**, **"url"**, **"email"**, or **"password"**, otherwise it is ignored.|
|-----------------|----------------------------|
|Attribute|	size|
|Type|	number - undefined|

#

## spellcheck
|Description	|If true, the element will have its spelling and grammar checked.|
|--------------|--------------------------|
|Attribute|	spellcheck|
|Type|	boolean|
|Default|	false|
# 

## step
|Description	|Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: **"any"** or a positive floating point number.|
|------------------|------------------------|
|Attribute|	step|
|Type|	string - undefined|
# 

## type
|Description	|The type of control to display. The default type is text.|
|-------------------|---------------------------|
|Attribute|	type|
|Type|	"date" - "datetime-local" - "email" - "month" - "number" - "password" - "search" - "tel" - "text" - "time" - "url" - "week"|
|Default|	'text'|
# 

## value
|Description	 |The value of the input.|
|-----------------|----------------------|
|Attribute|	value|
|Type|	null - number - string - undefined|
|Default|	''|
# 

## Events
|Name|	Description|
|---------------|-----------------------|
|ionBlur|	Emitted when the input loses focus.|
|ionChange|	Emitted when the value has changed.|
|ionFocus|	Emitted when the input has focus.|
|ionInput|	Emitted when a keyboard input occurred.|

#

## Methods
## getInputElement 
|Description	|Returns the native **< input>** element used under the hood.|
|-----------------------|----------------------|
|Signature|	getInputElement() => Promise<HTMLInputElement>|
#

## setFocus
|Description	|Sets focus on the native input in ion-input. Use this method instead of the global input.focus().|
|-------------------|----------------------|
|Signature|	setFocus() => Promise<void>|
#

## CSS Custom Properties
|Name|	Description|
|-----------------|-------------------------|
|--background|	Background of the input|
|--color|	Color of the input text|
|--padding-bottom	| Bottom padding of the input|
|--padding-end|	Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input|
|--padding-start|	Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input|
|--padding-top|	Top padding of the input|
|--placeholder-color|	Color of the input placeholder text|
|--placeholder-font-style|	Font style of the input placeholder text|
|--placeholder-font-weight|	Font weight of the input placeholder text|
|--placeholder-opacity|	Opacity of the input placeholder text|


# Using Forms

![](https://jsmobiledev.com/assets/img/create-song-form.png)



#### In this example we put a code in which we create a form in Ionic Angular and validate it.

#### This form validates an object called user in the form's .ts file.
~~~html

  <form  #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">

    <ion-list-header>
      <ion-label>Formulario Valido: {{formulario.valid}}</ion-label>
    </ion-list-header>
  
    <ion-item>
        <ion-label>Email:</ion-label>
        <ion-input type="email" 
        required
        name="email"
        [(ngModel)]="usuario.email"
        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
        placeholder="Email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label>Password:</ion-label>
        <ion-input type="password" 
                    name="password"
                    [(ngModel)]="usuario.password"
                    required
                    placeholder="Password!" ></ion-input>
    </ion-item>

    <ion-button [disabled]="formulario.invalid"
                type="submit" 
                expand="block">
          Guardar
    </ion-button>

  </form>

~~~

#### Email validation in the ion-input field, using the following instruction, you validate that the structure of the email field is that of a real email.
~~~javascript
      pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
~~~


#### This would be the code used on the side of the ts file.
#### it only occupies us with an object called user and the event called to validate the form from our button.

#### Note: this botton is configured as a normal html submit

~~~javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Alejandro';

  usuario = {
    email: '',
    password: ''

  }

  constructor() { }

  ngOnInit() {
  }


  onSubmit(formulario: ngForm) {
    
    // to get information from object.
    console.log("submit", this.usuario);

    //I can get informacion from the forms too.abs
    console.log(formulario);

  }

}

~~~


# 

# Ion List


https://jsonplaceholder.typicode.com/users


~~~javascript
//import from @angular/common
import { HttpClientModule } from '@angular/common/http';

//set de HttpClientModule on app.module.ts imports
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpClientModule
    
    ]
~~~
# 
# ion-item-sliding

#### A sliding item contains an item that can be dragged to reveal buttons. It requires an item component as a child. All options to reveal should be placed in the item options element.
#

# Swipe Direction
#### By default, the buttons are placed on the **"end"** side. This means that options are revealed when the sliding item is swiped from end to start, i.e. from right to left in LTR, but from left to right in RTL. To place them on the opposite side, so that they are revealed when swiping in the opposite direction, set the side attribute to **"start"** on the ***ion-item-options*** element. Up to two ion-item-options can be used at the same time in order to reveal two different sets of options depending on the swiping direction.
#

# Options Layout
#### By default if an icon is placed with text in the item option, it will display the icon on top of the text, but the icon slot can be changed to any of the following to position it in the option.

|Slot|	Description|
|------------|------------------|
|start|	In LTR, start is the left side of the button, and in RTL it is the right|
|top|	The icon is above the text|
|icon-only|	The icon is the only content of the button|
|bottom|	The icon is below the text|
|end|	In LTR, end is the right side of the button, and in RTL it is the left|
#

# Expandable Options
#### Options can be expanded to take up the full width of the item if you swipe past a certain point. This can be combined with the ionSwipe event to call methods on the class.

# Usage
~~~html
<ion-list>
  <!-- Sliding item with text options on both sides -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option (click)="favorite(item)">Favorite</ion-item-option>
      <ion-item-option color="danger" (click)="share(item)">Share</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>Item Options</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option (click)="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with expandable options on both sides -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="danger" expandable>
        Delete
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>Expandable Options</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option color="tertiary" expandable>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Multi-line sliding item with icon options on both sides -->
  <ion-item-sliding id="item100">
    <ion-item href="#">
      <ion-label>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </ion-label>
      <ion-note slot="end">
        10:45 AM
      </ion-note>
    </ion-item>

    <ion-item-options side="start">
      <ion-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-item-option>
      <ion-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon start options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Start
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon end options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons End
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon top options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Top
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon bottom options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Bottom
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
~~~

# 

# Properties
### disabled
|Description	|If true, the user cannot interact with the sliding item.|
|----------------|----------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|	false|

#

# Events
|Name|	Description|
|--------------|-----------------|
|ionDrag	|Emitted when the sliding position changes.|
# 
# Methods
## close
|Description	|Close the sliding item. Items can also be closed from the List.|
|--------------|----------------|
|Signature|	close() => Promise<void>|

## closeOpened
|Description	|Close all of the sliding items in the list. Items can also be closed from the List.|
|------------------|-------------------|
|Signature|	closeOpened() => Promise<boolean>|
# 

## getOpenAmount
|Description	|Get the amount the item is open in pixels.|
|------------|------------------|
|Signature|	getOpenAmount() => Promise<number>|
# 

## getSlidingRatio
|Description	|Get the ratio of the open amount of the item compared to the width of the options. If the number returned is positive, then the options on the right side are open. If the number returned is negative, then the options on the left side are open. If the absolute value of the number is greater than 1, the item is open more than the width of the options.|
|-----------|----------------|
|Signature|	getSlidingRatio() => Promise<number>|

#
# open
|Description	|Open the sliding item.|
|--------------|---------------------|
|Signature|	open(side: Side | undefined) => Promise<void>|



#
![](https://www.positronx.io/wp-content/uploads/2019/12/ionic-list-8060-02.png)


~~~html
<app-header titulo="List - sliding"></app-header>

<ion-content>

  <ion-list>


  <ion-item-sliding *ngFor="let user of usuarios | async">
    <ion-item-options side="start">
      <ion-item-option (click)="favorite(user)">
          <ion-icon name="star-outline"></ion-icon>
      </ion-item-option>
      <ion-item-option color="secondary" (click)="share(user)">
          <ion-icon name="share-outline"></ion-icon>
      </ion-item-option>
    </ion-item-options>

         <ion-item >
        <ion-label>
          <h3>{{ user.name}}</h3>
          <p>{{ user.email}}</p>
        </ion-label>
        <ion-label slot="end" class="ion-text-end text-small" >{{user.phone}}</ion-label>
      </ion-item>

    <ion-item-options side="end">
      <ion-item-option color="danger" (click)="trash(user)">
          <ion-icon name="trash-outline"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  
      <ion-item *ngFor="let user of usuarios | async">
        <ion-label>
          <h3>{{ user.name}}</h3>
          <p>{{ user.email}}</p>
        </ion-label>
        <ion-label slot="end" class="ion-text-end text-small" >{{user.phone}}</ion-label>
      </ion-item>
  </ion-list>

</ion-content>

~~~

file .ts

~~~javascript
@ViewChild(IonList) ionlist: IonList; 
        .
        .
        .
        share(user){
          console.log('Share:' , user);
          this.ionlist.closeSlidingItems();
        }

        favorite(user) {
          console.log('Favorite:' , user);
          this.ionlist.closeSlidingItems();

        }
        trash(user) {

          console.log('delete:' , user);
          this.ionlist.closeSlidingItems();

        }

~~~

# 

# ion-reorder

![](https://www.freakyjolly.com/wp-content/uploads/2019/03/Ionic-4-ion-reorder.gif)

#### Reorder is a component that allows an item in a group of items to be dragged to change its order within that group. It must be used within an ion-reorder-group to provide a visual drag and drop interface.

#### ion-reorder is the anchor used to drag and drop the items inside of the ion-reorder-group. See the Reorder Group for more information on how to complete the reorder operation.

# Usage
~~~html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<ion-reorder-group disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <ion-item>
    <ion-label>
      Item 1
    </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label>
      Item 2
    </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- Default reorder icon, start aligned items -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label>
      Item 3
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label>
      Item 4
    </ion-label>
  </ion-item>

  <!-- Custom reorder icon end items -->
  <ion-item>
    <ion-label>
      Item 5
    </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label>
      Item 6
    </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <ion-reorder>
    <ion-item>
      <ion-label>
        Item 7
      </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label>
        Item 8
      </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
~~~
# 

# CSS Shadow Parts
|Name|	Description |
|---------------|----------------|
|icon|	The icon of the reorder handle (uses ion-icon).|


Practice:
Html file.
~~~html
<ion-header>
  <ion-toolbar>

    <ion-buttons slot="start">
        <ion-back-button defaultHref="/" color="primary"></ion-back-button>
    </ion-buttons>

    <ion-title color="primary" >List - Reorder</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

    <ion-list>
      <ion-reorder-group disabled="false"
            (ionItemReorder)="doReorder($event)"
                  >

        <ion-item *ngFor="let personaje of personajes">
              <ion-label>{{  personaje  }}</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
    </ion-reorder-group>
    </ion-list>

</ion-content>

~~~

javascript file
~~~javascript
                  .
                  .
                  .
                  .
                  .
                  .
  personajes = ["Aquaman", "Superman","Batman","Mujer Maravilla","Flash","Iron Fist","Robin"];
                  .
                  .
                  .
                  .
                  .
                  .
doReorder(event) {
    console.log(event);
    //con esta instruccion cortamos un elemento delarreglo
    //with this instruction we cut an element of the array
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];

    //con esta instruccion insertamos en el arreglo el elemento cortado
    //with this instruction we insert the cut element into the arrangement
    this.personajes.splice(event.detail.to, 0, itemMover);
    
    
    event.detail.complete();

    console.log(this.personajes);
  }
~~~


# 


# ion-loading

![](https://hoshcoding.com/storage/posts_thumbs/post2019_5cbb40dce636d.jpg)

#### An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting showBackdrop: false upon creation.

## Dismissing
#### The loading indicator can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the duration of the loading options. To dismiss the loading indicator after creation, call the dismiss() method on the loading instance. The onDidDismiss function can be called to perform an action after the loading indicator is dismissed.

## Customization
#### Loading uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a higher specificity selector.

#### We recommend passing a custom class to cssClass in the create method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the Usage section for an example of how to pass a class using cssClass.

~~~css
/* DOES NOT WORK - not specific enough */
ion-loading {
  color: green;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class {
  color: green;
}
~~~
# 

#### Any of the defined CSS Custom Properties can be used to style the Loading without needing to target individual elements:
~~~css
.my-custom-class {
  --background: #222;
  --spinner-color: #fff;

  color: #fff;
}
~~~
# 

#### If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read Style Placement in the Angular section below for more information.

# Usage
~~~javascript
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'loading-example',
  templateUrl: 'loading-example.html',
  styleUrls: ['./loading-example.css']
})
export class LoadingExample {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
~~~
# 

## Style Placement
#### In Angular, the CSS of a specific page is scoped only to elements of that page. Even though the Loading can be presented from within a page, the ion-loading element is appended outside of the current page. This means that any custom styles need to go in a global stylesheet file. In an Ionic Angular starter this can be the src/global.scss file or you can register a new global style file by adding to the styles build option in angular.json.

# Properties
## animated
|Description	|If true, the loading indicator will animate.|
|------------------|----------------------|
|Attribute|	animated|
|Type|	boolean|
|Default|	true|

## backdropDismiss
|Description	|If true, the loading indicator will be dismissed when the backdrop is clicked.|
|-------------------------|---------------------------------|
|Attribute|	backdrop-dismiss|
|Type|	boolean|
|Default|	false|

## cssClass
|Description	|Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.|
|------------------|-----------------------|
|Attribute|	css-class|
|Type|	string - string[] - undefined|

## duration
|Description	|Number of milliseconds to wait before dismissing the loading indicator.|
|----------------|---------------------|
|Attribute|	duration|
|Type|	number|
|Default|	0|

## enterAnimation
|Description	|Animation to use when the loading indicator is presented.|
|-------------------|---------------------|
|Type|	((baseEl: any, opts?: any) => Animation) - undefined|

## keyboardClose
|Description	|If true, the keyboard will be automatically dismissed when the overlay is presented.|
|----------------|------------------|
|Attribute|	keyboard-close|
|Type|	boolean|
|Default|	true|

## leaveAnimation
|Description	|Animation to use when the loading indicator is dismissed.|
|---------------|-----------------|
|Type|	((baseEl: any, opts?: any) => Animation) - undefined|

## message
|Description	|Optional text content to display in the loading indicator.|
|-----------------|----------------------|
|Attribute|	message|
|Type|	IonicSafeString - string - undefined|

## mode

|Description| The mode determines which platform styles to use.|
|---------------------|-------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

## showBackdrop
|Description	|If true, a backdrop will be displayed behind the loading indicator.|
|--------------------|-------------------|
|Attribute|	show-backdrop|
|Type|	boolean|
|Default|	true|

## spinner
|Description	|The name of the spinner to display.|
|--------------------|-----------------------|
|Attribute|	spinner|
|Type|	"bubbles" - "circles" - "circular" - "crescent" - "dots" - "lines"  "lines-small" - null - undefined|

## translucent
|Description	|If true, the loading indicator will be translucent. Only applies when the mode is "ios" and the device supports backdrop-filter.|
|-------------------|----------------------|
|Attribute|	translucent|
|Type|	boolean|
|Default|	false|

## Events
|Name|	Description|
|ionLoadingDidDismiss|	Emitted after the loading has dismissed.|
|ionLoadingDidPresent	|Emitted after the loading has presented.|
|ionLoadingWillDismiss|	Emitted before the loading has dismissed.|
|ionLoadingWillPresent|	Emitted before the loading has presented.|

# Methods
## dismiss
|Description	|Dismiss the loading overlay after it has been presented.|
|-----------------|------------------------|
|Signature|	dismiss(data?: any, role?: string | undefined) => Promise<boolean>|
## onDidDismiss
|Description	|Returns a promise that resolves when the loading did dismiss.|
|--------------------|------------------|
|Signature|	onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>|

## onWillDismiss
|Description	|Returns a promise that resolves when the loading will dismiss.|
|---------------------------|-------------------|
|Signature|	onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>|
## present
|Description	|Present the loading overlay after it has been created.|
|---------------------------|---------------------|
|Signature|	present() => Promise<void>|
# 
# CSS Custom Properties
|Name|	Description|
|------------|---------------|
|--backdrop-opacity|	Opacity of the backdrop|
|--background|	Background of the loading dialog|
|--height	|Height of the loading dialog|
|--max-height|	Maximum height of the loading dialog|
|--max-width|	Maximum width of the loading dialog|
|--min-height|	Minimum height of the loading dialog|
|--min-width|	Minimum width of the loading dialog|
|--spinner-color|	Color of the loading spinner|
|--width|	Width of the loading dialog|

# 
# 


# ion-menu
![](https://i.ytimg.com/vi/I82_roQSgco/maxresdefault.jpg)
#### The Menu component is a navigation drawer that slides in from the side of the current view. By default, it slides in from the left, but the side can be overridden. The menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types. The menu element should be a sibling to the root content element. There can be any number of menus attached to the content. These can be controlled from the templates, or programmatically using the MenuController.

# Usage
~~~html
<ion-menu side="start" menuId="first" contentId="main">
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Start Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-title>Custom Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-menu side="end" type="push" contentId="main">
  <ion-header>
    <ion-toolbar color="danger">
      <ion-title>End Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-router-outlet id="main"></ion-router-outlet>
~~~
~~~javascript
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'menu-example.html',
  styleUrls: ['./menu-example.css'],
})
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
~~~

~~~css
.my-custom-menu {
  --width: 500px;
}
~~~

# Properties
## contentId
|Description	|The content's id the menu should use.|
|------------------|-----------------------|
|Attribute|	content-id|
|Type|	string - undefined|

## disabled
|Description|If true, the menu is disabled.|
|-------------------|-------------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|	false|

## maxEdgeStart
|Description	|The edge threshold for dragging the menu open. If a drag/swipe happens over this value, the menu is not triggered.|
|--------------|-----------------|
|Attribute|	max-edge-start|
|Type|	number|
|Default|	50|

## menuId
|Description|An id for the menu.|
|--------------|----------------|
|Attribute|	menu-id|
|Type|	string - undefined|

## side
|Description	|Which side of the view the menu should be placed.|
|------------------|-------------------|
|Attribute|	side|
|Type|	"end" - "start"|
|Default|	'start'|

## swipeGesture
|Description	|If true, swiping the menu is enabled.|
|-----------------|----------------------|
|Attribute|	swipe-gesture|
|Type|	boolean|
|Default|	true|

## type
|Description	|The display type of the menu. Available options: **"overlay"**, **"reveal"**, **"push"**.|
|-----------------------|-----------------------|
|Attribute|	type|
|Type|	string - undefined|

# Events
|Name|	Description|
|ionDidClose|	Emitted when the menu is closed.|
|ionDidOpen|	Emitted when the menu is open.|
|ionWillClose|	Emitted when the menu is about to be closed.|
|ionWillOpen|	Emitted when the menu is about to be opened.|

# Methods
## close
|Description	|Closes the menu. If the menu is already closed or it can't be closed, it returns false.|
|--------------------|-------------------|
|Signature|	close(animated?: boolean) => Promise<boolean>|
## isActive
|Description	|Returns true is the menu is active. A menu is active when it can be opened or closed, meaning it's enabled and it's not part of a ion-split-pane.|
|----------------------|----------------------|
|Signature|	isActive() => Promise<boolean>|

## isOpen
|Description	|Returns true is the menu is open.|
|---------------------|-------------------|
|Signature|	isOpen() => Promise<boolean>|

## open
|Description	|Opens the menu. If the menu is already open or it can't be opened, it returns false.|
|-------------------|-----------------|
|Signature|	open(animated?: boolean) => Promise<boolean>|

## setOpen
|Description	|Opens or closes the button. If the operation can't be completed successfully, it returns false.|
|-----------------|------------------|
|Signature|	setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>|

## toggle
|Description	|Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it. If the operation can't be completed successfully, it returns false.|
|-------------------|-----------------|
|Signature|	toggle(animated?: boolean) => Promise<boolean>|

# CSS Shadow Parts
|Name|	Description|
|backdrop|	The backdrop that appears over the main content when the menu is open.|
|container|	The container for the menu content.|


# CSS Custom Properties
|Name|	Description|
|----------------|------------------|
|--background|	Background of the menu|
|--height|	Height of the menu|
|--max-height|	Maximum height of the menu|
|--max-width|	Maximum width of the menu|
|--min-height|	Minimum height of the menu|
|--min-width|	Minimum width of the menu|
|--width|	Width of the menu|

# 


#



# ion-modal
|Ion Modal| Ion Modal| Ion Modal |
|----------------------------|-------------------|-------------------|
|![](https://ionicframework.com/blog/wp-content/uploads/2020/08/unnamed.gif)|![](https://ionicframework.com/blog/wp-content/uploads/2020/08/unnamed.gif)|![](https://ionicframework.com/blog/wp-content/uploads/2020/08/unnamed.gif)|
# 

#### A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.

## Dismissing
#### The modal can be dismissed after creation by calling the dismiss() method on the modal controller. The onDidDismiss function can be called to perform an action after the modal is dismissed.

## Customization
#### Modal uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a higher specificity selector.

#### We recommend passing a custom class to cssClass in the create method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the Usage section for an example of how to pass a class using cssClass.
~~~css
/* DOES NOT WORK - not specific enough */
.modal-wrapper {
  background: #222;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .modal-wrapper {
  background: #222;
}
~~~

#### Any of the defined CSS Custom Properties can be used to style the Modal without needing to target individual elements:
~~~css
.my-custom-class {
  --background: #222;
}
~~~

#### If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read Style Placement in the Angular section below for more information.

# Usage
~~~javascript
import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';

export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
  );
};
~~~

## Swipeable Modals
#### Modals in iOS mode have the ability to be presented in a card-style and swiped to close. The card-style presentation and swipe to close gesture are not mutually exclusive, meaning you can pick and choose which features you want to use. For example, you can have a card-style modal that cannot be swiped or a full sized modal that can be swiped.

~~~
Card style modals when running on iPhone-sized devices do not have backdrops. As a result, the --backdrop-opacity variable will not have any effect.
~~~
~~~javascript
const App: React.FC = () => {
  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet ref={routerRef}>
          <Route path="/home" render={() => <Home router={routerRef.current} />}  exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

...

interface HomePageProps {
  router: HTMLIonRouterOutletElement | null;
}

const Home: React.FC<HomePageProps> = ({ router }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    ...

    <IonModal
      isOpen={showModal}
      cssClass='my-custom-class'
      swipeToClose={true}
      presentingElement={router || undefined}
      onDidDismiss={() => setShowModal(false)}>
      <p>This is modal content</p>
    </IonModal>

    ...
  );
};
~~~

#### In most scenarios, setting a ref on IonRouterOutlet and passing that ref's current value to presentingElement is fine. In cases where you are presenting a card-style modal from within another modal, you should pass in the top-most ion-modal ref as the presentingElement.
~~~tsx
<IonModal
  ref={firstModalRef}
  isOpen={showModal}
  cssClass='my-custom-class'
  swipeToClose={true}
  presentingElement={router || undefined}
  onDidDismiss={() => setShowModal(false)}>
    <p>This is modal content</p>
    <IonButton onClick={() => setShow2ndModal(true)}>Show 2nd Modal</IonButton>
    <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
</IonModal>
<IonModal
  isOpen={show2ndModal}
  cssClass='my-custom-class'
  presentingElement={firstModalRef.current}
  onDidDismiss={() => setShow2ndModal(false)}>
  <p>This is more modal content</p>
  <IonButton onClick={() => setShow2ndModal(false)}>Close Modal</IonButton>
</IonModal>
~~~

# Properties
## animated
|Description	|If true, the modal will animate.|
|-------------------------|--------------------|
|Attribute|	animated|
|Type|	boolean|
|Default|	true|

## backdropDismiss
|Description	|If true, the modal will be dismissed when the backdrop is clicked.|
|-----------------------|---------------------------|
|Attribute|	backdrop-dismiss|
|Type|	boolean|
|Default|	true|
#
## component
|Description	|The component to display inside of the modal.|
|---------------------------|---------------------|
|Attribute|	component|
|Type|	Function - HTMLElement - null - string|
#
## componentProps
|Description	|The data to pass to the modal component.|
|----------------------|----------------------|
|Type|	undefined - { [key: string]: any; }|
#
## cssClass
|Description	|Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.|
|------------------------|-------------------------------|
|Attribute|	css-class|
|Type|	string - string[] - undefined|
#
## enterAnimation
|Description	|Animation to use when the modal is presented.|
|------------------------|----------------------------|
|Type|	((baseEl: any, opts?: any) => Animation) - undefined|
#
## keyboardClose
|Description|If true, the keyboard will be automatically dismissed when the overlay is presented.|
|----------------------|--------------------------|
|Attribute|	keyboard-close|
|Type|	boolean|
|Default|	true|
#
## leaveAnimation
|Description	|Animation to use when the modal is dismissed.|
|--------------------|----------------------|
|Type|	((baseEl: any, opts?: any) => Animation) - undefined|

#
# mode
|Description|The mode determines which platform styles to use.|
|----------------|-------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

## presentingElement
|Description|The element that presented the modal. This is used for card presentation effects and for stacking multiple modals on top of each other. Only applies in iOS mode.|
|------------------|----------------------|
|Type|	HTMLElement - undefined|

# showBackdrop
|Description	|If true, a backdrop will be displayed behind the modal.|
|------------------------|---------------------|
|Attribute|	show-backdrop|
|Type|	boolean|
|Default|	true|

## swipeToClose
|Description	|If true, the modal can be swiped to dismiss. Only applies in iOS mode.|
|----------------------|--------------------|
|Attribute|	swipe-to-close|
|Type|	boolean|
|Default|	false|

# Events
|Name|	Description|
|--------------|-----------------|
|ionModalDidDismiss|	Emitted after the modal has dismissed.|
|ionModalDidPresent|	Emitted after the modal has presented.|
|ionModalWillDismiss|	Emitted before the modal has dismissed.|
|ionModalWillPresent|	Emitted before the modal has presented.|

# Methods
## dismiss
|Description	|Dismiss the modal overlay after it has been presented.|
|----------------------|--------------------|
|Signature|	dismiss(data?: any, role?: string - undefined) => Promise<boolean>|

## onDidDismiss
|Description	|Returns a promise that resolves when the modal did dismiss.|
|--------------------|-----------------------|
|Signature|	onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>|

## onWillDismiss
|Description	|Returns a promise that resolves when the modal will dismiss.|
|--------------------------|-------------------------|
|Signature|	onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>|
#
## present
|Description	|Present the modal overlay after it has been created.|
|----------------------------|-----------------------------|
|Signature|	present() => Promise<void>|

# CSS Custom Properties
|Name|	Description|
|--backdrop-opacity|	Opacity of the backdrop|
|--background|	Background of the modal content|
|--border-color|	Border color of the modal content|
|--border-radius|	Border radius of the modal content|
|--border-style|	Border style of the modal content|
|--border-width|	Border width of the modal content|
|--height|	Height of the modal|
|--max-height|	Maximum height of the modal|
|--max-width|	Maximum width of the modal|
|--min-height|	Minimum height of the modal|
|--min-width|	Minimum width of the modal|
|--width|	Width of the modal|
#
#


#### An interesting example would be how we can pass parameters from one page to another in our Modal.

#### For the same we have an example of the code that shows us how we can send parameters to our Modal info page.

~~~javascript
 async MostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'Alejandro',
        pais: 'Republica Dominicana',
        email: 'ja.jimenezrosa@gmail.com'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);

  }
~~~

### An interesting data is that we can extract the data in two different ways.
### Using the onDidDismiss and the onWillDismiss the difference of these two modes is the following.
- the onDidDismiss is executed after closing the child form
- the onWillDismiss runs just before closing the child form

### On the side of the info modal we will have the following code when we exit which sends us this data that can be captured on the screen where we call the modal.

~~~javascript
  gooutwitharguments() {
    this.modalCtrl.dismiss({
      nombre: 'Oscar',
      pais: 'Espana',
      email: 'oscarSampel@gmail.com' 
    });
  }
~~~



