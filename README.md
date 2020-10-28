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
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.html',
  styleUrls: ['./modal-example.css']
})
export class ModalExample {
  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
~~~

## Swipeable Modals
#### Modals in iOS mode have the ability to be presented in a card-style and swiped to close. The card-style presentation and swipe to close gesture are not mutually exclusive, meaning you can pick and choose which features you want to use. For example, you can have a card-style modal that cannot be swiped or a full sized modal that can be swiped.

~~~
Card style modals when running on iPhone-sized devices do not have backdrops. As a result, the --backdrop-opacity variable will not have any effect.
~~~
~~~javascript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-page',
})
export class ModalPage {

  constructor() {}

}

...
async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });
  return await modal.present();
}
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
|--------------|----------------------|
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

#


#


# ion-popover

|Ion Modal| Ion Modal| Ion Modal |
|----------------------------|-------------------|-------------------|
|![](https://3.bp.blogspot.com/-261P9kkkHvQ/WSBdCjW_plI/AAAAAAAAEq4/6H2WHK4p-44eERjcPCNhAqwnZXtnuYtQgCLcB/s640/popover1.png)|![](https://i.stack.imgur.com/7T6b1.png)|![](https://static.javatpoint.com/tutorial/ionic/images/ionic-popover2.png)|

#### A Popover is a dialog that appears on top of the current page. It can be used for anything, but generally it is used for overflow actions that don't fit in the navigation bar.

## Presenting
#### To present a popover, call the present method on a popover instance. In order to position the popover relative to the element clicked, a click event needs to be passed into the options of the the present method. If the event is not passed, the popover will be positioned in the center of the viewport.

## Customization
#### Popover uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a higher specificity selector.

#### We recommend passing a custom class to cssClass in the create method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the Usage section for an example of how to pass a class using cssClass.
~~~Scss
/* DOES NOT WORK - not specific enough */
.popover-content {
  background: #222;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .popover-content {
  background: #222;
}
~~~

#### Any of the defined CSS Custom Properties can be used to style the Popover without needing to target individual elements:
~~~scss
.my-custom-class {
  --background: #222;
}
~~~~
~~~
If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read Style Placement in the Angular section below for more information.
~~~

# Usage
~~~javascript
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'popover-example',
  templateUrl: 'popover-example.html',
  styleUrls: ['./popover-example.css']
})
export class PopoverExample {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
~~~

# Properties
## animated
|Description	|If true, the popover will animate.|
|-------------------|------------------------|
|Attribute|	animated|
|Type|	boolean|
|Default|	true|


## backdropDismiss
|Description|If true, the popover will be dismissed when the backdrop is clicked.|
|---------------------|---------------------------|
|Attribute|	backdrop-dismiss|
|Type|	boolean|
|Default|	true|

# component
|Description	|The component to display inside of the popover.|
|-----------------------|---------------------------|
|Attribute|	component|
|Type"|	Function - HTMLElement - null - string|

## componentProps
|Description	|The data to pass to the popover component.|
|--------------------------|--------------------------|
|Type|	undefined - { [key: string]: any; }|

## cssClass
|Description	|Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.|
|---------------------|------------------------|
|Attribute|	css-class|
|Type|	string - string[] - undefined|

## enterAnimation
|Description|Animation to use when the popover is presented.|
|----------------|-----------------------|
|Type|	((baseEl: any, opts?: any) => Animation) - undefined|

## event
|Description|The event to pass to the popover animation.|
|----------------|---------------------|
|Attribute|	event|
|Type|	any|

## keyboardClose
|Description|If true, the keyboard will be automatically dismissed when the overlay is presented.|
|--------------|------------------|
|Attribute|	keyboard-close|
|Type|	boolean|
|Default|	true|

## leaveAnimation
|Description|Animation to use when the popover is dismissed.|
|-----------------------|----------------------|
|Type|	((baseEl: any, opts?: any) => Animation) - undefined|

## mode
|Description|The mode determines which platform styles to use.|
|-------------------|-----------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

## showBackdrop
|Description|If true, a backdrop will be displayed behind the popover.|
|-----------------|---------------------|
|Attribute|	show-backdrop|
|Type|	boolean|
|Default|	true|

# translucent
|Description|If true, the popover will be translucent. Only applies when the mode is "ios" and the device supports backdrop-filter.|
|----------------------|------------------------|
|Attribute|	translucent|
|Type|	boolean|
|Default|	false|

# Events
|Name|	Description|
|ionPopoverDidDismiss|	Emitted after the popover has dismissed.|
|ionPopoverDidPresent|	Emitted after the popover has presented.|
|ionPopoverWillDismiss|	Emitted before the popover has dismissed.|
|ionPopoverWillPresent|	Emitted before the popover has presented.|

# Methods
## dismiss
|Description	|Dismiss the popover overlay after it has been presented.|
|---------------|-----------------|
|Signature|	dismiss(data?: any, role?: string | undefined) => Promise<boolean>|

## onDidDismiss
|Description	|Returns a promise that resolves when the popover did dismiss.|
|----------------|-------------------|
|Signature|	onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>|

## onWillDismiss
|Description	|Returns a promise that resolves when the popover will dismiss.|
|---------------------|--------------------|
|Signature|	onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>|

## present
|Description	|Present the popover overlay after it has been created.|
|----------------------|--------------------------|
|Signature|	present() => Promise<void>|

# CSS Custom Properties
|Name|	Description|
|--backdrop-opacity|	Opacity of the backdrop|
|--background|	Background of the popover|
|--box-shadow|	Box shadow of the popover|
|--height|	Height of the popover|
|--max-height|	Maximum height of the popover|
|--max-width|	Maximum width of the popover|
|--min-height|	Minimum height of the popover|
|--min-width|	Minimum width of the popover|
|--width|	Width of the popover|

# 

# We will add our example code in which we display popover in three different places on a screen.




Popover code on ower first page.

~~~htm
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>

    <ion-title color="primary">popover</ion-title>


  <ion-buttons slot="end" >
      <ion-button (click)="presentPopover($event)">
          <ion-icon slot="icon-only" name="person-outline"></ion-icon>
      </ion-button>
  </ion-buttons>


  </ion-toolbar>


</ion-header>

<ion-content>
    <ion-button (click)="presentPopover($event)" expand="block">Popover</ion-button>
</ion-content>


<ion-footer>

<ion-toolbar>

  <ion-buttons slot="start" >
      <ion-button (click)="presentPopover($event)">
          <ion-icon slot="icon-only" name="person-outline"></ion-icon>
      </ion-button>
  </ion-buttons>



  <ion-tittle  >Footer</ion-tittle>
</ion-toolbar>
</ion-footer>

~~~

into de ts files we have to put the following code.abs
~~~javascript
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: false

    });
    await popover.present();
    const { data } = await  popover.onWillDismiss();

    console.log(data);
  }
~~~

In order to create the popover page.  we most create a compoenent in witsh we are going to display the data.abs
as fallow.abs

~~~htm
<ion-list>
  <ion-item *ngFor="let item of items; let i = index"
                (click)="onClick(i + 1)">
      <ion-label>Item: {{ i +1 }}</ion-label>
  </ion-item>
</ion-list>
~~~

~~~javascript
export class PopoverInfoComponent implements OnInit {


  items = Array(6);


  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number) {

      this.popoverCtrl.dismiss({
        item: valor
      });
  }
}
~~~

# 

# ion-progress-bar
|     |       |        |
|----------------------------|-------------------|-------------------|
|![](https://camo.githubusercontent.com/f467d56fee7b8393fda2ff3b190d2bd6e7c771ef/68747470733a2f2f692e6779617a6f2e636f6d2f30333331313932393339663861393339303734363734643166623466653836352e676966)|![](https://help.sap.com/doc/c2d571df73104f72b9f1b73e06c5609a/Latest/en-US/docs/images/indicators.gif)|![](https://i.gifer.com/Ary4.gif)|

#### ion-progress-bar is a horizontal progress bar to visualize the progression of an operation and activity. You can choose between two types: determinate and indeterminate.

## Progress Type
## Determinate
#### If the percentage of an operation is known, you should use the determinate type. This is the default type and the progress is represented by the value property.

#### A buffer shows circles as animation to indicate some activity. If the buffer property is smaller than 1 you can show the additional buffering progress.

## Indeterminate
#### If an operation is in progress and it's not necessary to indicate how long it will take.

#### If you add reversed="true", you receive a query which is used to indicate pre-loading.

# Usage
~~~htm
<!-- Default Progressbar -->
<ion-progress-bar></ion-progress-bar>

<!-- Default Progressbar with 50 percent -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- Colorize Progressbar -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- Other types -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
~~~

# Properties
## buffer
|Description	|If the buffer and value are smaller than 1, the buffer circles will show. The buffer should be between [0, 1].|
|-----------------------|-------------------------|
|Attribute|	buffer|
|Type|	number|
|Default|	1|

## color
|Description	|The color to use from your application's color palette. Default options are: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark". For more information on colors, see [theming]:(https://ionicframework.com/docs/theming/basics).|

|Attribute|	color|
|Type|	string - undefined|

## mode
|Description|The mode determines which platform styles to use.|
|-----------------------------|--------------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

## reversed
|Description|If true, reverse the progress bar direction.|
|----------------------|--------------------------|
|Attribute|	reversed|
|Type|	boolean|
|Default|	false|

## type
|Description	|The state of the progress bar, based on if the time the process takes is known or not. Default options are: "**determinate**" (no animation), "**indeterminate**" (animate from left to right).|
|---------------------|-------------------|
|Attribute|	type|
|Type|	"determinate" - "indeterminate"|
|Default	|'determinate'|

## value
|Description	|The value determines how much of the active bar should display when the **type** is "**determinate**". The value should be between [0, 1].|
|----------------------|-----------------------|
|Attribute|	value|
|Type|	number|
|Default|	0|

# CSS Custom Properties
|Name|	Description|
|---------------------|--------------------|
|--background|	Same as --buffer-background when using a determinate progress bar, otherwise it styles the background of the ion-progress-bar itself.|
|--buffer-background|	Color of the buffer bar|
|--progress-background|	Color of the progress bar|

#

# ion-range
![](https://i.stack.imgur.com/55qGO.png)

#### The Range slider lets users select from a range of values by moving the slider knob. It can accept dual knobs, but by default one knob controls the value of the range.

# Range Labels
#### Labels can be placed on either side of the range by adding the slot="start" or slot="end" to the element. The element doesn't have to be an ion-label, it can be added to any element to place it to the left or right of the range.

# Usage
~~~htm
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
</ion-list>
~~~

# Properties
## color
|Description	|The color to use from your application's color palette. Default options are: "**primary**", "**secondary**", "**tertiary**", "**success**", "**warning**", "**danger**", "**light**", "**medium**", and "**dark**". For more information on colors, see theming.|
|---------------------|---------------------|
|Attribute|	color|
|Type|	string - undefined|

## debounce
|Description	|How long, in milliseconds, to wait to trigger the **ionChange** event after each change in the range value.|
|-----------------|---------------------|
|Attribute|	debounce|
|Type|	number|
|Default|	0|

## disabled
|Description|If true, the user cannot interact with the range.|
|-----------------|---------------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|	false|

## dualKnobs
|Description	|Show two knobs.|
|----------------|-----------------|
|Attribute|	dual-knobs|
|Type|	boolean|
|Default|	false|

## max
|Description	|Maximum integer value of the range.|
|---------------------|-----------------------|
|Attribute|	max|
|Type|	number|
|Default|	100|

## min
|Description|Minimum integer value of the range.|
|------------------|--------------------|
|Attribute|	min|
|Type|	number|
|Default|	0|

## mode
|Description|The mode determines which platform styles to use.|
|----------------------|----------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

## name
|Description	|The name of the control, which is submitted with the form data.|
|---------------------|---------------------|
|Attribute|	name|
|Type|	string|
|Default|	''|

## pin
|Description|If true, a pin with integer value is shown when the knob is pressed.|
|---------------------|-----------------------|
|Attribute|	pin|
|Type|	boolean|
|Default|	false|

## snaps
|Description	|If true, the knob snaps to tick marks evenly spaced based on the step property value.|
|-----------------------|------------------------|
|Attribute|	snaps|
|Type|	boolean|
|Default|	false|

## step
|Description	|Specifies the value granularity.|
|-----------------------|-------------------|
|Attribute|	step|
|Type|	number|
|Default|	1|

## ticks
|Description|	If true, tick marks are displayed based on the step value. Only applies when snaps is true.|
|-----------------|-------------------|
|Attribute|	ticks|
|Type|	boolean|
|Default|	true|

## value
|Description|the value of the range.|
|------------------------|------------------------|
|Attribute|	value|
|Type|	number - { lower: number; upper: number; }|
|Default|	0|

## Events
|Name|	Description|
|ionBlur|	Emitted when the range loses focus.|
|ionChange|	Emitted when the value property has changed.|
|ionFocus|	Emitted when the range has focus.|

# CSS Shadow Parts
|Name|	Description|
|----------------|----------------------|
|bar|	The inactive part of the bar.|
|bar-active|	The active part of the bar.|
|knob|	The handle that is used to drag the range.|
|pin|	The counter that appears above a knob.|
|tick|	An inactive tick mark.|
|tick-active|	An active tick mark.|

# CSS Custom Properties
|Name|	Description|
|----------------|-------------------|
|--bar-background|	Background of the range bar|
|--bar-background-active|	Background of the active range bar|
|--bar-border-radius|	Border radius of the range bar|
|--bar-height|	Height of the range bar|
|--height|	Height of the range|
|--knob-background|	Background of the range knob|
|--knob-border-radius|	Border radius of the range knob|
|--knob-box-shadow|	Box shadow of the range knob|
|--knob-size|	Size of the range knob|
|--pin-background|	Background of the range pin|
|--pin-color|	Color of the range pin|

## Slots
|Name|	Description|
|------------------|-----------------------|
|"end"|	Content is placed to the right of the range slider in LTR, and to the left in RTL.|
|"start"|	Content is placed to the left of the range slider in LTR, and to the right in RTL.|


# 

# ion-refresher
![](https://ampersandacademy.com/fileman/Uploads/tut/Ionic-2-pull-to-refresh-page-example.png)
### The refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data using touch in order to retrieve more data.

### Data should be modified during the refresher's output events. Once the async operation has completed and the refreshing should end, call complete() on the refresher.

## Native Refreshers
### Both iOS and Android platforms provide refreshers that take advantage of properties exposed by their respective devices that give pull to refresh a fluid, native-like feel.

### Certain properties such as pullMin and snapbackDuration are not compatible because much of the native refreshers are scroll-based. See Refresher Properties for more information.

# iOS Usage
![](https://image.slidesharecdn.com/ionic-framework-150201223458-conversion-gate01/95/ionic-revolutionizing-hybrid-mobile-application-development-35-638.jpg?cb=1422830378)
### Using the iOS native ion-refresher requires setting the pullingIcon property on ion-refresher-content to the value of one of the available spinners. See the Spinner Documentation for accepted values. The pullingIcon defaults to the lines spinner on iOS. The spinner tick marks will be progressively shown as the user pulls down on the page.

### The iOS native ion-refresher relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling.

# Android Usage
||||
|------|------|--------|
|![](https://i.stack.imgur.com/lR9aO.jpg)|![](https://www.exceptionbound.com/wp-content/uploads/2016/10/how-to-add-Swipe-Refresh-Layout-in-android-studio.jpg)|![](https://1.bp.blogspot.com/-FUzG32BCTDY/VxjaDVdCPdI/AAAAAAAADAM/KpMaidFTPNw/w1200-h630-p-k-no-nu/swipe-down-to-refresh-layout-android-example.png)|

### Using the MD native ion-refresher requires setting the pullingIcon property on ion-refresher-content to the value of one of the available spinners. See the ion-spinner Documentation for accepted values. pullingIcon defaults to the circular spinner on MD.

#Usage
~~~htm
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="Pull to refresh"
      refreshingSpinner="circles"
      refreshingText="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
~~~

~~~javascript
import { Component } from '@angular/core';

@Component({
  selector: 'refresher-example',
  templateUrl: 'refresher-example.html',
  styleUrls: ['./refresher-example.css'],
})
export class RefresherExample {
  constructor() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
~~~
# Properties
## closeDuration
|Description	|Time it takes to close the refresher. Does not apply when the refresher content uses a spinner, enabling the native refresher.|
|-------------|----------------|
|Attribute|	close-duration|
|Type|	string|
|Default|	'280ms'|
## disabled
|Description|If true, the refresher will be hidden.|
|----------|---------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|	false|
# 
How much to multiply the pull speed by. To slow the pull animation down, pass a number less than 1. To speed up the pull, pass a number greater than 1. The default value is 1 which is equal to the speed of the cursor. If a negative value is passed in, the factor will be 1 instead.

For example: If the value passed is 1.2 and the content is dragged by 10 pixels, instead of 10 pixels the content will be pulled by 12 pixels (an increase of 20 percent). If the value passed is 0.8, the dragged amount will be 8 pixels, less than the amount the cursor has moved.

Does not apply when the refresher content uses a spinner, enabling the native refresher.
## pullFactor 
|Description	| Description Body |
|--------------|--------------------|
|Attribute|	pull-factor|
|Type|	number|
|Default|	1|
# 
## pullMax
|Description	|The maximum distance of the pull until the refresher will automatically go into the refreshing state. Defaults to the result of pullMin + 60. Does not apply when the refresher content uses a spinner, enabling the native refresher.|
|------------|----------------|
|Attribute|	pull-max|
|Type|	number|
|Default|	this.pullMin + 60|
#
## pullMin
|Description	|The minimum distance the user must pull down until the refresher will go into the refreshing state. Does not apply when the refresher content uses a spinner, enabling the native refresher.|
|--------------|---------------|
|Attribute|	pull-min|
|Type|	number|
|Default|	60|
# 
## snapbackDuration
|Description	|Time it takes the **refresher** to to snap back to the refreshing state. Does not apply when the refresher content uses a spinner, enabling the native refresher.|
|-----------------|----------------|
|Attribute|	snapback-duration|
|Type|	string|
|Default|	'280ms'|
#
# Events
|Name|	Description|
|---------------|----------------------|
|ionPull|	Emitted while the user is pulling down the content and exposing the refresher.|
|ionRefresh|	Emitted when the user lets go of the content and has pulled down further than the `pullMin` or pulls the content down and exceeds the pullMax. Updates the refresher state to `refreshing`. The `complete()` method should be called when the async operation has completed.|
|ionStart|	Emitted when the user begins to start pulling down.|
# 
# Methods
## cancel
|Description	|Changes the refresher's state from refreshing to cancelling.|
|---------------|----------------|
|Signature|	cancel() => Promise<void>|
# 
## complete
|Description	|Call complete() when your async operation has completed. For example, the refreshing state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request. Once the data has been received, you then call this method to signify that the refreshing has completed and to close the refresher. This method also changes the refresher's state from refreshing to completing.|
|------------------|----------------|
|Signature|	complete() => Promise<void>|
# 
## getProgress
|Description	|A number representing how far down the user has pulled. The number 0 represents the user hasn't pulled down at all. The number 1, and anything greater than 1, represents that the user has pulled far enough down that when they let go then the refresh will happen. If they let go and the number is less than 1, then the refresh will not happen, and the content will return to it's original position.|
|---------------------|-------------------|
|Signature|	getProgress() => Promise<number>|

# 

# Animate.css
![](https://www.falconmasters.com/wp-content/uploads/2014/07/Pack-de-Animaciones-CSS-para-toda-la-vida.jpg)
###  Animate.css v4 brought some breaking changes, please refer to the migration guide before updating from v3.x and under.

### Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.

# Installation and usage
### Installing
#
### Install with npm:
~~~npm
$ npm install animate.css --save
~~~
# 
### with yarn:
~~~npm
$ yarn add animate.css
~~~
### or add it directly to your webpage using a CDN:
~~~html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
~~~
# 
## Basic usage

### After installing Animate.css, add the class animate__animated to an element, along with any of the animation names (don't forget the animate__ prefix!):
~~~html
<h1 class="animate__animated animate__bounce">An animated element</h1>
~~~
#### That's it! You've got a CSS animated element. Super!

### Animations can improve the UX of an interface, but keep in mind that they can also get in the way of your users! Please read the best practices and gotchas sections to bring your web-things to life in the best way possible.

# Using `@keyframes`
#### Even though the library provides you a few helper classes like the `animated` class to get you up running quickly, you can use the provided animations `keyframes` directly. This provides a flexible way to use Animate.css with your current projects without having to refactor your HTML code.

## Example:
~~~css
.my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
~~~

### Be aware that some animations are dependent on the animation-timing property set on the animation's class. Changing or not declaring it might lead to unexpected results.

# CSS Custom Properties (CSS Variables)
### Since version 4, Animate.css makes use of custom properties (also known as CSS variables) to define the animations duration, delay, and iteractions. This makes Animate.css very flexible and customizable. Need to change an animation duration? Just set a new value to globally or locally.

## Example:
~~~css
/* This only changes this particular animation duration */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}
~~~ 

### Custom properties also make it easy to change all your animations time-constrained properties on the fly. It means that you can have a slow-motion or time-lapse effect with a javascript one-liner:

~~~css
// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');
~~~

### Even though custom properties are not supported by some aging browsers, Animate.css provides a proper fallback, widening its support for any browser that supports CSS animations.

[animate.style/#documentation][animate.style/#documentation]

[animate.style/#documentation]:https://animate.style/#documentation
# 


# ion-searchbar
![](https://www.masterionic.com/wp-content/uploads/2019/09/ionic4-search.png)
### Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.

### A Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.

# Keyboard Display
## Android
![](https://s3.amazonaws.com/ionic-marketplace/ionic-filter-bar/screenshot_2.png)

### By default, tapping the input will cause the keyboard to appear with a magnifying glass icon on the submit button. You can optionally set the inputmode property to "search", which will change the icon from a magnifying glass to a carriage return.

# iOS
|||
|-------------|----------------|
|![](https://florian.ec/blog/2015-07-25-ios-search-bar-ionic/ios-search-bar.gif)|![](https://florian.ec/blog/2015-07-25-ios-search-bar-ionic/ionic-search-bar.gif)|

### By default, tapping the input will cause the keyboard to appear with the text "return" on a gray submit button. You can optionally set the inputmode property to "search", which will change the text from "return" to "go", and change the button color from gray to blue. Alternatively, you can wrap the ion-searchbar in a form element with an action property. This will cause the keyboard to appear with a blue submit button that says "search".

# Usage
~~~html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar showCancelButton="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar showCancelButton="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar showCancelButton="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
~~~

# Properties
## animated
|Description|If true, enable searchbar animation.|
|---------------------|----------------------|
|Attribute|	animated|
|Type|	boolean|
|Default|	false|
# 
## autocomplete
|Description	|Set the input's autocomplete property.|
|--------------|-----------------|
|Attribute|	autocomplete|
|Type|	"on" - "off" - "name" - "honorific-prefix" - "given-name" - "additional-name" - "family-name" - "honorific-suffix" - "nickname" - "email" - "username" - "new-password" - "current-password" - "one-time-code" - "organization-title" - "organization" - "street-address" - "address-line1" - "address-line2" - "address-line3" - "address-level4" - "address-level3" - "address-level2" - "address-level1" - "country" - "country-name" - "postal-code" - "cc-name" - "cc-given-name" - "cc-additional-name" - "cc-family-name" - "cc-number" - "cc-exp" - "cc-exp-month" - "cc-exp-year" - "cc-csc" - "cc-type" - "transaction-currency" - "transaction-amount" - "language" - "bday" - "bday-day" - "bday-month" - "bday-year" - "sex" - "tel" - "tel-country-code" - "tel-national" - "tel-area-code" - "tel-local" - "tel-extension" - "impp" - "url" - "photo"|
|Default|	'off'|

# 
## autocorrect
|Description	|Set the input's autocorrect property.|
|----------------|---------------------|
|Attribute|	autocorrect|
|Type|	"off" - "on"|
|Default|	'off'|
# 
# cancelButtonIcon
|Description	|Set the cancel button icon. Only applies to md mode. Defaults to "arrow-back-sharp".|
|--------------|------------------|
|Attribute|	cancel-button-icon|
|Type|	string|
|Default|	config.get('backButtonIcon', 'arrow-back-sharp') as string|
# 
## cancelButtonText
|Description	|Set the the cancel button text. Only applies to ios mode.|
|----------------|-----------------|
|Attribute|	cancel-button-text|
|Type|	string|
|Default|	'Cancel'|

#
## clearIcon
|Description	|Set the clear icon. Defaults to "close-circle" for ios and "close-sharp" for md.|
|--------------------|-----------------|
|Attribute|	clear-icon|
|Type|	string - undefined|
# 
## color
|Description	|The color to use from your application's color palette. Default options are: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark". For more information on colors, see theming.|
|-------------|--------------------|
|Attribute|	color|
|Type|	string - undefined|
# 
## debounce
|Description	|Set the amount of time, in milliseconds, to wait to trigger the ionChange event after each keystroke.|
|-----------|--------------|
|Attribute|	debounce|
|Type|	number|
|Default|	250|
# 
## disabled
|Description|If true, the user cannot interact with the input.|
|------------|-------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|	false|
# 
## enterkeyhint
|Description	|A hint to the browser for which enter key to display. Possible values: "`enter`", "`done`", "`go`", "`next`", "`previous`", "`search`", and "`send`".|
|---------------|-------------------|
|Attribute|	enterkeyhint|
|Type|	"`done`" - "`enter`" - "`go`" - "`next`" - "`previous`" - "`search`" - "`send`" - `undefined`|
# 
## inputmode
|Description	|A hint to the browser for which keyboard to display. Possible values: "`none`", "`text`", "`tel`", "`url`", "`email`", "`numeric`", "`decimal`", and "`search`".|
|---------------|-----------------|
|Attribute|	inputmode|
|Type|	"`decimal`" - "`email`" - "`none`" - "`numeric`" - "`search`" - "`tel`" - "`text`" - "`url`" - `undefined`|
# 
## mode
|Description|The mode determines which platform styles to use.|
|----------------|-----------------|
|Attribute|	mode|
|Type|	"ios"  "md"|

# 
[information: Security Documentation]:https://ionicframework.com/docs/techniques/security

## placeholder
|Description|Set the input's placeholder. placeholder can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example <Ionic> would become &lt;Ionic&gt; For more [information: Security Documentation][information: Security Documentation]|
|-----------------|-------------------|
|Attribute|	placeholder|
|Type|	string|
|Default|	'Search'|
# 
## searchIcon
|Description|The icon to use as the search icon. Defaults to "search-outline" in ios mode and "search-sharp" in md mode.|
|------------------|---------------------|
|Attribute|	search-icon|
|Type|	string - undefined|

# 
## showCancelButton
|Description|Sets the behavior for the cancel button. Defaults to "`never`". Setting to "`focus`" shows the cancel button on focus. Setting to "`never`" hides the cancel button. Setting to "`always`" shows the cancel button regardless of focus state.|
|----------------|------------------------|
|Attribute|	show-cancel-button|
|Type|	"always" - "focus" - "never"|
|Default|	'never'|

# 

## spellcheck
|Description|If true, enable spellcheck on the input.|
|----------------|---------------|
|Attribute|	spellcheck|
|Type|	boolean|
|Default|	false|
#
## type
|Description|Set the type of the input.|
|----------------------|-------------------|
|Attribute|	type|
|Type|	"email" - "number" - "password" - "search" - "tel" - "text" - "url"|
|Default|	'search'|
# 
## value
|Description	|the value of the searchbar.|
|-------------------|--------------------|
|Attribute|	value|
|Type|	null - string - undefined|
|Default|	''|
# 
## Events
|Name|	Description|
|-----------------|-----------------|
|ionBlur|	Emitted when the input loses focus.|
|ionCancel|	Emitted when the cancel button is clicked.|
|ionChange|	Emitted when the value has changed.|
|ionClear|	Emitted when the clear input button is clicked.
|ionFocus|	Emitted when the input has focus.|
|ionInput|	Emitted when a keyboard input occurred.|
# 
# Methods
## getInputElement
|Description|	Returns the native < input> element used under the hood.|
|----------------------|------------------------|
|Signature|	getInputElement() => Promise<HTMLInputElement>|
# 
## setFocus
|Description	|Sets focus on the specified ion-searchbar. Use this method instead of the global input.focus().|
|-----------------------|----------------------|
|Signature|	setFocus() => Promise<void>|
# 
# CSS Custom Properties
|Name|	Description|
|-----------------------|----------------------|
|--background	|Background of the searchbar input|
|--border-radius	|Border radius of the searchbar input|
|--box-shadow	|Box shadow of the searchbar input|
|--cancel-button-color|	Color of the searchbar cancel button|
|--clear-button-color	|Color of the searchbar clear button|
|--color	|Color of the searchbar text|
|--icon-color	|Color of the searchbar icon|
|--placeholder-color	|Color of the searchbar placeholder|
|--placeholder-font-style	|Font style of the searchbar placeholder|
|--placeholder-font-weight|	Font weight of the searchbar placeholder|
|--placeholder-opacity|	Opacity of the searchbar placeholder|
#

## We will now show the creation of a pipe.

## we will use it to filter an arrangement in our search screen

~~~javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], 
            texto: string = '',
            columna: string = 'title'
            ): any[] {

    if (texto === '') {
      return value;
    }

    if ( !value ) {
      return value;
    }

    texto = texto.toLowerCase();
    return value.filter(
      item => item[columna].toLowerCase().includes(texto)
    );
  }

}
~~~

### In the Pipe the structure is as follows.
  - (value) is the array we receive.
  - text: is the text that we will use to filter the arrangement.
  - column: it is the column of the Arrangement by which we will filter in this case by default it would be 'title'

### The code used to filter the array will be done in javascript as you can see


~~~html
<ion-header>
  <ion-toolbar>

  <ion-buttons>
    <ion-back-button defaultHref="/" 
              text="Regresar" color="primary"
              ></ion-back-button>
  </ion-buttons>

    <ion-title>searcher</ion-title>
  </ion-toolbar>
  <!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter albums"
                inputmode="text"
                (ionChange)="onSearchChange($event)"
                [debounce]="250"
                animated
              ></ion-searchbar>
</ion-header>

<ion-content>

  <ion-list>
      <ion-item *ngFor="let album of albumes | filtro:textoFiltrar:'title'"> 
            <ion-label>{{ album.title }}</ion-label>
      </ion-item>
  </ion-list>

</ion-content>
~~~
#### In this code everything we show should not be new to us.
#### what concerns us is concerning the pipe

~~~javascript
*ngFor = "let album of albums | filter: textFilter"
~~~

### In this case we pass parameters to our pipe.
    - textFilter: which is a variable that stores the text value of the search to do the searches.
    - 'title' ": which in this case is a text that tells me the name of the column to which I will apply the search.




# This is the code placed in the search.
~~~javascript
  constructor(private servicesCtrl: DataService) { }

  albumes: any[] = [];
  textoFiltrar: string = '';
  ngOnInit() {
  }

  onSearchChange(event) {

    this.servicesCtrl.getAlbumes().subscribe(data => {
            this.albumes = data;
    });

   this.textoFiltrar = event.detail.value;


  }
~~~

### We dealt with creating an empty array of any type called albums, we could well have assigned a type to this through an interface, but we decided to do it this way.

### We also create a text variable called textFilter of type string

~~~javascript
   albums: any [] = [];
   textFilter: string = '';
~~~

### we import the Service in which we are calling the data

~~~javascript
constructor (private servicesCtrl: DataService)
~~~

### then we consume our service and at the same time we apply the filter using our pipe


# 

# 

# ion-segment
| | | |
|---------------|-------------------|----------------------|
|![](https://i.stack.imgur.com/ysoAc.jpg)|![](https://lh3.googleusercontent.com/proxy/8AzK27jjYxED2vJLwAO--41EqB21zAJGOA4kQ8u_HP6rv6ils-VjHaBAqhKZoqhMvK28NKZqjiBjteCrUK0g8XHzpq70YATO2_MBcKMdHfZqImJBUqvUb58)|![](https://www.jqueryscript.net/images/jQuery-Plugin-To-Create-iOS-Style-Segmented-Controls-Segment-js.jpg)|

#### Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

#### Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

##  Scrollable Segments
#### Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the scrollable property to true. This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width.

# Usage
~~~html
<!-- Default Segment -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="friends">
    <ion-label>Friends</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>Enemies</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Disabled Segment -->
<ion-segment (ionChange)="segmentChanged($event)" disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>Sunny</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>Rainy</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment with anchors -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="dogs">
    <ion-label>Dogs</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>Cats</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Scrollable Segment -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- Segment with secondary color -->
<ion-segment (ionChange)="segmentChanged($event)" color="secondary">
  <ion-segment-button value="standard">
    <ion-label>Standard</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>Hybrid</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>Satellite</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment in a toolbar -->
<ion-toolbar>
  <ion-segment (ionChange)="segmentChanged($event)">
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- Segment with default selection -->
<ion-segment (ionChange)="segmentChanged($event)" value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
~~~
~~~javascript
import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'segment-example.html',
  styleUrls: ['./segment-example.css'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
~~~

# Properties
## color
|Description	|The color to use from your application's color palette. Default options are: "`primary`", "`secondary`", "`tertiary`", "`success`", "`warning`", "`danger`", "`light`", "`medium`", and "`dark`". For more information on colors, see theming.|
|------------------------|---------------------|
|Attribute|	color|
|Type|	string - undefined|
# 
## disabled
|Description|	If true, the user cannot interact with the segment.|
|------------------------|----------------------------|
|Attribute|	disabled|
|Type|	boolean|
|Default|false|
# 
## mode
|Description	|The mode determines which platform styles to use.|
|--------------------------|---------------------|
|Attribute|	mode|
|Type|	"ios" - "md"|
# 
## scrollable
|Description	|If true, the segment buttons will overflow and the user can swipe to see them. In addition, this will disable the gesture to drag the indicator between the buttons in order to swipe to see hidden buttons.|
|-----------------------|--------------------------|
|Attribute|	scrollable|
|Type|	boolean|
|Default|	false|
# 
## value
|Description	|the value of the segment.|
|-----------------|--------------------|
|Attribute|	value|
|Type|	null - string - undefined|
#
# Events
|Name|	Description|
|------------------|---------------------|
|ionChange|	Emitted when the value property has changed and any dragging pointer has been released from `ion-segment`.|
#
# CSS Custom Properties
|Name|	Description|
|--background|	Background of the segment button|
#

### SperHeores Json file
~~~json
[
    {
        "superhero":"Batman", 
        "publisher":"DC Comics", 
        "alter_ego":"Bruce Wayne",
        "first_appearance":"Detective Comics #27",
        "characters":"Bruce Wayne"
    },
    {
        "superhero":"Superman", 
        "publisher":"DC Comics", 
        "alter_ego":"Kal-El",
        "first_appearance":"Action Comics #1",
        "characters":"Kal-El"
    },
    {
        "superhero":"Flash", 
        "publisher":"DC Comics", 
        "alter_ego":"Jay Garrick",
        "first_appearance":"Flash Comics #1",
        "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
        "superhero":"Green Lantern", 
        "publisher":"DC Comics", 
        "alter_ego":"Alan Scott",
        "first_appearance":"All-American Comics #16",
        "characters":"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    },
    {
        "superhero":"Green Arrow", 
        "publisher":"DC Comics", 
        "alter_ego":"Oliver Queen",
        "first_appearance":"More Fun Comics #73",
        "characters":"Oliver Queen"
    },
    {
        "superhero":"Wonder Woman", 
        "publisher":"DC Comics", 
        "alter_ego":"Princess Diana",
        "first_appearance":"All Star Comics #8",
        "characters":"Princess Diana"
    },
    {
        "superhero":"Martian Manhunter", 
        "publisher":"DC Comics", 
        "alter_ego":"J'onn J'onzz",
        "first_appearance":"Detective Comics #225",
        "characters":"Martian Manhunter"
    },
    {
        "superhero":"Robin/Nightwing", 
        "publisher":"DC Comics", 
        "alter_ego":"Dick Grayson",
        "first_appearance":"Detective Comics #38",
        "characters":"Dick Grayson"
    },
    {
        "superhero":"Blue Beetle", 
        "publisher":"DC Comics", 
        "alter_ego":"Dan Garret",
        "first_appearance":"Mystery Men Comics #1",
        "characters":"Dan Garret, Ted Kord, Jaime Reyes"
    },
    {
        "superhero":"Black Canary", 
        "publisher":"DC Comics", 
        "alter_ego":"Dinah Drake",
        "first_appearance":"Flash Comics #86",
        "characters":"Dinah Drake, Dinah Lance"
    },
    {
        "superhero":"Spider Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Peter Parker",
        "first_appearance":"Amazing Fantasy #15",
        "characters":"Peter Parker"
    },
    {
        "superhero":"Captain America", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Steve Rogers",
        "first_appearance":"Captain America Comics #1",
        "characters":"Steve Rogers"
    },
    {
        "superhero":"Iron Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Tony Stark",
        "first_appearance":"Tales of Suspense #39",
        "characters":"Tony Stark"
    },
    {
        "superhero":"Thor", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Thor Odinson",
        "first_appearance":"Journey into Myster #83",
        "characters":"Thor Odinson"
    },
    {
        "superhero":"Hulk", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Bruce Banner",
        "first_appearance":"The Incredible Hulk #1",
        "characters":"Bruce Banner"
    },
    {
        "superhero":"Wolverine", 
        "publisher":"Marvel Comics", 
        "alter_ego":"James Howlett",
        "first_appearance":"The Incredible Hulk #180",
        "characters":"James Howlett"
    },
    {
        "superhero":"Daredevil", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Matthew Michael Murdock",
        "first_appearance":"Daredevil #1",
        "characters":"Matthew Michael Murdock"
    },
    {
        "superhero":"Hawkeye", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Clinton Francis Barton",
        "first_appearance":"Tales of Suspense #57",
        "characters":"Clinton Francis Barton"
    },
    {
        "superhero":"Cyclops", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Scott Summers",
        "first_appearance":"X-Men #1",
        "characters":"Scott Summers"
    },
    {
        "superhero":"Silver Surfer", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Norrin Radd",
        "first_appearance":"The Fantastic Four #48",
        "characters":"Norrin Radd"
    }
]
~~~
# 

# 


# ion-skeleton-text
![](https://ionicframework.com/blog/wp-content/uploads/2018/03/skeleton.gif)

### Skeleton Text is a component for rendering placeholder content. The element will render a gray block at the specified width.

# Usage
~~~html
<!-- Data to display after skeleton screen -->
<div *ngIf="data">
  <div class="ion-padding">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
  </div>

  <ion-list>
    <ion-list-header>
      <ion-label>
        Data
      </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <img src="./avatar.svg">
      </ion-avatar>
      <ion-label>
        <h3>
          {{ data.heading }}
        </h3>
        <p>
          {{ data.para1 }}
        </p>
        <p>
          {{ data.para2 }}
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <img src="./thumbnail.svg">
      </ion-thumbnail>
      <ion-label>
        <h3>
          {{ data.heading }}
        </h3>
        <p>
          {{ data.para1 }}
        </p>
        <p>
          {{ data.para2 }}
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-icon name="call" slot="start"></ion-icon>
      <ion-label>
        <h3>
          {{ data.heading }}
        </h3>
        <p>
          {{ data.para1 }}
        </p>
        <p>
          {{ data.para2 }}
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</div>

<!-- Skeleton screen -->
<div *ngIf="!data">
  <div class="ion-padding custom-skeleton">
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
    <ion-skeleton-text animated></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
  </div>

  <ion-list>
    <ion-list-header>
      <ion-label>
        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
      </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-avatar>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-thumbnail>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</div>
~~~

~~~css
/* Custom Skeleton Line Height and Margin */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
~~~
~~~javascript
import { Component } from '@angular/core';

@Component({
  selector: 'skeleton-text-example',
  templateUrl: 'skeleton-text-example.html',
  styleUrls: ['./skeleton-text-example.css']
})
export class SkeletonTextExample {
  data: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }
}
~~~
# Properties
## animated
|Description|If true, the skeleton text will animate.|
|---------------------|-------------------------|
|Attribute|	animated|
|Type|	boolean|
|Default|	false|

# CSS Custom Properties
|Name|	Description|
|--background	|Background of the skeleton text|
|--background-rgb|	Background of the skeleton text in rgb format|
|--border-radius|	Border radius of the skeleton text|
#
#

# ion-slides
||||
|----------|-------------|------------|
|![](https://fireship.io/lessons/ionic4-intro-slides-tutorial-to-educate-app-users/img/ionic-slide-tutorial.gif)|![](https://apppresser.com/wp-content/uploads/2016/12/ion-slider.gif)|![](https://fireship.io/lessons/ionic4-intro-slides-tutorial-to-educate-app-users/img/ionic-slide-tutorial.gif)|

#### The Slides component is a multi-section container. Each section can be swiped or dragged between. It contains any number of Slide components.

#### Adopted from Swiper.js: The most modern mobile touch slider and framework with hardware accelerated transitions.
# http://www.idangero.us/swiper/

# Copyright 2016, Vladimir Kharlampidi The iDangero.us http://www.idangero.us/

`Licensed under MIT`

## Custom Animations
#### By default, Ionic slides use the built-in slide animation effect. Custom animations can be provided via the options property. Examples of other animations can be found below.

## Coverflow
~~~javascript
const slideOpts = {
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    beforeInit() {
      const swiper = this;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform$$1 = swiper.translate;
      const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

         let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);

         let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

         // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;

         const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

         $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
        }
      }

       // Set correct perspective for IE10
      if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    }
  }
}
~~~

## Cube
~~~javascript
const slideOpts = {
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  on: {
    beforeInit: function() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };

      this.params = Object.assign(this.params, overwriteParams);
      this.originalParams = Object.assign(this.originalParams, overwriteParams);
    },
    setTranslate: function() {
      const swiper = this;
      const {
        $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: `${swiperWidth}px` });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }

      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

         if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

         const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
        }
        $slideEl.transform(transform$$1);
        if (params.slideShadows) {
          // Set shadows
          let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
        'transform-origin': `50% 50% -${swiperSize / 2}px`,
      });

       if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          const multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset$$1 = params.shadowOffset;
          $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
        }
      }

      const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    },
    setTransition: function(duration) {
      const swiper = this;
      const { $el, slides } = swiper;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  }
}
~~~

## Fade
~~~javascript
const slideOpts = {
  on: {
    beforeInit() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      swiper.params = Object.assign(swiper.params, overwriteParams);
      swiper.params = Object.assign(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      const { slides } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset$$1 = $slideEl[0].swiperSlideOffset;
        let tx = -offset$$1;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, $wrapperEl } = swiper;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        slides.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  }
}
~~~

## Flip
~~~javascript
const slideOpts = {
  on: {
    beforeInit() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      swiper.params = Object.assign(swiper.params, overwriteParams);
      swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      const { $, slides, rtlTranslate: rtl } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        const offset$$1 = $slideEl[0].swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = -offset$$1;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

         $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

         if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
        $slideEl
          .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, activeIndex, $wrapperEl } = swiper;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;

          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  }
};
~~~

# Usage
~~~javascript
import { Component } from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        <ion-slide>
          <h1>Slide 1</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
~~~

~~~css
/* Without setting height the slides will take up the height of the slide's content */
ion-slides {
  height: 100%;
}
~~~


# Properties
## mode
|Description	|The mode determines which platform styles to use.|
|------------|-------------|
|Attribute|	mode|
|Type|	"ios" - "md"|

## options
|Description	|Options to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options|
|---------------|-----------------|
|Attribute|	options|
|Type|	any|
|Default|	{}|
## pager
|Description|If true, show the pagination.|
|---------------|--------------|
|Attribute|	pager|
|Type|	boolean|
|Default|	false|
#
## scrollbar
|Description	|If true, show the scrollbar.|
|--------------------|---------------|
|Attribute|	scrollbar|
|Type|	boolean|
|Default|	false|
# 
# Events
|Name|	Description|
|---------------|------------|
|ionSlideDidChange	|Emitted after the active slide has changed.|
|ionSlideDoubleTap	|Emitted when the user double taps on the |slide's -container.
|ionSlideDrag	|Emitted when the slider is actively being moved.|
|ionSlideNextEnd	|Emitted when the next slide has ended.|
|ionSlideNextStart|	Emitted when the next slide has started.|
|ionSlidePrevEnd|	Emitted when the previous slide has ended.|
|ionSlidePrevStart|	Emitted when the previous slide has started|.
|ionSlideReachEnd	|Emitted when the slider is at the last slide|.
|ionSlideReachStart|	Emitted when the slider is at its initial position.|
|ionSlidesDidLoad|	Emitted after Swiper initialization|
|ionSlideTap	|Emitted when the user taps/clicks on the slide's container.|
|ionSlideTouchEnd|	Emitted when the user releases the touch.|
|ionSlideTouchStart|	Emitted when the user first touches the |slider.
|ionSlideTransitionEnd|	Emitted when the slide transition has ended.|
|ionSlideTransitionStart|	Emitted when the slide transition has started.|
|ionSlideWillChange	|Emitted before the active slide has changed.|
# 
# Methods
## getActiveIndex
|Description	|Get the index of the active slide.|
|----------------|-----------------------|
|Signature|	getActiveIndex() => Promise<number>|
# 
## getPreviousIndex
|Description	|Get the index of the previous slide.|
|------------------|------------------|
|Signature|	getPreviousIndex() => Promise<number>|
# 
## getSwiper
|Description	|Get the Swiper instance. Use this to access the full Swiper API. See https://idangero.us/swiper/api/ for all API options|
|------------------|--------------------|
|Signature|	getSwiper() => Promise<any>|
# 
## isBeginning
|Description	|Get whether or not the current slide is the first slide.|
|---------------|------------------|
|Signature|	isBeginning() => Promise<boolean>|
# 
## isEnd
|Description	|Get whether or not the current slide is the last slide.|
|-------------------|-------------------|
|Signature|	isEnd() => Promise<boolean>|
# 
## length
|Description	|Get the total number of slides.|
|--------------------|-----------------|
|Signature|	length() => Promise<number>|
# 
## lockSwipeToNext
|Description|Lock or unlock the ability to slide to the next slide.|
|----------------------|-------------------|
|Signature|	lockSwipeToNext(lock: boolean) => Promise<void>|
# 
## lockSwipeToPrev
|Description|Lock or unlock the ability to slide to the previous slide.|
|---------------------|---------------|
|Signature|	lockSwipeToPrev(lock: boolean) => Promise<void>|
# 
## lockSwipes
|Description	|Lock or unlock the ability to slide to the next or previous slide.|
|-------------------|--------------------|
|Signature|	lockSwipes(lock: boolean) => Promise<void>|
# 
## slideNext
|Description	|Transition to the next slide.|
|----------------------|--------------|
|Signature|	slideNext(speed?: number - undefined, runCallbacks?: boolean - undefined) => Promise<void>|
# 
## slidePrev
|Description	|Transition to the previous slide.|
|---------------------|------------------|
|Signature|	slidePrev(speed?: number - undefined, runCallbacks?: boolean - undefined) => Promise<void>|
# 
## slideTo
|Description	|Transition to the specified slide.|
|----------------|-------------------|
|Signature|	slideTo(index: number, speed?: number - undefined, runCallbacks?: boolean - undefined) => Promise<void>|
# 
## startAutoplay
|Description	|Start auto play.|
|-----------------------|----------------|
|Signature|	startAutoplay() => Promise<void>|
# 
## stopAutoplay
|Description	|Stop auto play.|
|------------------|----------------------|
|Signature|	stopAutoplay() => Promise<void>|
#
## update
|Description	|Update the underlying slider implementation. Call this if you've added or removed child slides.|
|-----------------|-------------------|
|Signature|	update() => Promise<void>|
# 
## updateAutoHeight
|Description	|Force swiper to update its height (when autoHeight is enabled) for the duration equal to 'speed' parameter.|
|---------------------|--------------------|
|Signature|	updateAutoHeight(speed?: number - undefined) => Promise<void>|
# 
## CSS Custom Properties
|Name|	Description|
|-------------|----------------|
|--bullet-background|	Background of the pagination bullets|
|--bullet-background-active|	Background of the active pagination |bullet
|--progress-bar-background|	Background of the pagination |progress-bar
|--progress-bar-background-active|	Background of the active pagination progress-bar|
|--scroll-bar-background|	Background of the pagination scroll-bar|
|--scroll-bar-background-active	|Background of the active pagination scroll-bar|
# 

## 

