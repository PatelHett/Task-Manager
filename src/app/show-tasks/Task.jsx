import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);
 async function deleteTask(taskId) {
    //......
    const notiResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTaskParent(taskId);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });  
  }

  return (
    <div
      className={`shadow-lg mt-2 rounded-lg ${
        task.status == "completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold uppercase">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
          >
            <MdDeleteOutline />
          </span>
        </div>

        <p className="font-normal mt-3">{task.content}</p>

        <div className="flex justify-between mt-3">
          <p className="text-left uppercase">
            <span className="font-bold text-gray-500 ">{task.status}</span>
          </p>
          <p className="text-right uppercase">
            <span className="font-bold text-gray-500 ">~ {user.name}</span>
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Task;
