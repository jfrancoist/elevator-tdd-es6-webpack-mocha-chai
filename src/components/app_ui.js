import $ from 'jquery';
import Mustache from 'mustache';
import template from './app_ui.html';
import './app_ui.scss';
import Building from '../building.js';

export default class AppUI {
    initialize_building(event) {
        event.preventDefault();
        var no_of_floors = parseInt($('#no-of-floors').val());
        this.create_building(no_of_floors);
    }
    go_to_floor(event) {
        event.preventDefault();
        var floor_to_go = parseInt($('#sel-available-floors').val());
        this.update_status_windows(`Elevator current floor is : ${this._building.get_elevator_current_position()}`);        
        this.update_status_windows(`Elevator will be going to floor : ${floor_to_go}`);
        this._building.go_to_floor(floor_to_go);
        this.update_status_windows(`Elevator is : ${this._building.get_elevator_current_direction()}`);
        this.update_status_windows(`Elevator now on : ${floor_to_go} floor`);
    }
    create_building(no_of_floors) {
        this._building = new Building(no_of_floors);
        this.update_floor_selector();
        this.update_status_windows(`New building with ${no_of_floors} has been created`);
    }
    update_floor_selector() {
        for (var i = 0; i < this._building.get_number_of_floors(); i++) {
            $('#sel-available-floors')
                .append($("<option></option>")
                    .attr("value", i)
                    .text(`Floor ${i}`));
        }

    }    
    update_status_windows(message) {
        $('#status-window').append(message);
        $('#status-window').append("<br />");
    }
    render(node) {
        const text = $(node).text();

        $(node).html(
            Mustache.render(template, { text })
            );
        
        // Attach our listeners
        $('#btn-initialize-building').click(this.initialize_building.bind(this));        
        $('#btn-go-to-floor').click(this.go_to_floor.bind(this));
    }
}