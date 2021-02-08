---
title: 'Angular: Property and Event Binding'
date: '2021-02-08'
description: 'A Reference to use Property and Event binding inside the latest version of Angular'
---

#ANGULAR 11: Working with property binging and events

## Property Binding

We usually use events to communicate between components in any component based architecture so its not a big surprise that you can also do that in Angular, let’s break it up to a couple easy to follow steps.

For the communication from parent to child component, you’ll use properties, you can bind properties in Angular, for that you need to import and use the Input decorator, that will let you receive information from outside to your component, the way to do it is the following:

First you need to import it from @angular/core
```
Import { Input } from '@angular/core';
```

Then you need to add it to the property you need to be bound by the parent component, we can use a header as an example, lets pretend that you need to bind a title property, after you import the Input property you are able to use it now, and the way you use it is the following:

```
@Input() title: string = '';
```
That way when you use your component inside the parent you can bound title property to a property from the parent or pass directly a string:

```
//Inside the parent component
<app-header-component [title]="'My New App'" />
```

## Event Binding
