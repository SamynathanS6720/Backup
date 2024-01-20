# -*- coding: utf-8 -*-

from odoo import models, fields, api

class KaditAssets(models.Model):
    _name = 'kadit.asset'
    _inherit = ["mail.thread"]
    _discription = 'Assets Record'
    _rec_name='description'

    assert_id = fields.Char(string='Assert ID', required=True , tracking=True)
    description = fields.Char(string='Description', required=True , tracking=True)
    Category = fields.Selection (
        [
            ("battery","Battery ( Inverter) "),
            ("books","Books"),
            ("electrical","Electrical"),
            ("furniture","Furniture "),
            ("laptop","Laptop "),
            ("machine","Machine "),
            ("machine_accessories","Machine Accessories "),
            ("monitor","Monitor "),
            ("other","Other "),
        ], required=True, default="other", tracking=True
    )
    account =fields.Selection(
        [
            ("kadit","Kadit"),
            ("radius","Radius"),
        ], required=True, default="Kadit", tracking=True
    )
    location = fields.Char(string='Location', required=True , tracking=True)
    serial_no = fields.Char(string='Serial No' , tracking=True)
    assigned_to = fields.Many2one('hr.employee', string='Assigned to', tracking=True)
    assigned_on = fields.Date(string='Assigned on', required=True , tracking=True)
    last_validate_on = fields.Date(string='Last Validate on', required=True, tracking=True )
    validated_by = fields.Many2one('hr.employee', string='Validated by', required=True , tracking=True )
    remarks = fields.Char(string='Remarks' , tracking=True)

