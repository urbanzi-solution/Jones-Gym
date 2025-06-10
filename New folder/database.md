# create table commands

### useuser_datar table

```sql
CREATE TABLE user_data (
    user_id VARCHAR(6),
    name VARCHAR(30),
    gender VARCHAR(6),
    date_of_birth VARCHAR(10),
    phone_no VARCHAR(15),
    whatsapp_number VARCHAR(15),
    joining_date VARCHAR(10),
    location VARCHAR(50)
);
```

### user_plan table

```sql
CREATE TABLE user_plan (
    user_id VARCHAR(6),
    plan VARCHAR(30),
    trainer_name VARCHAR(30),
    balance VARCHAR(5),
    exp_data VARCHAR(10),
    transactions VARCHAR(5)
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


### Demo insrt data to user_data

```sql
INSERT INTO user_data (user_id, name, gender, date_of_birth, phone_no, whatsapp_number, joining_date, location) VALUES
('U00006', 'Anjali Gupta', 'Female', '1991-09-05', '+919123456789', '+919123456789', '2023-06-10', 'Chennai, India'),
('U00007', 'Rohit Kumar', 'Male', '1987-12-25', '+918987654321', '+918987654321', '2023-07-15', 'Kolkata, India'),
('U00008', 'Meera Desai', 'Female', '1994-04-18', '+917876543210', '+917876543210', '2023-08-20', 'Pune, India'),
('U00009', 'Sanjay Reddy', 'Male', '1990-01-30', '+916789012345', '+916789012345', '2023-09-25', 'Jaipur, India'),
('U00010', 'Neha Joshi', 'Female', '1996-06-08', '+915678901234', '+915678901234', '2023-10-30', 'Lucknow, India'),
('U00011', 'Kiran Malhotra', 'Female', '1989-02-14', '+919234567890', '+919234567890', '2023-11-05', 'Surat, India'),
('U00012', 'Arjun Mehra', 'Male', '1993-10-10', '+918876543210', '+918876543210', '2023-12-12', 'Noida, India'),
('U00013', 'Pooja Nair', 'Female', '1997-07-23', '+917765432109', '+917765432109', '2024-01-18', 'Kochi, India'),
('U00014', 'Vivek Sharma', 'Male', '1986-03-29', '+916654321098', '+916654321098', '2024-02-22', 'Indore, India'),
('U00015', 'Riya Kapoor', 'Female', '1995-05-17', '+915543210987', '+915543210987', '2024-03-30', 'Nagpur, India');
```

```sql
INSERT INTO trainers (trainer_id, name, gender, date_of_birth, phone_no, whatsapp_number, joining_date, location, pt_attendance) VALUES
('T00001', 'Rakesh Tiwari', 'Male', '1985-04-12', '+919345678901', '+919345678901', '2023-01-15', 'Mumbai, India', '95%'),
('T00002', 'Suman Yadav', 'Female', '1990-06-20', '+918234567890', '+918234567890', '2023-03-10', 'Delhi, India', '92%'),
('T00003', 'Vijay Chauhan', 'Male', '1988-09-05', '+917123456789', '+917123456789', '2023-05-25', 'Bangalore, India', '98%'),
('T00004', 'Anita Bose', 'Female', '1992-11-18', '+916012345678', '+916012345678', '2023-07-30', 'Kolkata, India', '90%'),
('T00005', 'Sameer Khan', 'Male', '1987-02-28', '+915901234567', '+915901234567', '2023-09-12', 'Hyderabad, India', '93%');
```