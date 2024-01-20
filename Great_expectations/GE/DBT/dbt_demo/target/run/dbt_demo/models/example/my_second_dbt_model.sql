
  create or replace  view DEV.Dev_dbt_cli.my_second_dbt_model
  
   as (
    -- Use the `ref` function to select from other models

select *
from DEV.Dev_dbt_cli.my_first_dbt_model
where id = 1
  );
