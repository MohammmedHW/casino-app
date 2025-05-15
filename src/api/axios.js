// // // import axios from "axios";

// // // const API = axios.create({
// // //   baseURL:
// // //     process.env.NODE_ENV === "production"
// // //       ? "https://casino-backened.onrender.com/api"
// // //       : "http://localhost:4000/api",

// // //   withCredentials: true,
// // // });

// // // // Request interceptor
// // // API.interceptors.request.use((config) => {
// // //   const token = localStorage.getItem("token");
// // //   if (token) {
// // //     config.headers["x-auth-token"] = token;
// // //   }
// // //   return config;
// // // });

// // // // Response interceptor
// // // API.interceptors.response.use(
// // //   (response) => response,
// // //   (error) => {
// // //     if (error.response.status === 401) {
// // //       localStorage.removeItem("token");
// // //       window.location.href = "/login";
// // //     }
// // //     return Promise.reject(error);
// // //   }
// // // );

// // // export default API;

// // // axios.js (should be your only axios instance)
// // import axios from "axios";

// // const API = axios.create({
// //   baseURL:
// //     process.env.NODE_ENV === "production"
// //       ? "https://casino-backened.onrender.com/api"
// //       : "http://localhost:4000/api",
// //   withCredentials: true,
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // });

// // // Request interceptor
// // API.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("token");
// //   if (token) {
// //     config.headers["x-auth-token"] = token;
// //   }
// //   return config;
// // });

// // // Smarter response interceptor
// // API.interceptors.response.use(
// //   (response) => response,
// //   (error) => {
// //     if (error.response?.status === 401) {
// //       // Don't redirect for auth-related endpoints
// //       if (!error.config.url.includes("/auth/")) {
// //         localStorage.removeItem("token");
// //         // Use window.location.assign for better reliability
// //         window.location.assign("/login");
// //       }
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// // export default API;

// import axios from "axios";
// import { logout } from "./auth";

// const API = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "https://casino-backened.onrender.com/api"
//       : "http://localhost:4000/api",
//   withCredentials: true,
//   timeout: 10000,
// });

// // Request interceptor
// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["x-auth-token"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle network errors
//     if (!error.response) {
//       console.error("Network Error:", error.message);
//       return Promise.reject({
//         message: "Network error. Please check your connection.",
//       });
//     }

//     // Handle 401 Unauthorized
//     if (error.response.status === 401) {
//       // Skip redirect for auth routes
//       if (!error.config.url.includes("/auth")) {
//         logout();
//         if (window.location.pathname !== "/login") {
//           window.location.replace(
//             `/login?redirect=${encodeURIComponent(window.location.pathname)}`
//           );
//         }
//       }
//     }

//     // Return consistent error format
//     return Promise.reject({
//       status: error.response.status,
//       message: error.response.data?.message || "Request failed",
//       data: error.response.data,
//     });
//   }
// );

// export default API;

import axios from "axios";
import { logout } from "./auth";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://casino-backened.onrender.com/api"
      : "http://localhost:4000/api",
  withCredentials: true,
  timeout: 30000, // Increased timeout to 30 seconds
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }

    // Log requests in development
    if (process.env.NODE_ENV === "development") {
      console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
API.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (process.env.NODE_ENV === "development") {
      console.log(
        `API Response: ${response.config.method.toUpperCase()} ${
          response.config.url
        } - ${response.status}`
      );
    }
    return response;
  },
  (error) => {
    // Handle network errors
    if (!error.response) {
      console.error("Network Error:", error.message);
      return Promise.reject({
        message: "Network error. Please check your connection.",
        originalError: error.message,
      });
    }

    // Log error details
    console.error(
      `API Error ${
        error.response.status
      }: ${error.config.method.toUpperCase()} ${error.config.url}`
    );
    console.error("Error details:", error.response.data);

    // Handle 401 Unauthorized
    if (error.response.status === 401) {
      // Skip redirect for auth routes
      if (!error.config.url.includes("/auth")) {
        logout();
        if (window.location.pathname !== "/login") {
          window.location.replace(
            `/login?redirect=${encodeURIComponent(window.location.pathname)}`
          );
        }
      }
    }

    // Return consistent error format
    return Promise.reject({
      status: error.response.status,
      message: error.response.data?.message || "Request failed",
      data: error.response.data,
      originalError: error,
    });
  }
);

export default API;
