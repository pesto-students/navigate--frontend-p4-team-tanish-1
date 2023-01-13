import { FiHome, FiSearch, FiSettings } from "react-icons/fi/index.js"
import Sidebar from "../../sidebar.js"

export default function StudentSidebar(){
    const data = [
        { key:1, name: "Dashboard", to: "/student/dashboard", icon: FiHome },
        { key:2, name: "Search", to: "/student/search", icon: FiSearch },
        { key:3, name: "Setting", to: "/student/profile", icon: FiSettings},    
    ]
    return Sidebar(data)
}