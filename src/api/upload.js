// // // import API from "./axios";

// // // // export const uploadImage = async (file) => {
// // // //   try {
// // // //     const formData = new FormData();
// // // //     formData.append("file", file);

// // // //     const response = await API.post("/upload/image", formData, {
// // // //       headers: {
// // // //         "Content-Type": "multipart/form-data",
// // // //       },
// // // //     });
// // // //     return response.data;
// // // //   } catch (error) {
// // // //     throw error.response.data.message || "Failed to upload image";
// // // //   }
// // // // };

// // // // uploadService.js
// // // export const uploadImage = async (file) => {
// // //   const formData = new FormData();
// // //   formData.append("image", file); // Changed from "file" to "image" for consistency

// // //   try {
// // //     const response = await API.post("/upload/image", formData, {
// // //       headers: {
// // //         "Content-Type": "multipart/form-data",
// // //       },
// // //     });
// // //     return response.data;
// // //   } catch (error) {
// // //     // More specific error handling
// // //     if (error.response) {
// // //       throw new Error(
// // //         error.response.data?.message ||
// // //           `Upload failed: ${error.response.status}`
// // //       );
// // //     } else {
// // //       throw new Error("Network error during upload");
// // //     }
// // //   }
// // // };

// // import API from "./axios";

// // export const uploadImage = async (file) => {
// //   // Validate file before upload
// //   if (!file) {
// //     throw new Error("No file selected");
// //   }

// //   // Check file size (10MB limit)
// //   if (file.size > 10 * 1024 * 1024) {
// //     throw new Error("File size exceeds 10MB limit");
// //   }

// //   // Check file type
// //   const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
// //   if (!validTypes.includes(file.type)) {
// //     throw new Error("Only JPG, PNG, WEBP, or GIF images are allowed");
// //   }

// //   const formData = new FormData();
// //   formData.append("image", file); // Field name must match backend expectation

// //   try {
// //     const response = await API.post("/upload/image", formData, {
// //       headers: {
// //         "Content-Type": "multipart/form-data",
// //       },
// //       timeout: 30000, // 30 second timeout for large files
// //     });

// //     return {
// //       success: true,
// //       ...response.data,
// //     };
// //   } catch (error) {
// //     let errorMessage = "Image upload failed";

// //     if (error.response) {
// //       // Backend returned an error response
// //       errorMessage = error.response.data?.message || errorMessage;
// //     } else if (error.request) {
// //       // Request was made but no response received
// //       errorMessage = "Network error - no response from server";
// //     } else {
// //       // Something happened in setting up the request
// //       errorMessage = error.message || errorMessage;
// //     }

// //     throw new Error(errorMessage);
// //   }
// // };

// import API from "./axios";

// /**
//  * Uploads an image to the server
//  * @param {File} file - The image file to upload
//  * @returns {Promise<Object>} - Object containing upload results
//  */
// export const uploadImage = async (file) => {
//   // Validate file before upload
//   if (!file) {
//     throw new Error("No file selected");
//   }

//   // Check file size (10MB limit)
//   if (file.size > 10 * 1024 * 1024) {
//     throw new Error("File size exceeds 10MB limit");
//   }

//   // Check file type
//   const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
//   if (!validTypes.includes(file.type)) {
//     throw new Error("Only JPG, PNG, WEBP, or GIF images are allowed");
//   }

//   // Create FormData and append file
//   const formData = new FormData();
//   formData.append("image", file); // Field name must match backend expectation

//   try {
//     console.log(
//       `Uploading file: ${file.name} (${file.size} bytes, ${file.type})`
//     );

//     // Make the upload request
//     const response = await API.post("/upload/image", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       timeout: 60000, // 60 second timeout for large files
//       onUploadProgress: (progressEvent) => {
//         const percentCompleted = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total
//         );
//         console.log(`Upload progress: ${percentCompleted}%`);
//       },
//     });

//     console.log("Upload successful:", response.data);

//     return {
//       success: true,
//       ...response.data,
//     };
//   } catch (error) {
//     // Handle different error scenarios
//     let errorMessage = "Image upload failed";

//     if (error.response) {
//       // Backend returned an error response
//       console.error("Server error response:", error.response.data);
//       errorMessage =
//         error.response.data?.message ||
//         error.response.data?.error ||
//         `Server error (${error.response.status})`;
//     } else if (error.request) {
//       // Request was made but no response received
//       console.error("Network error - no response:", error.request);
//       errorMessage =
//         "Network error - no response from server. Please check your connection.";
//     } else {
//       // Something happened in setting up the request
//       console.error("Request setup error:", error.message);
//       errorMessage = error.message || errorMessage;
//     }

//     console.error("Upload failed:", errorMessage);
//     throw new Error(errorMessage);
//   }
// };

import API from "./axios";

/**
 * Uploads an image to the server and handles common error cases
 * @param {File} file - The image file to upload
 * @returns {Promise<Object>} - Object containing upload results
 */
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

  // Create FormData and append file
  const formData = new FormData();
  formData.append("image", file); // Field name must match backend expectation

  // Add a timestamp to prevent caching issues
  formData.append("timestamp", Date.now());

  try {
    console.log(
      `Uploading file: ${file.name} (${file.size} bytes, ${file.type})`
    );

    // Make the upload request with extended timeout
    const response = await API.post("/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 90000, // 90 second timeout for large files
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(`Upload progress: ${percentCompleted}%`);
      },
    });

    console.log("Upload successful:", response.data);

    return {
      success: true,
      ...response.data,
    };
  } catch (error) {
    // Handle different error scenarios
    let errorMessage = "Image upload failed";
    let errorDetails = "";

    if (error.response) {
      // Backend returned an error response
      console.error("Server error response:", error.response.data);

      // Try to get a meaningful error message
      errorMessage =
        error.response.data?.message ||
        error.response.data?.error ||
        `Server error (${error.response.status})`;

      // Add Cloudinary-specific error handling
      if (error.response.status === 500) {
        errorMessage = "Image upload failed - server error";
        errorDetails =
          "This might be due to Cloudinary configuration issues. Please try again or contact support.";
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network error - no response:", error.request);
      errorMessage =
        "Network error - no response from server. Please check your connection.";
      errorDetails =
        "The upload request timed out or didn't receive a response from the server.";
    } else {
      // Something happened in setting up the request
      console.error("Request setup error:", error.message);
      errorMessage = error.message || errorMessage;
    }

    console.error("Upload failed:", errorMessage);

    // Create a more detailed error object
    const enhancedError = new Error(errorMessage);
    enhancedError.details = errorDetails;
    enhancedError.originalError = error;

    throw enhancedError;
  }
};
