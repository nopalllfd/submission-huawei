# Automation Testing

## Deskripsi

Folder ini berisi automation menggunakan Bash Script dan Cron Job.

Automation terdiri dari dua proses:

1. Collect data dari resource tertentu.
2. Data cleansing untuk menghapus file yang berumur lebih dari 30 hari.

---

## Struktur

```text
automation/
├── collect.sh
├── cleanup.sh
├── crontab.conf
└── README.md
```

---

## Resource

Data diambil dari endpoint berikut:

```
https://jsonplaceholder.typicode.com/users
```

---

## Output

Seluruh hasil collection disimpan pada

```
/home/cron
```

Format nama file

```
cron_ddmmyyyy_HH.MM.csv
```

Contoh

```
cron_19122024_08.00.csv
cron_19122024_12.00.csv
cron_19122024_15.00.csv
```

---

## Permission

Sebelum dijalankan

```bash
chmod +x collect.sh
chmod +x cleanup.sh
```

---

## Menjalankan Manual

Collect data

```bash
./collect.sh
```

Cleanup

```bash
./cleanup.sh
```

---

## Konfigurasi Cron

Install konfigurasi cron

```bash
crontab crontab.conf
```

Isi file `crontab.conf`

```cron
# Collect Data
0 8 * * * /home/automation/collect.sh
0 12 * * * /home/automation/collect.sh
0 15 * * * /home/automation/collect.sh

# Cleanup
0 0 * * * /home/automation/cleanup.sh
```

---

## Data Cleansing

Script `cleanup.sh` akan menghapus seluruh file CSV yang berumur lebih dari 30 hari menggunakan perintah

```bash
find /home/cron -type f -name "*.csv" -mtime +30 -delete
```
