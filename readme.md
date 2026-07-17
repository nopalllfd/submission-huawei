# Technical Test

Repository ini berisi penyelesaian technical test yang terdiri dari tiga bagian utama:

1. Backend Development
2. Automation Testing
3. Data Processing (SQL)

---

## Project Structure

```text
technical-test/
│
├── backend/
│   ├── README.md
│   └── ...
│
├── automation/
│   ├── README.md
│   ├── collect.sh
│   ├── cleanup.sh
│   └── crontab.conf
│
├── sql/
│   ├── README.md
│   └── answer.sql
│
├── docs/
│   └── Technical_Test_Documentation.docx
│
└── README.md
```

---

## Requirements

- Node.js 18+
- npm
- Linux (Ubuntu/Debian atau distro lain yang mendukung Cron)
- Cron Service
- SQL Database (MySQL/PostgreSQL)

---

## Repository Contents

### 1. Backend Development

Lokasi:

```text
backend/
```

Membangun REST API menggunakan **Node.js** dan **Express**.

Fitur:

- Menerima data form (POST)
- Menampilkan data yang tersimpan (GET)
- Penyimpanan menggunakan array (in-memory)

Dokumentasi lengkap:

```text
backend/README.md
```

---

### 2. Automation Testing

Lokasi:

```text
automation/
```

Berisi automation script menggunakan **Bash** dan **Cron**.

Fitur:

- Collect data dari resource
- Berjalan otomatis pukul **08.00**, **12.00**, dan **15.00**
- Menyimpan hasil ke `/home/cron`
- Menghapus file yang berumur lebih dari 30 hari

Dokumentasi lengkap:

```text
automation/README.md
```

---

### 3. Data Processing

Lokasi:

```text
sql/
```

Berisi seluruh query SQL sesuai dengan soal yang diberikan.

Meliputi:

- INSERT
- UPDATE
- Aggregate
- Sorting
- Subquery

Dokumentasi lengkap:

```text
sql/README.md
```

---

## Documentation

Dokumentasi setup dan konfigurasi tersedia pada folder:

```text
docs/
```

Dokumentasi mencakup:

- Setup Backend
- Setup Automation
- Konfigurasi Cron
- SQL Execution
- Struktur Project

---

## How to Run

### Backend

```bash
cd backend
npm install
npm run dev
```

### Automation

```bash
cd automation

chmod +x collect.sh
chmod +x cleanup.sh

crontab crontab.conf
```

### SQL

Jalankan seluruh query yang terdapat pada:

```text
sql/answer.sql
```

menggunakan MySQL atau PostgreSQL.

---

## Technology Stack

- Node.js
- Express.js
- Bash Script
- Cron
- SQL
- Git

---

## Author

Muhammad Naufal Fadhilah
