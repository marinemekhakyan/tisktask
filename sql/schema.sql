DROP DATABASE IF EXISTS tisktask_db;
CREATE DATABASE tisktask_db;
USE tisktask_db;

CREATE TABLE landlords(
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  property_name VARCHAR(100) NOT NULL,
  property_address VARCHAR(100) NOT NULL,
  property_phone VARCHAR(100) NOT NULL,
  personal_phone VARCHAR(100) NOT NULL,
  property_email VARCHAR(100) NOT NULL,
  personal_email VARCHAR(100) NOT NULL,
  -- login_password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tenants(
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  primary_phone VARCHAR(100) NOT NULL,
  primary_email VARCHAR(100) NOT NULL,
  property_name VARCHAR(100) NOT NULL,
  property_address VARCHAR(100) NOT NULL,
  unit_number INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tickets(
  id INTEGER AUTO_INCREMENT NOT NULL,
  request_type VARCHAR(100) NOT NULL,
  open_date VARCHAR(100) NOT NULL,
  close_date VARCHAR(100) NOT NULL,
  first_name_tenant VARCHAR(100) NOT NULL,
  last_name_tenant VARCHAR(100) NOT NULL,
  first_name_manager VARCHAR(100) NOT NULL,
  last_name_manager VARCHAR(100) NOT NULL,
  property_name VARCHAR(100) NOT NULL,
  unit_number INTEGER NOT NULL,
  property_address VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

