
{
    'name': 'kadit_assets',
    'version': '1.0',
    'category': 'Human Resources/kadit_assets',
    'sequence': 10,
    'summary': 'Asset Mangement App',
    'description': "Kadit Assets management App",
    'website': '',
    'images': [
        'images/hr_department.jpeg',
        'images/hr_employee.jpeg',
        'images/hr_job_position.jpeg',
        'static/src/img/default_image.png',
    ],
    'depends': [ 'hr',
                 'mail',            
    ],
    'data': [
        'data/kadit_asset.xml',
        'security/ir.model.access.csv',
        'data/data.xml',
        'view/assets.xml',
     ],
    'demo': [ ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'qweb': [
        'static/src/bugfix/bugfix.xml',
        'static/src/xml/hr_templates.xml',
    ],
    'license': 'LGPL-3',
}
