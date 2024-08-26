create table world_food (
	country text,
	rice float,
	wheat float
);
select * from world_food;
select country from world_food;
select country, wheat from world_food;
select rice from world_food where country = 'United States';
select country from world_food where wheat > 20;
select * from world_food where country like 'U' || '%';
select * from world_food where country like '%' || 'a';