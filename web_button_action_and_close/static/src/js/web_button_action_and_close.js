/* Copyright 2019 Mark Robinson
* License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl). */
odoo.define('web_button_action_and_close', function (require) {
"use strict";

    var View = require('web.View')

    View.include({
        do_execute_action: function (action_data, dataset, record_id, on_closed) {
            var self = this;
            return this._super(action_data, dataset, record_id, on_closed).then(function () {
                   if (action_data.hasOwnProperty("class") && action_data.class.includes('o_action_and_close')) {
                        return self.do_action({"type":"ir.actions.act_window_close"});
                   }
            });
        },
    });

});