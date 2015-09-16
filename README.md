# Responsive Embed Angular
Embed your typical <iframe> provided media content, within a responsive ratio set bounding box, with this Angular module that provides a directive to do so.

## Installation

### Bower

Run `bower install responsive-embed-angular` to download the `src/` folder to your `bower_components/` directory

### Add to Application Dependencies

Include the JavaScript file `responsive-embed-angular.js` or `responsive-embed-angular.min.js` in your project, and add the `responsiveEmbed` module to your Angular app dependencies like so;

`app.module('myApp', ['responsiveEmbed', ...])`

## Usage

The directive accepts the following attributes to pass data through to the directive;

- `url` - This is the url of your embed e.g. `http://youtube.com/embed/{videoID}`
- `ratio` - This is the ratio you want your embed to render at e.g. `16:9`, `4:3` or `1:1`
- `parameters` - These are additional HTTP GET parameters which will be concatenated to the end of your url with a `?` prefix. These should be passed in a serialized format e.g. `color=red&autoplay=1`.


