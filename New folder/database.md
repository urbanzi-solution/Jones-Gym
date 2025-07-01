# create table commands

### useuser_datar table

```sql
CREATE TABLE user_data (
  user_id VARCHAR(10),
  name VARCHAR(255),
  gender VARCHAR(50),
  date_of_birth DATE,
  location VARCHAR(255),
  phone_no VARCHAR(20),
  whatsapp_no VARCHAR(20),
  joining_date DATE
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
    description VARCHAR(250),
    amount INTEGER,
    duration VARCHAR(10),
    status VARCHAR(10)
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
  user_id VARCHAR(6),
  plan_name VARCHAR(30),
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
INSERT INTO membership_plans (user_id, plan_name, amount, discount, balance, trans_type, trainer, date)
VALUES
('USR001', 'Exercise Plan', 2000, 200, 1800, 'GPay', 'TRN001', '2023-01-05'),
('USR002', 'Zumba Plan', 1500, 150, 1350, 'Cash', 'TRN002', '2023-02-10'),
('USR003', 'Calisthenics Plan', 3000, 300, 2700, 'Other', 'TRN003', '2023-03-15'),
('USR004', 'Yoga Plan', 1000, 100, 900, 'GPay', 'TRN004', '2023-04-20'),
('USR005', 'CrossFit Plan', 2500, 250, 2250, 'Cash', 'TRN005', '2023-05-25'),
('USR006', 'Exercise Plan', 2000, 200, 1800, 'Other', 'TRN006', '2023-06-30'),
('USR007', 'Zumba Plan', 1500, 150, 1350, 'GPay', 'TRN007', '2023-07-05'),
('USR008', 'Calisthenics Plan', 3000, 300, 2700, 'Cash', 'TRN008', '2023-08-10'),
('USR009', 'Yoga Plan', 1000, 100, 900, 'Other', 'TRN009', '2023-09-15'),
('USR010', 'CrossFit Plan', 2500, 250, 2250, 'GPay', 'TRN010', '2023-10-20');
```

INSERT INTO membership_plans (user_id, plan_name, amount, discount, balance, trans_type, trainer, date, exp_date)
VALUES
('USR001', 'Exercise Plan', 2000, 200, 1800, 'GPay', 'TRN001', '2024-12-01', '2024-12-31'),
('USR002', 'Zumba Plan', 1500, 150, 1350, 'Cash', 'TRN002', '2024-11-15', '2024-12-15'),
('USR003', 'Calisthenics Plan', 3000, 300, 2700, 'Other', 'TRN003', '2024-10-20', '2024-11-19'),
('USR004', 'Yoga Plan', 1000, 100, 900, 'GPay', 'TRN004', '2024-09-25', '2024-10-25'),
('USR005', 'CrossFit Plan', 2500, 250, 2250, 'Cash', 'TRN005', '2024-08-30', '2024-09-29'),
('USR006', 'Exercise Plan', 2000, 200, 1800, 'Other', 'TRN006', '2025-06-01', '2025-07-01'),
('USR007', 'Zumba Plan', 1500, 150, 1350, 'GPay', 'TRN007', '2025-06-05', '2025-07-05'),
('USR008', 'Calisthenics Plan', 3000, 300, 2700, 'Cash', 'TRN008', '2025-06-10', '2025-07-10'),
('USR009', 'Yoga Plan', 1000, 100, 900, 'Other', 'TRN009', '2025-06-15', '2025-07-15'),
('USR010', 'CrossFit Plan', 2500, 250, 2250, 'GPay', 'TRN010', '2025-06-20', '2025-07-20');

### transations table

```sql
CREATE TABLE transations (
    user_id VARCHAR(6),
    bill_no VARCHAR(6),
    date VARCHAR(10),
    plan VARCHAR(30),
    trans_type VARCHAR(20),
    pay_method VARCHAR(20),
    amount INTEGER,
    discount INTEGER,
    balance INTEGER
);
```

```sql
INSERT INTO transations (user_id, bill_no, date, plan, trans_type, pay_method, amount, discount, balance)
VALUES
('USR001', 'BL0001', '2023-01-05', 'Exercise Plan', 'GPay', '', 2200, 200, 2000),
('USR001', 'BL0002', '2023-01-05', 'Yoga Plan', 'Cash', '', 1100, 100, 1000),
('USR002', 'BL0003', '2023-02-10', 'Zumba Plan', 'Cash', '', 1650, 150, 1500),
('USR003', 'BL0004', '2023-03-15', 'Calisthenics Plan', 'Other', '', 3300, 300, 3000),
('USR003', 'BL0005', '2023-04-15', 'CrossFit Plan', 'GPay', '', 2750, 250, 2500),
('USR004', 'BL0006', '2023-04-20', 'Yoga Plan', 'GPay', '', 1100, 100, 1000),
('USR005', 'BL0007', '2023-05-25', 'CrossFit Plan', 'Cash', '', 2750, 250, 2500),
('USR005', 'BL0008', '2023-06-25', 'CrossFit Plan', 'Other', '', 2750, 250, 2500),
('USR006', 'BL0009', '2023-06-30', 'Exercise Plan', 'Other', '', 2200, 200, 2000),
('USR007', 'BL0010', '2023-07-05', 'Zumba Plan', 'GPay', '', 1650, 150, 1500),
('USR007', 'BL0011', '2023-07-05', 'Yoga Plan', 'Cash', '', 1100, 100, 1000),
('USR008', 'BL0012', '2023-08-10', 'Calisthenics Plan', 'Cash', '', 3300, 300, 3000),
('USR009', 'BL0013', '2023-09-15', 'Yoga Plan', 'Other', '', 1100, 100, 1000),
('USR010', 'BL0014', '2023-10-20', 'CrossFit Plan', 'GPay', '', 2750, 250, 2500),
('USR010', 'BL0015', '2023-11-20', 'Exercise Plan', 'Cash', '', 2200, 200, 2000);
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

### 

```sql

```

```sql

```


