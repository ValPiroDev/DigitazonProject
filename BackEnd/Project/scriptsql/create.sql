create table dishes (id integer not null auto_increment, name varchar(255), description varchar(255), price integer not null, restaurant_id integer not null, primary key (id)) engine=InnoDB;
create table restaurants (id integer not null auto_increment, name varchar(255), reviews float(53) not null, city varchar(255), address varchar(255), primary key (id)) engine=InnoDB;

