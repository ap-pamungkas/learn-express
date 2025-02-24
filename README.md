# User Management API

## 📌 Deskripsi
User Management API adalah RESTful API berbasis Node.js menggunakan Express dan Sequelize sebagai ORM untuk mengelola data pengguna.

## 🛠 Teknologi yang Digunakan
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework untuk backend
- **Sequelize** - ORM untuk MySQL/PostgreSQL
- **MySQL** - Database
- **Postman** - Untuk testing API

---

## 🚀 Cara Menjalankan Proyek
### 1️⃣ **Clone Repository**
```sh
git clone https://github.com/username/repository-name.git
cd repository-name
```

### 2️⃣ **Instal Dependensi**
```sh
npm install
```

### 3️⃣ **Konfigurasi Database**
Edit file `.env` dan sesuaikan dengan database Anda:
```sh
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=yourdatabase
DB_DIALECT=mysql
PORT=3000
```

### 4️⃣ **Jalankan Migration** (Jika Menggunakan Sequelize)
```sh
npx sequelize-cli db:migrate
```

### 5️⃣ **Jalankan Server**
```sh
npm start
```

Server akan berjalan di `http://localhost:3000/api`

---

## 📡 Endpoint API

### ✅ **1. Get All Users**
**GET** `/api/user`
#### Response:
```json
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "nama": "John Doe",
            "email": "johndoe@example.com"
        }
    ]
}
```

### ✅ **2. Get User by ID**
**GET** `/api/user/:id`
#### Response:
```json
{
    "id": 1,
    "nama": "John Doe",
    "email": "johndoe@example.com"
}
```

### ✅ **3. Create User**
**POST** `/api/user`
#### Request Body:
```json
{
    "nama": "Jane Doe",
    "email": "janedoe@example.com",
    "password": "password123"
}
```
#### Response:
```json
{
    "message": "User created successfully",
    "data": {
        "id": 2,
        "nama": "Jane Doe",
        "email": "janedoe@example.com"
    }
}
```

### ✅ **4. Update User**
**PUT** `/api/user/:id`
#### Request Body:
```json
{
    "nama": "Jane Doe Updated"
}
```
#### Response:
```json
{
    "message": "User updated successfully"
}
```

### ✅ **5. Delete User**
**DELETE** `/api/user/:id`
#### Response:
```json
{
    "message": "User deleted successfully"
}
```

---

## 📝 Lisensi
Proyek ini dibuat untuk tujuan pembelajaran dan dapat digunakan secara bebas.

---

## 🤝 Kontribusi
Jika ingin berkontribusi, silakan buat pull request atau ajukan issue di repository ini!

🚀 **Selamat Coding!** 🎉

