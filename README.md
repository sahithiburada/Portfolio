
# Sahithi's Portfolio 🚀

A visually stunning, interactive portfolio to showcase my Fullstack Development and UI/UX Design work.

## 🌐 Live Site

🔗 **URL**: [https://lovable.dev/projects/c7ddf9bd-960b-4d0f-a655-069b8b83656a](https://lovable.dev/projects/c7ddf9bd-960b-4d0f-a655-069b8b83656a)

---

### 2. 💻 Edit Locally in Your IDE

Make changes using VS Code or any other IDE:

```bash
# Step 1: Clone the repository
git clone https://github.com/sahithiburada/Portfolio.git

# Step 2: Go into the project folder
cd Portfolio

# Step 3: Install dependencies
npm install

# Step 4: Run the development server
npm run dev
```

---

## ✨ Features

- **Hero Section**: Interactive glassy cards with 3D tilt effects, animated background particles, and call-to-action buttons.
- **Experience Timeline**: A linear timeline of my professional journey with expandable details for achievements and skills.
- **Contact Form**: A fully functional form to send messages directly to my email via EmailJS.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern Tech Stack**: Built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript  
- **Build Tool**: Vite  
- **Styling**: Tailwind CSS  
- **Icons**: Lucide React  
- **Email Service**: EmailJS (for the contact form)

---

## 📦 Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- npm (or yarn)

### Steps

```bash
# Clone the Repository
git clone https://github.com/sahithiburada/Portfolio.git
cd Portfolio

# Install Dependencies
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory.

Add your EmailJS credentials (obtained from the EmailJS dashboard):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

---

## 📧 EmailJS Configuration

The contact form uses EmailJS to send messages. To configure it:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create an email service and template in the EmailJS dashboard.
3. Copy your **Service ID**, **Template ID**, and **Public Key**.
4. Add these credentials to your `.env` file as shown above.
5. Test the contact form by submitting a message.

---

## 🖥️ Usage

- **Hero Section**: Navigate through the interactive cards and use the CTA buttons to jump to sections.
- **Experience Timeline**: Hover over timeline dots for animations and click "Show More" to view details.
- **Contact Form**: Fill out the form to send me a message directly.

---

## 🚀 Deployment

To deploy to a hosting service (e.g., Netlify, Vercel):

```bash
# Build the project
npm run build
```

- Deploy the `dist` folder to your hosting provider.
- Add the EmailJS environment variables in your hosting provider’s dashboard.

---

## 🐛 Troubleshooting

- **Contact Form Issues**: Ensure EmailJS credentials are correct in the `.env` file and check the browser console for errors.
- **JSX Errors**: Verify that `vite.config.ts` includes the `@vitejs/plugin-react-swc` plugin and `tsconfig.json` has `"jsx": "react-jsx"`.

---

## 📬 Contact

Reach out via the contact form on the portfolio or email me at `your-email@example.com`.

---

Built with ❤️ by **Sahithi Burada**
