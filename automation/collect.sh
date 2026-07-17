#!/bin/bash

# Direktori penyimpanan
OUTPUT_DIR="/home/cron"

# Membuat folder jika belum ada
mkdir -p "$OUTPUT_DIR"

# Format tanggal dan waktu
DATE=$(date +"%d%m%Y")
TIME=$(date +"%H.%M")

# Nama file output
FILE="$OUTPUT_DIR/cron_${DATE}_${TIME}.csv"

# Collect data dari resource
curl -s "https://jsonplaceholder.typicode.com/users" > "$FILE"

# Logging
echo "[$(date)] Data berhasil disimpan ke $FILE" >> /tmp/collect.log