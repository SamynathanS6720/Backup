
{
    'name': 'kadit_app',
    'version': '1.1',
    'category': 'Human Resources/Employees',
    'sequence': 10,
    'summary': 'Our Test Application',
    'description': "Kadit Odoo App",
    'website': 'www.odoo.com/page/employees',
    'images': [
        'images/hr_department.jpeg',
        'images/hr_employee.jpeg',
        'images/hr_job_position.jpeg',
        'static/src/img/default_image.png',
    ],
    'depends': [ ],
    'data': [
        'security/ir.model.access.csv',
        'patient.xml',
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
