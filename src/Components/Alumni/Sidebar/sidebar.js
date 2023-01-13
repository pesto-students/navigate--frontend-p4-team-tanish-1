import { FiHome, FiSettings } from "react-icons/fi/index.js"
import Sidebar from "../../sidebar.js"

export default function StudentSidebar(){
    const data = [
        { key: "1", name: "Dashboard", to: "/alumni/dashboard", icon: FiHome },
        { key: "2", name: "Setting", to: "/alumni/profile", icon: FiSettings},    
    ]
    return Sidebar(data)
}