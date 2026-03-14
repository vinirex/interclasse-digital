# 🏆 Interclasse Digital

## 👥 Contributors

| Name          | RM        | 
| ------------- | --------- | 
|Diogo Julio    |- RM553837 |
|Vinicius Silva |- RM553240 |
|Victor Didoff  |- RM552965 |
|Matheus Zottis |- RM94119  |
|Jonata Rafael  |- RM552939 |

---

## 📱 Project Overview

**Interclasse Digital** is a mobile application built with **Expo + React Native** designed to organize and display information about a school's **interclass sports tournament**.

The app allows students and teachers to easily access:

* 🏆 Tournament standings
* ⚽ Sports modalities
* 📅 Match schedule
* 📊 Class rankings

The project demonstrates the integration of **AsyncStorage for local data persistence** and **API communication for rankings**.

---

## 🚀 Technologies Used

* **React Native**
* **Expo**
* **Expo Router**
* **AsyncStorage**
* **Axios**
* **TypeScript**

---

## 📂 Project Structure

```
interclasse-digital
│
├── app
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── modalidades.tsx
│   ├── classificacao.tsx
│   └── calendario.tsx
│
├── assets
├── components
├── constants
└── package.json
```

---

## ⚙️ Features

### 🏅 Modalidades

Displays the sports included in the tournament.

Examples:

* Futsal
* Vôlei
* Basquete
* E-sports

---

### 🏆 Classificação

Shows the **ranking of classes based on points** during the tournament.

Example:

| Class          | Points |
| -------------- | ------ |
| 3º ES Paulista | 9      |
| 2º ES Lins     | 7      |
| 1º ADS         | 5      |

---

### 📅 Calendário de Jogos

Displays scheduled matches including:

* Sport
* Competing classes
* Time
* Location

Game information can be **stored locally using AsyncStorage**.

---

## 💾 Local Storage

The application uses **AsyncStorage** to persist match schedules so the data remains available even after the app is restarted.

---

## 🌐 API Integration

The ranking screen demonstrates **API integration** using **Axios** to retrieve standings data.

---

## ▶️ Running the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start the Expo server

```
npx expo start
```

### 3️⃣ Run the application

* Press **a** → Android Emulator
* Press **i** → iOS Simulator
* Scan QR code → Expo Go app

---

## 📚 Educational Purpose

This project was developed as part of a **mobile development learning activity**, focusing on:

* Mobile UI development
* Navigation with Expo Router
* Local storage management
* API integration

---

## 📄 License

This project is intended for **educational purposes**.
