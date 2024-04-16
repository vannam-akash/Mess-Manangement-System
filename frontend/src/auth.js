import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function setStaffAuth(token, staffId){
  delAuth();
  localStorage.setItem("token", token);
  localStorage.setItem("id", staffId);
  localStorage.setItem("type", "staff");
}

export function setStudAuth(token, studId) {
  delAuth();
  localStorage.setItem("token",token);
  localStorage.setItem("id", studId);
  localStorage.setItem("type", "stud");
}

export function delAuth(){
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("type");
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/auth");
  return null;
}

export function getExpDuration(){
    const expDate = new Date(localStorage.getItem('expDate'));
    const now = new Date();
    const duration = expDate.getTime()-now.getTime();
    return duration;
}
