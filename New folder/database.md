# create table commands

### useuser_datar table

```sql
CREATE TABLE user_data (
  user_id VARCHAR(50),
  name VARCHAR(255),
  gender VARCHAR(50),
  date_of_birth DATE,
  location VARCHAR(255),
  phone_no VARCHAR(20),
  whatsapp_no VARCHAR(20),
  joining_date DATE,
);
```

```sql
INSERT INTO user_data (user_id, name, gender, date_of_birth, location, phone_no, whatsapp_no, joining_date)
VALUES
('USR001', 'John Smith', 'Male', '1985-03-15', 'New York, USA', '+12125551234', '+12125551234', '2020-01-10'),
('USR002', 'Emily Johnson', 'Female', '1992-07-22', 'London, UK', '+442071234567', '+442071234567', '2020-02-15'),
('USR003', 'Michael Brown', 'Male', '1988-11-05', 'Toronto, Canada', '+14165551234', '+14165551234', '2020-03-20'),
('USR004', 'Sarah Williams', 'Female', '1995-05-30', 'Sydney, Australia', '+61212345678', '+61212345678', '2020-04-25'),
('USR005', 'David Lee', 'Male', '1990-09-12', 'Singapore', '+6565123456', '+6565123456', '2020-05-30'),
('USR006', 'Jennifer Davis', 'Female', '1987-01-18', 'Berlin, Germany', '+493012345678', '+493012345678', '2020-06-10'),
('USR007', 'Robert Wilson', 'Male', '1983-12-25', 'Paris, France', '+33123456789', '+33123456789', '2020-07-15'),
('USR008', 'Lisa Miller', 'Female', '1993-04-08', 'Tokyo, Japan', '+81312345678', '+81312345678', '2020-08-20'),
('USR009', 'James Taylor', 'Male', '1991-08-14', 'Mumbai, India', '+912212345678', '+912212345678', '2020-09-25'),
('USR010', 'Maria Garcia', 'Female', '1986-06-20', 'Mexico City, Mexico', '+525512345678', '+525512345678', '2020-10-30');
```

```sql
CREATE TABLE membership_plans (
  user_id VARCHAR(6),
  plan_name VARCHAR(30),
  amount INTEGER,
  discount INTEGER,
  balance INTEGER,
  trainer VARCHAR(30),
  date DATE
);
```

### trainers table

```sql
CREATE TABLE trainers (
    trainer_id VARCHAR(6),
    name VARCHAR(30),
    gender VARCHAR(6),
    date_of_birth VARCHAR(10),
    phone_no VARCHAR(15),
    whatsapp_number VARCHAR(15),
    joining_date VARCHAR(10),
    location VARCHAR(50),
    pt_attendance VARCHAR(5)
);
```

```sql
INSERT INTO trainers (trainer_id, name, gender, date_of_birth, phone_no, whatsapp_number, joining_date, location, pt_attendance) VALUES
('T00001', 'Rakesh Tiwari', 'Male', '1985-04-12', '+919345678901', '+919345678901', '2023-01-15', 'Mumbai, India', '95%'),
('T00002', 'Suman Yadav', 'Female', '1990-06-20', '+918234567890', '+918234567890', '2023-03-10', 'Delhi, India', '92%'),
('T00003', 'Vijay Chauhan', 'Male', '1988-09-05', '+917123456789', '+917123456789', '2023-05-25', 'Bangalore, India', '98%'),
('T00004', 'Anita Bose', 'Female', '1992-11-18', '+916012345678', '+916012345678', '2023-07-30', 'Kolkata, India', '90%'),
('T00005', 'Sameer Khan', 'Male', '1987-02-28', '+915901234567', '+915901234567', '2023-09-12', 'Hyderabad, India', '93%');
```

### transations table

```sql
CREATE TABLE transations (
    user_id VARCHAR(6),
    bill_no VARCHAR(6),
    date VARCHAR(10),
    plan VARCHAR(30),
    transc_type VARCHAR(20),
    pay_method VARCHAR(20),
    amount VARCHAR(5),
    balance VARCHAR(5)
);
```

### plans table

```sql
CREATE TABLE plans (
    plan_name VARCHAR(30),
    amount VARCHAR(5),
    duration VARCHAR(10)
);
```
