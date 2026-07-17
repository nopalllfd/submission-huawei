#!/bin/bash

TARGET_DIR="/home/cron"

find "$TARGET_DIR" \
    -type f \
    -name "*.csv" \
    -mtime +30 \
    -delete

echo "File lama berhasil dibersihkan."