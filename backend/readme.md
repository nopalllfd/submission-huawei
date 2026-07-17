# Backend Development

## Deskripsi

Backend dikembangkan menggunakan **Node.js** dan **Express.js**.

Aplikasi menyediakan REST API sederhana untuk menerima data formulir dari frontend, menyimpannya sementara di dalam server menggunakan array (in-memory), dan mengembalikan data tersebut melalui endpoint API.

---

## Fitur

- Menerima data formulir melalui HTTP POST.
- Menyimpan data pada array di memory.
- Mengembalikan seluruh data melalui HTTP GET.
- Validasi sederhana pada request body.

---

## Struktur

```text
backend/
├── controllers/
├── routes/
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## Instalasi

```bash
npm install
```

---

## Menjalankan Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server berjalan pada

```
http://localhost:3000
```

---

## API Endpoint

### POST /form

Menambahkan data baru.

Contoh Request

```json
{
  "name": "John",
  "email": "john@mail.com"
}
```

Contoh Response

```json
{
  "message": "Data berhasil disimpan"
}
```

---

### GET /form

Mengambil seluruh data yang telah disimpan.

Contoh Response

```json
[
  {
    "name": "John",
    "email": "john@mail.com"
  }
]
```

---

## Penyimpanan Data

Data disimpan menggunakan array di dalam server (in-memory) sehingga data akan kembali kosong ketika server dihentikan.
