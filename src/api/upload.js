import API from "./axios";

// export const uploadImage = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await API.post("/upload/image", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data.message || "Failed to upload image";
//   }
// };

// uploadService.js
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file); // Changed from "file" to "image" for consistency

  try {
    const response = await API.post("/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // More specific error handling
    if (error.response) {
      throw new Error(
        error.response.data?.message ||
          `Upload failed: ${error.response.status}`
      );
    } else {
      throw new Error("Network error during upload");
    }
  }
};
