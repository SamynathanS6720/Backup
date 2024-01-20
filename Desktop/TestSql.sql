
SET search_path TO event_management;


select *
from usertable;

SELECT *
from events;

delete from events 
where user_id = 65 ;

delete from usertable 
where event_id = 2,5,7,8,9  ;

DELETE FROM events
WHERE event_id IN ( 2,5,7,8,9);

SELECT * FROM event_management.events 
                                where event_type = 'Inperson'

SELECT * FROM events 
where event_type = 'hybrid';

SELECT * FROM events 
where event_type = 'virtual';


delete from events
where event_id = 4 ;

eventTittle: 'Walk-in Interview at Kadit Innovations',
                    eventdescription: 'We are excited to announce that Kadit Innovations is currently hosting walk-in interviews for talented individuals like yourself. This is a fantastic opportunity to showcase your skills, explore potential career paths, and become a part of our dynamic team. During the interview, you will have the chance to meet our team members and learn more about Kadit Innovations mission, values, and the exciting projects we are working on.',
                    eventDate: 'July 06, 2023',
                    eventStartTime: '10:00 AM',
                    eventEndTime: '5:00 PM',
                    eventLocation: 'Kadayanallur, TN',
                    mounth: 'July',
                    year: '2023',


insert into events (event_name,
                    event_description,
                    event_start_date,
                    event_end_date,
                    event_start_time,
                    event_end_time,
                    location_name,
                    event_location_id,
                    event_status,
                    event_type,
                    event_organizer_id)
values (
    'Football Live' ,
    'we are conduting a workshop to enhance the devOps skill to the Kadit team' ,
    '2023/09/27',
    '2023/09/30',
    '12:00 AM',
    '3:00 PM',
    'Kadayanallur, TN',
    6,
    'Active',
    'Inperson',
    6
    )
    returning event_id event_name, event_description,
                    event_start_date, event_end_date, event_start_time,
                    event_end_time, location_name, event_location_id,
                    event_status, event_type, event_organizer_id

SELECT *
FROM events
WHERE event_start_date <= NOW()
ORDER BY event_start_date DESC
LIMIT 4;

SELECT *, now()
FROM event_management.events
WHERE event_start_date <= NOW()
ORDER BY event_start_date DESC
LIMIT 4;

SET search_path TO event_management;


select * from event_management.UserTable where email_id = 'Raja@123.com'


CREATE TABLE events (   event_id serial PRIMARY KEY,
                    event_name text NOT NULL,
                    event_description text NOT NULL,
                    event_start_date date NOT NULL,
                    event_end_date date NOT NULL,
                    event_start_time time NOT NULL,
                    event_end_time time NOT NULL,
                    location_name text NOT NULL,
                    event_location_id integer NOT NULL,
                    event_status text NOT NULL,
                    event_type text NOT NULL,
                    event_organizer_id integer NOT NULL);


insert into events ()
select *
from events;


insert into events (event_name,
                    event_description,
                    event_start_date,
                    event_end_date,
                    event_start_time,
                    event_end_time,
                    location_name,
                    event_location_id,
                    event_status,
                    event_type,
                    event_organizer_id)
values ('Walk in interview',)
select *
from usertable;


alter table usertable rename login_id to email_id ;

alter table usertable add COLUMN password VARCHAR(50) ;


select *
from usertable;

