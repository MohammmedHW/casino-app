// import API from "./axios";

// // export const uploadImage = async (file) => {
// //   try {
// //     const formData = new FormData();
// //     formData.append("file", file);

// //     const response = await API.post("/upload/image", formData, {
// //       headers: {
// //         "Content-Type": "multipart/form-data",
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data.message || "Failed to upload image";
// //   }
// // };

// // uploadService.js
// export const uploadImage = async (file) => {
//   const formData = new FormData();
//   formData.append("image", file); // Changed from "file" to "image" for consistency

//   try {
//     const response = await API.post("/upload/image", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     // More specific error handling
//     if (error.response) {
//       throw new Error(
//         error.response.data?.message ||
//           `Upload failed: ${error.response.status}`
//       );
//     } else {
//       throw new Error("Network error during upload");
//     }
//   }
// };

import API from "./axios";

export const uploadImage = async (file) => {
  // Validate file before upload
  if (!file) {
    throw new Error("No file selected");
  }

  // Check file size (10MB limit)
  if (file.size > 10 * 1024 * 1024) {
    throw new Error("File size exceeds 10MB limit");
  }

  // Check file type
  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!validTypes.includes(file.type)) {
    throw new Error("Only JPG, PNG, WEBP, or GIF images are allowed");
  }

  const formData = new FormData();
  formData.append("image", file); // Field name must match backend expectation

  try {
    const response = await API.post("/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 30000, // 30 second timeout for large files
    });

    return {
      success: true,
      ...response.data,
    };
  } catch (error) {
    let errorMessage = "Image upload failed";

    if (error.response) {
      // Backend returned an error response
      errorMessage = error.response.data?.message || errorMessage;
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = "Network error - no response from server";
    } else {
      // Something happened in setting up the request
      errorMessage = error.message || errorMessage;
    }

    throw new Error(errorMessage);
  }
};
