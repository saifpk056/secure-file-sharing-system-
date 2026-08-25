# 🔐 Secure File Sharing System

A secure file-sharing portal designed to demonstrate secure file exchange between **Internee.pk** and authorized external parties.

## 📌 Project Objective

The objective of this project is to provide a secure platform for exchanging files while protecting them from unauthorized access.

The system demonstrates:

- 🔐 File encryption
- ☁️ Cloud storage architecture
- 🔗 Secure file-sharing links
- 🛡️ Access control
- 🔍 File integrity verification
- 📊 Activity monitoring

---

## 🚀 Main Features

### 1. Secure File Upload

Users can select a report or document and upload it through the secure portal.

### 2. File Encryption

Files are protected using **AES-256 encryption** before storage.

### 3. Cloud Storage

The system is designed to use cloud object storage such as:

- Google Cloud Storage
- AWS S3
- Azure Blob Storage

### 4. Secure File Sharing

Authorized users can receive a secure, time-limited download link.

### 5. Signed URLs

Short-lived signed URLs can be used to prevent permanent public access to files.

### 6. SHA-256 Integrity Verification

SHA-256 can be used to verify that a file has not been modified.

### 7. Access Control

Only authorized users should be able to access shared files.

### 8. Activity Logs

The production system should record important events such as:

- File upload
- File download
- File sharing
- Link generation
- Access attempts

---

## 🖥️ Project Structure

```text
secure-file-sharing-system/
│
├── index.html
│
├── README.md
│
└── static/
    ├── style.css
    └── app.js
