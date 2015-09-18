import randomColor from 'randomcolor';
import {customElement, bindable, inject} from 'aurelia-framework';

export class HolderCustomElement {

    @bindable pattern;

    patternType(passedPattern) {
        return passedPattern == this.pattern;
    }

    getElems() {

        var color_array = ['monochrome', 'blue', 'green', 'red', 'orange', 'yellow', 'green'];
        var random_color = color_array[Math.floor(Math.random() * color_array.length)];

        var colors = randomColor({
            count: 10,
            hue: random_color
        });
        var elems = [];

        for (var i = 0; i < 10; i++) {
            var center = Math.round(Math.random() * 100);
            var shape_count = Math.floor(Math.random() * (15 - 7) + 7);
            var opacity = Math.floor(Math.random() * (2 - 1) + 1);
            var radius_increment = Math.floor(Math.random() * (7 - 4) + 4);

            for (var j = 1; j < shape_count; j++) {
                // var new_shape = '';
                switch(this.pattern){

                    case 'ellipsis':
                        elems.push({
                            cx: center+'%',
                            cy: center+'%',
                            rx: (j * radius_increment)+'%',
                            ry: (j * (radius_increment * 2))+'%',
                            fill: colors[i],
                            opacity: '0.' + opacity
                        });

                    break;

                    case 'square':
                        elems.push({
                            x: (center-((radius_increment*j)/2))+'%',
                            y: (center-((radius_increment*j)))+'%',
                            width: (j*radius_increment)+'%',
                            height: (j*(radius_increment*2))+'%',
                            fill: colors[i],
                            opacity: '0.' + opacity
                        });
                    break;

                    case 'rect':
                        elems.push({
                            x: center+'%',
                            y: center+'%',
                            rx: (j * radius_increment),
                            ry: (j * (radius_increment * 2)),
                            fill: colors[i],
                            opacity: '0.' + opacity
                        });
                    break;

                    default:
                        elems.push({
                            cx: center+'%',
                            cy: center+'%',
                            r: (j * radius_increment),
                            fill: colors[i],
                            opacity: '0.' + opacity
                        });

                }

            }

        }


        return elems;
    }


}
