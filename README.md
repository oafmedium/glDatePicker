## glDatePicker for Meteor

Meteor implementation of [glDatePicker](https://github.com/glad/glDatePicker) for jQuery.
Fork of [properapp/glDatePicker](https://github.com/properapp/glDatePicker)

## Usage

Install via Meteor:

` meteor add oaf:gldatepicker `

Add to your template's rendered function:

```
Template.[Template Name].rendered = function() {
  $(".datepicker").glDatePicker();
}
```
