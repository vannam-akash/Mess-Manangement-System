import { redirect } from "react-router-dom";

export function setStaffAuth(token, staffId, messId){
  delAuth();
  localStorage.setItem("token", token);
  localStorage.setItem("id", staffId);
  localStorage.setItem("mess_id", messId)
  localStorage.setItem("user_type", "staff");
}

export function setStudAuth(token, studId) {
  delAuth();
  localStorage.setItem("token",token);
  localStorage.setItem("id", studId);
  localStorage.setItem("user_type", "stud");
}

export function delAuth(){
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("user_type");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getId() {
  return localStorage.getItem("id");
}

export function getMessId() {
  return localStorage.getItem("mess_id");
}

export function getUserType() {
  return localStorage.getItem("user_type");
}

export function checkAuthLoader() {
  if(!getToken() || !getId()) return null;
  return getUserType(); 
}

export function checkStudAuthLoader() {
  const user_type = getUserType();
  if(window.location.pathname === "/students/login") return null;
  if(!user_type || user_type !== "stud") return redirect("/students/login");
}

export function checkStaffAuthLoader() {
  const user_type = getUserType();
  if(window.location.pathname === "/staffs/login") return null;
  if(!user_type || user_type !== "staff") return redirect("/staffs/login");
  return null;
}

export function getExpDuration(){
    const expDate = new Date(localStorage.getItem('expDate'));
    const now = new Date();
    const duration = expDate.getTime()-now.getTime();
    return duration;
}
