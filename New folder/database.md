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

### membership_plans table

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
    location VARCHAR(50),
    phone_no VARCHAR(15),
    whatsapp_number VARCHAR(15),
    joining_date VARCHAR(10)
);
```

```sql

```

### plans table

```sql
CREATE TABLE plans (
    plan_name VARCHAR(30),
    description VARCHAR(250),
    amount INTEGER,
    duration VARCHAR(10),
    status VARCHAR(10)
);
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


