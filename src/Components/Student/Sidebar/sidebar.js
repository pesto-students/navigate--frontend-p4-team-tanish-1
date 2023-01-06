import { FiHome, FiSearch, FiSettings } from "react-icons/fi/index.js"
import Sidebar from "../../sidebar.js"

export default function StudentSidebar(){
    const data = [
        { name: "Dashboard", to: "/student/dashboard", icon: FiHome },
        { name: "Search", to: "/student/search", icon: FiSearch },
        { name: "Setting", to: "/student/profile", icon: FiSettings},    
    ]
    return Sidebar(data)
}