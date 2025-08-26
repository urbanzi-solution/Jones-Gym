# create table commands

### useuser_data table

```sql
CREATE TABLE user_data (
  user_id VARCHAR(10),
  name VARCHAR(30),
  gender VARCHAR(10),
  weight varchar(6),
  date_of_birth DATE,
  about varchar(50),
  location VARCHAR(100),
  phone_no VARCHAR(10),
  whatsapp_no VARCHAR(10),
  joining_date DATE
);
```

```sql
INSERT INTO user_data (user_id, name, gender, weight, date_of_birth, about, location, phone_no, whatsapp_no, joining_date)
VALUES
('USR001', 'John Smith', 'Male', '56', '1985-03-15', 'weight loss', 'New York, USA', '2125551234', '2125551234', '2020-01-10'),
('USR002', 'Emily Johnson', 'Female', '63', '1992-07-22', 'lean gain', 'London, UK', '2071234567', '2071234567', '2020-02-15'),
('USR003', 'Michael Brown', 'Male', '80', '1988-11-05', 'bulking', 'Toronto, Canada', '4165551234', '4165551234', '2020-03-20'),
('USR004', 'Sarah Williams', 'Female', '45', '1995-05-30', 'lean mass gain', 'Sydney, Australia', '1212345678', '1212345678', '2020-04-25'),
('USR005', 'David Lee', 'Male', '50', '1990-09-12', 'lean mass gain', 'Singapore', '6565123456', '6565123456', '2020-05-30'),
('USR006', 'Jennifer Davis', 'Female', '70', '1987-01-18', 'bulking','Berlin, Germany', '3012345678', '3012345678', '2020-06-10'),
('USR007', 'Robert Wilson', 'Male', '52', '1983-12-25', 'weight loss', 'Paris, France', '3123456789', '3123456789', '2020-07-15'),
('USR008', 'Lisa Miller', 'Female', '55', '1993-04-08', 'stamina', 'Tokyo, Japan', '1312345678', '1312345678', '2020-08-20'),
('USR009', 'James Taylor', 'Male', '63', '1991-08-14', 'weight loss', 'Mumbai, India', '2212345678', '2212345678', '2020-09-25'),
('USR010', 'Maria Garcia', 'Female', '60', '1986-06-20', 'flexibility', 'Mexico City, Mexico', '5512345678', '5512345678', '2020-10-30');
```

### trainers table

```sql
CREATE TABLE trainers (
    trainer_id VARCHAR(10),
    name VARCHAR(30),
    gender VARCHAR(10),
    date_of_birth VARCHAR(10),
    location VARCHAR(100),
    phone_no VARCHAR(10),
    whatsapp_number VARCHAR(10),
    joining_date VARCHAR(10)
);
```

```sql
INSERT INTO trainers (trainer_id, name, gender, date_of_birth, location, phone_no, whatsapp_number, joining_date)
VALUES
('TRN001', 'Alex Johnson', 'Male', '1980-05-12', 'Los Angeles, USA', '+12125559876', '+12125559876', '2019-01-15'),
('TRN002', 'Sophia Martinez', 'Female', '1985-08-22', 'Madrid, Spain', '+34123456789', '+34123456789', '2019-03-10'),
('TRN003', 'Daniel Kim', 'Male', '1990-11-30', 'Seoul, South Korea', '+82212345678', '+82212345678', '2019-05-20'),
('TRN004', 'Emma Wilson', 'Female', '1987-04-05', 'Toronto, Canada', '+14165554321', '+14165554321', '2019-07-15'),
('TRN005', 'Carlos Rodriguez', 'Male', '1983-09-18', 'Mexico City, Mexico', '+525512345678', '+525512345678', '2019-09-25'),
('TRN006', 'Priya Patel', 'Female', '1992-02-14', 'Mumbai, India', '+912212345678', '+912212345678', '2020-01-05'),
('TRN007', 'James White', 'Male', '1988-07-09', 'London, UK', '+442076543210', '+442076543210', '2020-03-12'),
('TRN008', 'Anna Schmidt', 'Female', '1991-12-25', 'Berlin, Germany', '+493098765432', '+493098765432', '2020-05-18'),
('TRN009', 'Luca Ferrari', 'Male', '1986-06-08', 'Rome, Italy', '+390612345678', '+390612345678', '2020-07-22'),
('TRN010', 'Yuki Tanaka', 'Female', '1993-03-17', 'Tokyo, Japan', '+81398765432', '+81398765432', '2020-09-30');
```

### plans table

```sql
CREATE TABLE plans (
    plan_name VARCHAR(30),
    description VARCHAR(100),
    amount INTEGER,
    duration VARCHAR(3),
    status VARCHAR(8)
);
```
```sql
INSERT INTO plans (plan_name, description, amount, duration, status)
VALUES
('Exercise Plan', 'Full-body workout with weights and cardio', 2000, '30', 'active'),
('Zumba Plan', 'High-energy dance fitness program', 1500, '30','active'),
('Calisthenics Plan', 'Bodyweight training for strength and flexibility', 3000, '60', 'active'),
('Yoga Plan', 'Mindfulness and flexibility training', 1000, '30','active'),
('CrossFit Plan', 'High-intensity functional training', 2500, '30','active'),
('Pilates Plan', 'Core strengthening and posture improvement', 1800, '30', 'inactive'),
('Boxing Plan', 'Cardio and strength training with boxing techniques', 2200, '60', 'inactive'),
('Swimming Plan', 'Low-impact full-body workout', 2700, '15', 'inactive'),
('HIIT Plan', 'Short bursts of intense exercise', 1900, '18', 'inactive'),
('Meditation Plan', 'Stress relief and mental wellness sessions', 1200, '20', 'inactive');
```

### membership_plans table

```sql
CREATE TABLE membership_plans (
  user_id VARCHAR(10),
  plan_name VARCHAR(30),
  bill_no VARCHAR(6),
  amount INTEGER,
  discount INTEGER,
  balance INTEGER,
  trans_type VARCHAR(15),
  trainer VARCHAR(30),
  date DATE,
  exp_date DATE
);
```

```sql
INSERT INTO membership_plans (user_id, plan_name, bill_no, amount, discount, balance, trans_type, trainer, date, exp_date)
VALUES
('USR001', 'Exercise Plan', 'BL001', 2000, 200, 1800, 'GPay', 'TRN001', '2024-12-01', '2024-12-31'),
('USR002', 'Zumba Plan', 'BL002', 1500, 150, 1350, 'Cash', 'TRN002', '2024-11-15', '2024-12-15'),
('USR003', 'Calisthenics Plan', 'BL003', 3000, 300, 2700, 'Other', 'TRN003', '2024-10-20', '2024-11-19'),
('USR004', 'Yoga Plan', 'BL004', 1000, 100, 900, 'GPay', 'TRN004', '2024-09-25', '2024-10-25'),
('USR005', 'CrossFit Plan', 'BL005', 2500, 250, 2250, 'Cash', 'TRN005', '2024-08-30', '2024-09-29'),
('USR006', 'Exercise Plan', 'BL006', 2000, 200, 1800, 'Other', 'TRN006', '2025-06-01', '2025-07-01'),
('USR007', 'Zumba Plan', 'BL007', 1500, 150, 1350, 'GPay', 'TRN007', '2025-06-05', '2025-07-05'),
('USR008', 'Calisthenics Plan', 'BL008', 3000, 300, 2700, 'Cash', 'TRN008', '2025-06-10', '2025-07-10'),
('USR009', 'Yoga Plan', 'BL009', 1000, 100, 900, 'Other', 'TRN009', '2025-06-15', '2025-07-15'),
('USR010', 'CrossFit Plan', 'BL010', 2500, 250, 2250, 'GPay', 'TRN010', '2025-06-20', '2025-07-20'),
('USR009', 'PT', 'BL009', 1000, 100, 900, 'Other', 'TRN001', '2025-06-15', '2025-07-15'),
('USR010', 'PT', 'BL010', 2500, 250, 2250, 'GPay', 'TRN001', '2025-06-20', '2025-07-20'),
('USR005', 'PT', 'BL005', 2500, 250, 2250, 'Cash', 'TRN001', '2025-07-2', '2025-08-2');
```

### trainer_attendance table

```sql
CREATE TABLE trainer_attendance (
    trainer_id VARCHAR(10),
    user_id VARCHAR(10),
    date DATE,
    status VARCHAR(5)
);
```

```sql
INSERT INTO trainer_attendance (trainer_id, user_id, date, status)
VALUES
('TRN001', 'USR009', '2025-07-01', 'P'),
('TRN001', 'USR009', '2025-07-02', 'A'),
('TRN001', 'USR009', '2025-07-03', 'P'),
('TRN001', 'USR009', '2025-07-04', 'P'),
('TRN001', 'USR009', '2025-07-05', 'A'),
('TRN001', 'USR009', '2025-07-06', 'P'),
('TRN001', 'USR009', '2025-07-07', 'P'),
('TRN001', 'USR009', '2025-07-08', 'A'),
('TRN001', 'USR009', '2025-07-09', 'P'),
('TRN001', 'USR009', '2025-07-10', 'P'),
('TRN001', 'USR010', '2025-07-01', 'A'),
('TRN001', 'USR010', '2025-07-02', 'P'),
('TRN001', 'USR010', '2025-07-03', 'P'),
('TRN001', 'USR010', '2025-07-04', 'A'),
('TRN001', 'USR010', '2025-07-05', 'P'),
('TRN001', 'USR010', '2025-07-06', 'A'),
('TRN001', 'USR010', '2025-07-07', 'P'),
('TRN001', 'USR010', '2025-07-08', 'P'),
('TRN001', 'USR010', '2025-07-09', 'A'),
('TRN001', 'USR010', '2025-07-10', 'P'),
('TRN001', 'USR005', '2025-07-01', 'P'),
('TRN001', 'USR005', '2025-07-02', 'P'),
('TRN001', 'USR005', '2025-07-03', 'A'),
('TRN001', 'USR005', '2025-07-04', 'P'),
('TRN001', 'USR005', '2025-07-05', 'A'),
('TRN001', 'USR005', '2025-07-06', 'P'),
('TRN001', 'USR005', '2025-07-07', 'A'),
('TRN001', 'USR005', '2025-07-08', 'P'),
('TRN001', 'USR005', '2025-07-09', 'P'),
('TRN001', 'USR005', '2025-07-10', 'A');
```

```sql
INSERT INTO trainer_attendance (trainer_id, user_id, date, status)
VALUES
('TRN001', 'USR009', '2025-07-01', 'P'),
('TRN001', 'USR009', '2025-07-02', 'A'),
('TRN001', 'USR009', '2025-07-03', 'P'),
('TRN001', 'USR010', '2025-07-01', 'A'),
('TRN001', 'USR010', '2025-07-02', 'P'),
('TRN001', 'USR010', '2025-07-03', 'P'),
('TRN001', 'USR005', '2025-07-01', 'P'),
('TRN001', 'USR005', '2025-07-02', 'P'),
('TRN001', 'USR005', '2025-07-03', 'A');
```

### notification table

```sql

```

```sql

```

### user_Remark table

```sql
CREATE TABLE user_Remark (
    user_id VARCHAR(10),
    remark VARCHAR(70)
);
```

```sql
INSERT INTO user_Remark (user_id, remark)
VALUES 
('TRN007', 'CrossFit Plan missbehave'),
('TRN008', 'Drinking'),
('TRN008', 'smoking');
```

### Blacklist table

```sql
CREATE TABLE Blacklist (
    user_id VARCHAR(10),
    description VARCHAR(50)
);
```

```sql
INSERT INTO user_Remark (user_id, description)
VALUES 
('TRN007', 'CrossFit Plan missbehave'),
('TRN008', 'Drinking'),
('TRN008', 'smoking');
```

### user_cred table

```sql
CREATE TABLE user_cred (
    username VARCHAR(15),
    password VARCHAR(100)
);
```

```sql
INSERT INTO user_cred (username, password)
VALUES 
('Manager', '$2b$10$RNEhdAw1oxZKlfTaiSP0wOK49LXq6a/YVNdn2G9HoTcTVxgVRXiam');
```

### datas
---

```sql
INSERT INTO membership_plans (user_id, plan_name, bill_no, amount, discount, balance, trans_type, trainer, date, exp_date)
VALUES
('JM240', '6 M PT', '468', 45000, 0, 0, 'Credit Card', '', '2025-08-01', '2026-01-29'),
('SJ233', '1 M G+P.T', '3684', 13000, 0, 0, 'GPay', '', '2025-08-01', '2025-08-31'),
('S187', '3 M P.T', '3685', 1000, 0, 0, 'GPay', '', '2025-08-01', '2025-10-31');
```

```sql
INSERT INTO plans (plan_name, description, amount, duration, status)
VALUES
('1 M Gym', '1 Month Gym', 4000, '30', 'active'),
('6 M P.T', '6 Months P.T', 45000, '181', 'active'),
('3 M Gym', '3 Months Gym', 9000, '91', 'active'),
('6 M Gym', '6 Months Gym', 14000, '182', 'active'),
('1 Y Gym', '1 Year Gym', 18000, '365', 'active'),
('1 M P.T', '1 Month P.T', 9000, '30', 'active'),
('3 M P.T', '3 Months P.T', 24000, '91', 'active'),
('6 M P.T', '6 Months P.T', 45000, '182', 'active'),
('1 Y P.T', '1 Year P.T', 84000, '365', 'active'),
('1 M T.P', '1 Month T.P', 8000, '30', 'active'),
('3 M T.P', '3 Months T.P', 22000, '91', 'active'),
('6 M T.P', '6 Months T.P', 35000, '182', 'active'),
('1 Y T.P', '1 Year T.P', 65000, '365', 'active'),
('1 M Gym + P.T', '1 Month Gym + P.T', 13000, '30', 'active');
```

```sql
INSERT INTO user_data (user_id, name, gender, weight, date_of_birth, about, location, phone_no, whatsapp_no, joining_date)
VALUES
('JM240', 'Praveen Nair', 'male', '75', '1980-08-13', '', 'Trivandrum', '9745500684', '9745500684', '2024-06-01'),
('SJ233', 'Rose Mary Geeja Varghese', 'male', '85', '1980-08-01', '', 'Vadappurath House, TC 15/176(1), Vellayambalam, Trivandrum', '9446221527', '9446221527', '2025-07-01'),
('S187', 'Anjana Sajikumar', 'female', '93', '2004-01-01', '', 'CRHS-26, KOWDIAR P.O, TRIVANDRUM ', '9778329274', '9778329274', '2025-08-01');
```

```sql
INSERT INTO user_remark (user_id, remark)
VALUES 
('S187', 'Bill no. 3685 T.P Converted to P.T');
```

```sql
INSERT INTO user_cred (username, password)
VALUES ('Manager', '$2b$10$RNEhdAw1oxZKlfTaiSP0wOK49LXq6a/YVNdn2G9HoTcTVxgVRXiam');
```


