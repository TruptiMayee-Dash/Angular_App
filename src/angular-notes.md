Day-2 Note:

Component -- A reusable unit of Ui And Behaviour.
Template -- The Html Markup rendered by a component.
Component Class -- Typescript properties and methods that control the UI.
Decorator -- @component() metadata that configures a component.
Bootstrap process -- Angular starts the application through its configured root component,commonly in src/main.ts.

main.ts -- Starts the angular application.
app.component.ts --component class and metadata.
app.component.html -- component template.
app.component.css -- component styling.
app.config.ts -- Application-level providers and configuration,when present.

Data Binding
1-**interpolation** - Displsys a typescript value as text.

<h1>Welcome, {{ userName }}!</h1> - .html file
username="Truptimayee" - ts value

2-**# Property Binding** - Sets an html elements property from typeScript.
<button [disabled]="isDisabled">
Submit
</button> - .html file
isDisabled = flase; - .ts file

3-**Event Binding** -Runs an method when an event occurs.
<button (click)="sayHello()">
Click Me
</button> - .html

sayHello():void{
alert("Hello Angular");
}

4-Two-way binding- [(ngModel)] - keeps an input and a typescript property synchronized.
<input [(ngModel)]="username">

<p>{{username}}</p>

Note - to use ngmodel ,imports formsmodule in the standalone component's import array.
-@for and @empty are built-in angular template control-flow blocks,supported inAngular 19 without importing CommonModule.
