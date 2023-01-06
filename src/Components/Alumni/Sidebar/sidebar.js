import { FiHome, FiSettings } from "react-icons/fi/index.js"
import Sidebar from "../../sidebar.js"

export default function StudentSidebar(){
    const data = [
        { name: "Dashboard", to: "/alumni/dashboard", icon: FiHome },
        { name: "Setting", to: "/alumni/profile", icon: FiSettings},    
    ]
    return Sidebar(data)
}