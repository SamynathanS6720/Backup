# -*- coding: utf-8 -*-

from odoo import models, fields

class KaditApp(models.Model):
    _name = 'hospital.patient'
    _discription = 'Patient Record'

    patient_name = fields.Char(string='Name', required=True )
    patient_age = fields.Integer('Age')
    gender =fields.Selection(
        [
            ("male","Male"),
            ("female","Female"),
        ], required=True, default="male"
    )
    notes = fields.Text(string='Notes')
    image = fields.Binary( String='Image' )
