from odoo import models, fields

class KaditAssetLog(models.Model):
    _name = 'kadit.asset.log'
    _inherit=["mail.thread"]
    _description = 'Asset Log'

    message = fields.Text(string='Message', required=True)
    date = fields.Datetime(string='Date', default=fields.Datetime.now)
    related_record = fields.Many2one('kadit.asset', string='Related Record')
