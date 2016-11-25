import {
    Component,
    OnInit
} from '@angular/core';

const styles = [require('./eight-board.component.scss').toString()],
    template = require('./eight-board.component.html');

import {EightBoardInterface} from './eight-board.component.d';

/**
 * A component for entering a list of terms to be used with ngModel.
 */
@Component({
    moduleId: module.id,
    selector: 's2-eight-board',
    directives: [],
    styles,
    template
})
export class EightBoard implements EightBoardInterface, OnInit {

    public helloWorld(): string {
        return 'Hello World';
    }

    ngOnInit() {

    }
}
