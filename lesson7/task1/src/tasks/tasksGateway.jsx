const baseUrl = "https://60d1e1ef5b017400178f49d0.mockapi.io/api/v1/tasks";

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
//     .then((response) => {
//     if (!response.ok) {
//       throw new Error("Failed to create task");
//     }
//   });
// };

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
//   .then((response) => {
//   if (!response.ok) {
//     throw new Error("Failed to update task");
//   }
// });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
//   .then((response) => {
//   if (!response.ok) {
//     throw new Error("Failed to delete task");
//   }
// });

export const fetchTasksList = () => fetch(baseUrl).then((res) => res.json());
