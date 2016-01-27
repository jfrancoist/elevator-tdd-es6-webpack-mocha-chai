import $ from 'jquery';
import Mustache from 'mustache';
import template from './app_ui.html';
import card_template from './material_card_template.html';
import Building from '../building.js';
import 'materialize-css/sass/materialize.scss';
import './app_ui.scss';


export default class AppUI {
    constructor() {
        this.max_floor_number = 100;
    }    
    initialize_building(event) {
        event.preventDefault();
        try
        {
            var no_of_floors = parseInt($('#no-of-floors').val());
            if(no_of_floors > 200) {
              this.update_status_windows(`seriously ${no_of_floors} floors ! no can do. how about something less than 200 ?`);  
            } else {
              this.create_building(no_of_floors);   
            }           
        } catch (ex) {
             this.update_status_windows(`${ex}`);           
        }
    }
    go_to_floor(event) {
        event.preventDefault();
        var floor_to_go = parseInt($('#sel-available-floors').val());
        this._building.go_to_floor(floor_to_go);
        this.update_status_windows(`Elevator is : ${this._building.get_elevator_current_direction()}`);
        this.update_status_windows(`Elevator now on : ${floor_to_go} floor`);
    }
    create_building(no_of_floors) {
        this._building = new Building(no_of_floors);
        this.update_floor_selector();
        $('#status-window').html(''); // empty messages
        this.update_status_windows(`New building with ${no_of_floors} has been created`);
    }
    update_floor_selector() {
        // removes all options before adding new ones
        $('#sel-available-floors')
            .find('option')
            .remove()
            .end();
                    
        for (var i = 0; i < this._building.get_number_of_floors(); i++) {
            $('#sel-available-floors')
                .append($("<option></option>")
                    .attr("value", i)
                    .text(`Floor ${i}`));
        }

    }    
    update_status_windows(message) {
        const text = message;
        $('#status-window').prepend(Mustache.render(card_template, { text }));
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