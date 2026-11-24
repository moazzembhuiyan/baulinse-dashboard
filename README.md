<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:1E3A8A,100:38BDF8&height=180&section=header&text=Baulinse%20Admin&fontSize=40&fontColor=ffffff&fontAlignY=36&desc=Project%20%26%20field-photo%20management&descAlignY=58&descSize=16" alt="Baulinse Admin" />

<p><b>📊 Admin Dashboard</b></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white" alt="Ant Design" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Recharts" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
</p>

</div>

## 📖 Overview

The admin dashboard for **Baulinse** — a platform where workers upload photos from the field and companies organise them by project and folder. Admins manage companies, workers and projects, and can connect **Nextcloud** or **OneDrive** for cloud storage.

## ✨ Key Features

### 🏗️ Projects & Media

- Project and folder management
- View images uploaded by workers
- Folder image galleries

### ☁️ Cloud Storage

- Connect **Nextcloud** and **OneDrive**
- Connection status checks

### 👷 Management

- Company details
- Worker management
- Earnings overview

### ⚙️ Admin

- Dashboard with charts
- Notifications & profile
- Time-zone aware dates
- Secure auth — login, OTP, password recovery

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) · React 19 |
| **Language** | TypeScript |
| **UI** | Ant Design · Tailwind CSS · Splide |
| **State & API** | Redux Toolkit · RTK Query · Redux Persist |
| **Forms** | React Hook Form · Zod |
| **Charts** | Recharts |
| **Dates** | date-fns-tz · Moment Timezone · Day.js |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/moazzembhuiyan/baulinse-dashboard.git
cd baulinse-dashboard
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BASE_URL=
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | Backend API base URL |

### Run

```bash
npm run dev
# open http://localhost:3000
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```text
src/
├── app/
│   ├── (Auth)/          # Login, forgot password, OTP, set new password
│   └── admin/           # Protected admin pages
├── components/          # Reusable UI components
├── redux/               # Store, API slices (RTK Query) & state
├── schema/              # Zod validation schemas
├── theme/               # Ant Design theme config
├── lib/ · utils/        # Helpers & utilities
└── middleware.ts       # Route protection
```

---

<div align="center">

### 👨‍💻 Developed by [Moazzem Hossen Bhuiyan](https://github.com/moazzembhuiyan)

<sub>Mobile App Developer (React Native) • Web Developer</sub>

<p>
  <a href="https://github.com/moazzembhuiyan"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/moazzem-hossen-bhuiyan-325432331/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:moazzembhuiyan394@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

<sub>⭐ If you like this project, consider giving it a star!</sub>

</div>
